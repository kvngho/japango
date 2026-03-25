import { getReviewWords, getMissedWords, markKnown, markUnknown } from './storage.js';

const SESSION_SIZE = 20;

let allCards = [];
let sessionCards = [];
let currentIndex = 0;
let stats = { total: 0, known: 0, unknown: 0 };
let flipped = false;
let totalReviewCount = 0;
let completedCount = 0;
let wrongCards = [];
let retryMode = false;
let missedOnlyMode = false;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildCards(words) {
  const result = [];
  for (const word of words) {
    result.push({ ...word, direction: 'kr_jp', front: word.korean, back: word.hiragana, frontLabel: '한국어', backLabel: 'ひらがな' });
  }
  return result;
}

function sortByOverdue(cards) {
  const today = new Date().toISOString().split('T')[0];
  return cards.sort((a, b) => {
    const overdueA = (new Date(today) - new Date(a.next_review_date)) / 86400000;
    const overdueB = (new Date(today) - new Date(b.next_review_date)) / 86400000;
    return overdueB - overdueA;
  });
}

export function initQuiz() {
  const container = document.getElementById('quiz-container');
  const reviewWords = getReviewWords();
  const sorted = sortByOverdue(buildCards(reviewWords));
  allCards = sorted;
  totalReviewCount = allCards.length;
  completedCount = 0;
  wrongCards = [];
  retryMode = false;
  missedOnlyMode = false;

  if (allCards.length === 0) {
    container.innerHTML = `
      <div class="quiz-empty">
        <p class="quiz-empty-icon">🎉</p>
        <p class="quiz-empty-text">복습할 단어가 없습니다</p>
        <p class="quiz-empty-sub">새 단어를 입력하거나 내일 다시 확인하세요</p>
      </div>`;
    document.getElementById('quiz-buttons').style.display = 'none';
    document.getElementById('quiz-progress').textContent = '';
    return;
  }

  startSession();
}

export function initMissedQuiz() {
  const container = document.getElementById('quiz-container');
  const missedWords = getMissedWords();
  allCards = shuffle(buildCards(missedWords));
  totalReviewCount = allCards.length;
  completedCount = 0;
  wrongCards = [];
  retryMode = false;
  missedOnlyMode = true;

  if (allCards.length === 0) {
    container.innerHTML = `
      <div class="quiz-empty">
        <p class="quiz-empty-icon">🎉</p>
        <p class="quiz-empty-text">틀린 단어가 없습니다</p>
        <p class="quiz-empty-sub">오답이 생기면 여기서 연습할 수 있어요</p>
      </div>`;
    document.getElementById('quiz-buttons').style.display = 'none';
    document.getElementById('quiz-progress').textContent = '';
    return;
  }

  startSession();
}

function startSession() {
  sessionCards = shuffle(allCards.splice(0, SESSION_SIZE));
  currentIndex = 0;
  stats = { total: sessionCards.length, known: 0, unknown: 0 };
  flipped = false;

  document.getElementById('quiz-buttons').style.display = 'none';
  showCard();
}

function showCard() {
  if (currentIndex >= sessionCards.length) {
    showSessionComplete();
    return;
  }

  const card = sessionCards[currentIndex];
  flipped = false;
  document.getElementById('quiz-buttons').style.display = 'none';

  const container = document.getElementById('quiz-container');
  container.innerHTML = `
    <div class="card" id="quiz-card">
      <div class="card-inner">
        <div class="card-front">
          <span class="card-label">${card.frontLabel}</span>
          <span class="card-text">${card.front}</span>
          <span class="card-hint">탭하여 정답 보기</span>
        </div>
        <div class="card-back">
          <span class="card-label">${card.backLabel}</span>
          <span class="card-text">${card.back}</span>
        </div>
      </div>
    </div>`;

  document.getElementById('quiz-card').addEventListener('click', () => {
    if (!flipped) {
      flipped = true;
      document.getElementById('quiz-card').classList.add('flipped');
      document.getElementById('quiz-buttons').style.display = 'flex';
    }
  });

  const done = completedCount + currentIndex + 1;
  document.getElementById('quiz-progress').textContent =
    `${done} / ${totalReviewCount}`;
}

function showSessionComplete() {
  completedCount += stats.total;
  const remaining = allCards.length;

  const container = document.getElementById('quiz-container');
  container.innerHTML = `
    <div class="quiz-complete">
      <p class="quiz-complete-icon">${remaining > 0 ? '💪' : '✅'}</p>
      <p class="quiz-complete-text">${remaining > 0 ? '세션 완료!' : '오늘 복습 완료!'}</p>
      <div class="quiz-stats">
        <div class="stat">
          <span class="stat-num">${stats.total}</span>
          <span class="stat-label">전체</span>
        </div>
        <div class="stat stat-known">
          <span class="stat-num">${stats.known}</span>
          <span class="stat-label">안다</span>
        </div>
        <div class="stat stat-unknown">
          <span class="stat-num">${stats.unknown}</span>
          <span class="stat-label">모른다</span>
        </div>
      </div>
      ${wrongCards.length > 0 ? `
        <div class="wrong-words">
          <p class="wrong-words-title">틀린 단어</p>
          ${wrongCards.map(c => `
            <div class="wrong-word-item">
              <span class="wrong-word-kr">${c.front}</span>
              <span class="wrong-word-jp">${c.back}</span>
            </div>
          `).join('')}
        </div>
        <button class="quiz-continue-btn" id="btn-retry-wrong">틀린 ${wrongCards.length}장 다시하기</button>
      ` : ''}
      ${remaining > 0 ? `
        <p class="quiz-remaining">${remaining}장 남음</p>
        <button class="quiz-continue-btn secondary" id="btn-continue">${Math.min(remaining, SESSION_SIZE)}장 더 하기</button>
      ` : ''}
    </div>`;

  document.getElementById('quiz-buttons').style.display = 'none';
  document.getElementById('quiz-progress').textContent = '';

  const retryBtn = document.getElementById('btn-retry-wrong');
  if (retryBtn) {
    retryBtn.addEventListener('click', () => {
      retryMode = true;
      sessionCards = shuffle([...wrongCards]);
      wrongCards = [];
      currentIndex = 0;
      stats = { total: sessionCards.length, known: 0, unknown: 0 };
      flipped = false;
      document.getElementById('quiz-buttons').style.display = 'none';
      totalReviewCount = sessionCards.length;
      completedCount = 0;
      showCard();
    });
  }

  const continueBtn = document.getElementById('btn-continue');
  if (continueBtn) {
    continueBtn.addEventListener('click', () => {
      retryMode = false;
      wrongCards = [];
      startSession();
    });
  }
}

export function handleKnown() {
  if (currentIndex >= sessionCards.length) return;
  const card = sessionCards[currentIndex];
  if (!retryMode && !missedOnlyMode) {
    markKnown(card.id);
  }
  stats.known++;
  currentIndex++;
  showCard();
}

export function handleUnknown() {
  if (currentIndex >= sessionCards.length) return;
  const card = sessionCards[currentIndex];
  if (!missedOnlyMode) {
    markUnknown(card.id);
  }
  wrongCards.push(card);
  stats.unknown++;
  currentIndex++;
  showCard();
}
