import { addWord, getWords, deleteWord, getReviewCount, getWordCount, getLastBackupDate, getMissedWords, resetMissedStats, importWords } from './storage.js';
import { bindRomajiInput, toHiragana, unbindRomajiInput } from './romaji.js';
import { initQuiz, initMissedQuiz, handleKnown, handleUnknown } from './quiz.js';
import { exportCSV, exportJSON, handleImport } from './export.js';
import { WORD_PACKS } from './presets.js';

let skipQuizInit = false;

// --- Routing ---
function router() {
  const hash = location.hash || '#input';
  document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  switch (hash) {
    case '#quiz':
      document.getElementById('view-quiz').style.display = 'block';
      document.querySelector('[data-view="quiz"]').classList.add('active');
      if (!skipQuizInit) initQuiz();
      skipQuizInit = false;
      break;
    case '#packs':
      document.getElementById('view-packs').style.display = 'block';
      document.querySelector('[data-view="packs"]').classList.add('active');
      renderPacks();
      break;
    case '#missed':
      document.getElementById('view-missed').style.display = 'block';
      document.querySelector('[data-view="missed"]').classList.add('active');
      renderMissedWords();
      break;
    case '#settings':
      document.getElementById('view-settings').style.display = 'block';
      document.querySelector('[data-view="settings"]').classList.add('active');
      renderSettings();
      break;
    default:
      document.getElementById('view-input').style.display = 'block';
      document.querySelector('[data-view="input"]').classList.add('active');
      renderRecentWords();
      break;
  }
}

// --- Input View ---
function setupInputView() {
  const romajiInput = document.getElementById('romaji-input');
  const preview = document.getElementById('hiragana-preview');
  const koreanInput = document.getElementById('korean-input');
  const saveBtn = document.getElementById('save-btn');

  bindRomajiInput(romajiInput, preview);

  saveBtn.addEventListener('click', () => {
    const romaji = romajiInput.value.trim();
    const korean = koreanInput.value.trim();
    if (!romaji || !korean) {
      alert('로마자와 한국어 뜻을 모두 입력해주세요.');
      return;
    }
    const hiragana = toHiragana(romaji);
    const word = addWord(hiragana, korean, romaji);
    if (word) {
      romajiInput.value = '';
      koreanInput.value = '';
      preview.textContent = '';
      if (window.wanakana) {
        unbindRomajiInput(romajiInput);
        bindRomajiInput(romajiInput, preview);
      }
      romajiInput.focus();
      renderRecentWords();
    }
  });

  // Enter key to save
  koreanInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') saveBtn.click();
  });

  // Search
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    if (query) {
      renderSearchResults(query);
    } else {
      document.getElementById('word-list-title').textContent = '최근 입력';
      renderRecentWords();
    }
  });
}

function renderRecentWords() {
  const list = document.getElementById('recent-words');
  const words = getWords().slice(-10).reverse();
  if (words.length === 0) {
    list.innerHTML = '<p class="empty-msg">아직 등록된 단어가 없습니다</p>';
    return;
  }
  list.innerHTML = words.map(w => `
    <div class="word-item">
      <div class="word-info">
        <span class="word-hiragana">${w.hiragana}</span>
        <span class="word-korean">${w.korean}</span>
      </div>
      <button class="delete-btn" data-id="${w.id}" aria-label="삭제">✕</button>
    </div>
  `).join('');

  list.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = Number(e.target.dataset.id);
      if (confirm('이 단어를 삭제할까요?')) {
        deleteWord(id);
        renderRecentWords();
      }
    });
  });
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function highlightMatch(text, query) {
  const escaped = escapeHtml(text);
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return escaped;
  const before = escapeHtml(text.slice(0, idx));
  const match = escapeHtml(text.slice(idx, idx + query.length));
  const after = escapeHtml(text.slice(idx + query.length));
  return `${before}<span class="search-highlight">${match}</span>${after}`;
}

function renderSearchResults(query) {
  const list = document.getElementById('recent-words');
  const title = document.getElementById('word-list-title');
  const q = query.toLowerCase();
  const words = getWords().filter(w =>
    w.hiragana.toLowerCase().includes(q) ||
    w.korean.toLowerCase().includes(q) ||
    (w.romaji && w.romaji.toLowerCase().includes(q))
  );

  title.textContent = `검색 결과 (${words.length}건)`;

  if (words.length === 0) {
    list.innerHTML = '<p class="empty-msg">일치하는 단어가 없습니다</p>';
    return;
  }

  list.innerHTML = words.map(w => `
    <div class="word-item">
      <div class="word-info">
        <span class="word-hiragana">${highlightMatch(w.hiragana, query)}</span>
        <span class="word-korean">${highlightMatch(w.korean, query)}</span>
      </div>
      <button class="delete-btn" data-id="${w.id}" aria-label="삭제">✕</button>
    </div>
  `).join('');

  list.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = Number(e.target.dataset.id);
      if (confirm('이 단어를 삭제할까요?')) {
        deleteWord(id);
        renderSearchResults(query);
      }
    });
  });
}

// --- Quiz View ---
function setupQuizView() {
  document.getElementById('btn-known').addEventListener('click', handleKnown);
  document.getElementById('btn-unknown').addEventListener('click', handleUnknown);
}

// --- Missed Words View ---
function renderMissedWords() {
  const list = document.getElementById('missed-words-list');
  const actions = document.getElementById('missed-actions');
  const words = getMissedWords();

  if (words.length === 0) {
    actions.innerHTML = '';
    list.innerHTML = '<p class="empty-msg">틀린 단어가 없습니다</p>';
    return;
  }

  actions.innerHTML = `
    <div class="missed-actions-bar">
      <button id="btn-missed-quiz" class="missed-action-btn primary">오답만 학습 (${words.length}개)</button>
      <button id="btn-reset-missed" class="missed-action-btn">오답 초기화</button>
    </div>`;

  document.getElementById('btn-missed-quiz').addEventListener('click', () => {
    skipQuizInit = true;
    location.hash = '#quiz';
    initMissedQuiz();
  });

  document.getElementById('btn-reset-missed').addEventListener('click', () => {
    if (confirm('틀린 횟수와 학습 기록을 초기화하고 처음부터 다시 복습합니다. 계속할까요?')) {
      const count = resetMissedStats();
      alert(`${count}개 단어의 오답 기록이 초기화되었습니다.`);
      renderMissedWords();
    }
  });

  list.innerHTML = words.map(w => {
    const total = w.total_seen_count || 0;
    const unknown = w.unknown_count || 0;
    const rate = total > 0 ? Math.round((unknown / total) * 100) : 0;
    return `
      <div class="missed-word-item">
        <div class="missed-word-info">
          <span class="missed-word-jp">${w.hiragana}</span>
          <span class="missed-word-kr">${w.korean}</span>
        </div>
        <div class="missed-word-stats">
          <span class="missed-word-rate">${rate}%</span>
          <span class="missed-word-detail">${unknown}회 틀림 / ${total}회 출제</span>
        </div>
      </div>`;
  }).join('');
}

// --- Word Pack View ---
function renderPacks() {
  const container = document.getElementById('pack-list');
  const existingWords = getWords();
  const existingKeys = new Set(existingWords.map(w => `${w.hiragana}|${w.korean}`));

  container.innerHTML = WORD_PACKS.map(pack => {
    const allWords = pack.themes.flatMap(t => t.words);
    const newCount = allWords.filter(w => !existingKeys.has(`${w.hiragana}|${w.korean}`)).length;
    const dupCount = allWords.length - newCount;

    return `
      <div class="pack-card" data-pack-id="${pack.id}">
        <div class="pack-header">
          <div>
            <span class="pack-level">${pack.level}</span>
            <h2 class="pack-title">${pack.title}</h2>
            <p class="pack-desc">${pack.description}</p>
          </div>
          <button class="pack-toggle" data-pack-id="${pack.id}" aria-label="펼치기">▼</button>
        </div>
        <div class="pack-summary">
          <span>${allWords.length}개 단어</span>
          <span>${pack.themes.length}개 테마</span>
          ${dupCount > 0 ? `<span class="pack-dup">${dupCount}개 보유중</span>` : ''}
        </div>
        <div class="pack-themes" id="pack-themes-${pack.id}" style="display:none">
          ${pack.themes.map((theme, ti) => {
            const themeNewCount = theme.words.filter(w => !existingKeys.has(`${w.hiragana}|${w.korean}`)).length;
            const themeDupCount = theme.words.length - themeNewCount;
            return `
              <div class="pack-theme">
                <div class="pack-theme-header">
                  <span class="pack-theme-name">${theme.name} (${theme.words.length})</span>
                  <button class="pack-theme-add" data-pack-id="${pack.id}" data-theme-idx="${ti}"
                    ${themeNewCount === 0 ? 'disabled' : ''}>
                    ${themeNewCount === 0 ? '모두 추가됨' : `+${themeNewCount}개 추가`}
                  </button>
                </div>
                <div class="pack-theme-words">
                  ${theme.words.map(w => {
                    const isDup = existingKeys.has(`${w.hiragana}|${w.korean}`);
                    return `<div class="pack-word ${isDup ? 'pack-word-dup' : ''}">
                      <span class="pack-word-jp">${w.hiragana}</span>
                      <span class="pack-word-kr">${w.korean}</span>
                      ${isDup ? '<span class="pack-word-badge">보유</span>' : ''}
                    </div>`;
                  }).join('')}
                </div>
              </div>`;
          }).join('')}
          <button class="pack-add-all" data-pack-id="${pack.id}"
            ${newCount === 0 ? 'disabled' : ''}>
            ${newCount === 0 ? '모든 단어가 이미 추가됨' : `전체 ${newCount}개 새 단어 추가`}
          </button>
        </div>
      </div>`;
  }).join('');

  // Toggle pack expand/collapse
  container.querySelectorAll('.pack-header').forEach(el => {
    el.addEventListener('click', () => {
      const packId = el.closest('.pack-card').dataset.packId;
      const themes = document.getElementById(`pack-themes-${packId}`);
      const toggle = el.querySelector('.pack-toggle');
      const isOpen = themes.style.display !== 'none';
      themes.style.display = isOpen ? 'none' : 'block';
      toggle.textContent = isOpen ? '▼' : '▲';
    });
  });

  // Add single theme
  container.querySelectorAll('.pack-theme-add').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const packId = btn.dataset.packId;
      const themeIdx = Number(btn.dataset.themeIdx);
      const pack = WORD_PACKS.find(p => p.id === packId);
      const theme = pack.themes[themeIdx];
      const result = importWords(theme.words);
      alert(`"${theme.name}" 추가 완료: ${result.added}개 추가, ${result.skipped}개 중복 건너뜀`);
      renderPacks();
    });
  });

  // Add all words in a pack
  container.querySelectorAll('.pack-add-all').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const packId = btn.dataset.packId;
      const pack = WORD_PACKS.find(p => p.id === packId);
      const allWords = pack.themes.flatMap(t => t.words);
      if (!confirm(`"${pack.title}" 전체 단어를 추가할까요?`)) return;
      const result = importWords(allWords);
      alert(`추가 완료: ${result.added}개 추가, ${result.skipped}개 중복 건너뜀`);
      renderPacks();
    });
  });
}

// --- Settings View ---
function renderSettings() {
  const totalWords = getWordCount();
  const reviewCount = getReviewCount();
  const lastBackup = getLastBackupDate();

  document.getElementById('stat-total').textContent = totalWords;
  document.getElementById('stat-review').textContent = reviewCount;
  document.getElementById('stat-backup').textContent = lastBackup || '없음';

  // Backup warning
  const warning = document.getElementById('backup-warning');
  if (lastBackup) {
    const daysSince = Math.floor((Date.now() - new Date(lastBackup).getTime()) / 86400000);
    warning.style.display = daysSince >= 7 ? 'block' : 'none';
  } else if (totalWords > 0) {
    warning.style.display = 'block';
  } else {
    warning.style.display = 'none';
  }
}

function setupSettingsView() {
  document.getElementById('btn-export-csv').addEventListener('click', () => {
    exportCSV();
    renderSettings();
  });
  document.getElementById('btn-export-json').addEventListener('click', () => {
    exportJSON();
    renderSettings();
  });
  document.getElementById('btn-import').addEventListener('click', () => {
    document.getElementById('import-file').click();
  });
  document.getElementById('import-file').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const result = await handleImport(file);
      alert(`가져오기 완료: ${result.added}개 추가, ${result.skipped}개 중복 건너뜀`);
      renderSettings();
    } catch (err) {
      alert(err.message);
    }
    e.target.value = '';
  });
}

// --- Init ---
function init() {
  setupInputView();
  setupQuizView();
  setupSettingsView();
  window.addEventListener('hashchange', router);
  router();
}

document.addEventListener('DOMContentLoaded', init);
