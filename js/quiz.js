import { getReviewWords, markKnown, markUnknown } from './storage.js';

let cards = [];
let currentIndex = 0;
let stats = { total: 0, known: 0, unknown: 0 };
let flipped = false;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function initQuiz() {
  const container = document.getElementById('quiz-container');
  cards = shuffle(getReviewWords());
  currentIndex = 0;
  stats = { total: cards.length, known: 0, unknown: 0 };
  flipped = false;

  if (cards.length === 0) {
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

  document.getElementById('quiz-buttons').style.display = 'flex';
  showCard();
}

function showCard() {
  if (currentIndex >= cards.length) {
    showComplete();
    return;
  }

  const card = cards[currentIndex];
  const showKoreanFirst = Math.random() < 0.5;
  flipped = false;

  const front = showKoreanFirst ? card.korean : card.hiragana;
  const back = showKoreanFirst ? card.hiragana : card.korean;
  const frontLabel = showKoreanFirst ? '한국어' : 'ひらがな';
  const backLabel = showKoreanFirst ? 'ひらがな' : '한국어';

  const container = document.getElementById('quiz-container');
  container.innerHTML = `
    <div class="card" id="quiz-card">
      <div class="card-inner">
        <div class="card-front">
          <span class="card-label">${frontLabel}</span>
          <span class="card-text">${front}</span>
          <span class="card-hint">탭하여 뒤집기</span>
        </div>
        <div class="card-back">
          <span class="card-label">${backLabel}</span>
          <span class="card-text">${back}</span>
        </div>
      </div>
    </div>`;

  document.getElementById('quiz-card').addEventListener('click', () => {
    flipped = !flipped;
    document.getElementById('quiz-card').classList.toggle('flipped', flipped);
  });

  document.getElementById('quiz-progress').textContent =
    `${currentIndex + 1} / ${cards.length}`;
}

function showComplete() {
  const container = document.getElementById('quiz-container');
  container.innerHTML = `
    <div class="quiz-complete">
      <p class="quiz-complete-icon">✅</p>
      <p class="quiz-complete-text">오늘 복습 완료!</p>
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
    </div>`;
  document.getElementById('quiz-buttons').style.display = 'none';
  document.getElementById('quiz-progress').textContent = '';
}

export function handleKnown() {
  if (currentIndex >= cards.length) return;
  markKnown(cards[currentIndex].id);
  stats.known++;
  currentIndex++;
  showCard();
}

export function handleUnknown() {
  if (currentIndex >= cards.length) return;
  markUnknown(cards[currentIndex].id);
  stats.unknown++;
  currentIndex++;
  showCard();
}
