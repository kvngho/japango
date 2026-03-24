import { addWord, getWords, deleteWord, getReviewCount, getWordCount, getLastBackupDate } from './storage.js';
import { bindRomajiInput, toHiragana, unbindRomajiInput } from './romaji.js';
import { initQuiz, handleKnown, handleUnknown } from './quiz.js';
import { exportCSV, exportJSON, handleImport } from './export.js';

// --- Routing ---
function router() {
  const hash = location.hash || '#input';
  document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  switch (hash) {
    case '#quiz':
      document.getElementById('view-quiz').style.display = 'block';
      document.querySelector('[data-view="quiz"]').classList.add('active');
      initQuiz();
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

// --- Quiz View ---
function setupQuizView() {
  document.getElementById('btn-known').addEventListener('click', handleKnown);
  document.getElementById('btn-unknown').addEventListener('click', handleUnknown);
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
