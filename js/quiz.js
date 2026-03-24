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

function buildCards(words) {
  const result = [];
  for (const word of words) {
    const today = new Date().toISOString().split('T')[0];
    // 일→한 방향: 아직 오늘 안다고 안 한 경우만
    if (word.known_jp_kr_date !== today) {
      result.push({ ...word, direction: 'jp_kr', front: word.hiragana, back: word.korean, frontLabel: 'ひらがな', backLabel: '한국어' });
    }
    // 한→일 방향: 아직 오늘 안다고 안 한 경우만
    if (word.known_kr_jp_date !== today) {
      result.push({ ...word, direction: 'kr_jp', front: word.korean, back: word.hiragana, frontLabel: '한국어', backLabel: 'ひらがな' });
    }
  }
  return result;
}

export function initQuiz() {
  const container = document.getElementById('quiz-container');
  const reviewWords = getReviewWords();
  cards = shuffle(buildCards(reviewWords));
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

  document.getElementById('quiz-buttons').style.display = 'none';
  showCard();
}

function showCard() {
  if (currentIndex >= cards.length) {
    showComplete();
    return;
  }

  const card = cards[currentIndex];
  flipped = false;
  document.getElementById('quiz-buttons').style.display = 'none';

  const directionTag = card.direction === 'jp_kr' ? '일→한' : '한→일';

  const container = document.getElementById('quiz-container');
  container.innerHTML = `
    <div class="card" id="quiz-card">
      <div class="card-inner">
        <div class="card-front">
          <span class="card-direction">${directionTag}</span>
          <span class="card-label">${card.frontLabel}</span>
          <span class="card-text">${card.front}</span>
          <span class="card-hint">탭하여 정답 보기</span>
        </div>
        <div class="card-back">
          <span class="card-direction">${directionTag}</span>
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
  const card = cards[currentIndex];
  markKnown(card.id, card.direction);
  stats.known++;
  currentIndex++;
  showCard();
}

export function handleUnknown() {
  if (currentIndex >= cards.length) return;
  const card = cards[currentIndex];
  markUnknown(card.id);
  stats.unknown++;
  currentIndex++;
  showCard();
}
