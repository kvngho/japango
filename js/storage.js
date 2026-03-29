const STORAGE_KEY = 'japango_words';
const BACKUP_DATE_KEY = 'japango_last_backup';
const SCHEMA_VERSION_KEY = 'japango_schema_version';
const CURRENT_SCHEMA_VERSION = 3;

const INTERVALS = [1, 3, 7, 14, 30];

function todayStr() {
  return new Date().toISOString().split('T')[0];
}

function addDays(dateStr, days) {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

function migrateWord(w) {
  return {
    ...w,
    known_jp_kr_date: w.known_jp_kr_date || null,
    known_kr_jp_date: w.known_kr_jp_date || null,
    unknown_count: w.unknown_count || 0,
    total_seen_count: w.total_seen_count || 0,
    examples: w.examples || []
  };
}

export function getWords() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data).map(migrateWord) : [];
  } catch {
    return [];
  }
}

function saveWords(words) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
    return true;
  } catch (e) {
    alert('저장 공간이 부족합니다. 백업 후 불필요한 단어를 삭제하세요.');
    return false;
  }
}

export function addWord(hiragana, korean, romaji, examples = []) {
  const words = getWords();
  const today = todayStr();
  const word = {
    id: Date.now(),
    hiragana,
    korean,
    romaji,
    date_added: today,
    review_interval: 0,
    next_review_date: today,
    known_count: 0,
    unknown_count: 0,
    total_seen_count: 0,
    known_jp_kr_date: null,
    known_kr_jp_date: null,
    examples
  };
  words.push(word);
  return saveWords(words) ? word : null;
}

export function deleteWord(id) {
  const words = getWords().filter(w => w.id !== id);
  saveWords(words);
}

export function updateWord(id, updates) {
  const words = getWords();
  const idx = words.findIndex(w => w.id === id);
  if (idx !== -1) {
    words[idx] = { ...words[idx], ...updates };
    saveWords(words);
  }
}

export function getReviewWords() {
  const today = todayStr();
  return getWords().filter(w => w.next_review_date <= today);
}

export function markKnown(id) {
  const words = getWords();
  const idx = words.findIndex(w => w.id === id);
  if (idx === -1) return;

  const word = words[idx];
  const today = todayStr();
  const currentIdx = INTERVALS.indexOf(word.review_interval);
  const nextInterval = currentIdx < INTERVALS.length - 1
    ? INTERVALS[currentIdx + 1]
    : INTERVALS[INTERVALS.length - 1];

  words[idx] = {
    ...word,
    review_interval: nextInterval,
    next_review_date: addDays(today, nextInterval),
    known_count: word.known_count + 1,
    total_seen_count: (word.total_seen_count || 0) + 1
  };
  saveWords(words);
}

export function markUnknown(id) {
  const words = getWords();
  const idx = words.findIndex(w => w.id === id);
  if (idx === -1) return;

  const word = words[idx];
  words[idx] = {
    ...word,
    review_interval: 1,
    next_review_date: todayStr(),
    unknown_count: (word.unknown_count || 0) + 1,
    total_seen_count: (word.total_seen_count || 0) + 1,
    known_jp_kr_date: null,
    known_kr_jp_date: null
  };
  saveWords(words);
}

export function getLastBackupDate() {
  return localStorage.getItem(BACKUP_DATE_KEY);
}

export function setLastBackupDate() {
  localStorage.setItem(BACKUP_DATE_KEY, todayStr());
}

export function getWordCount() {
  return getWords().length;
}

export function getReviewCount() {
  return getReviewWords().length;
}

export function getMissedWords() {
  return getWords()
    .filter(w => (w.unknown_count || 0) > 0)
    .sort((a, b) => (b.unknown_count || 0) - (a.unknown_count || 0));
}

export function resetMissedStats() {
  const words = getWords();
  const today = todayStr();
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if ((words[i].unknown_count || 0) > 0) {
      words[i] = {
        ...words[i],
        unknown_count: 0,
        total_seen_count: 0,
        review_interval: 0,
        next_review_date: today,
        known_count: 0,
        known_jp_kr_date: null,
        known_kr_jp_date: null
      };
      count++;
    }
  }
  saveWords(words);
  return count;
}

export function importWords(newWords) {
  const existing = getWords();
  const existingKeys = new Set(existing.map(w => `${w.hiragana}|${w.korean}`));
  let added = 0;
  let skipped = 0;

  for (const w of newWords) {
    const key = `${w.hiragana}|${w.korean}`;
    if (existingKeys.has(key)) {
      skipped++;
    } else {
      existing.push({
        id: w.id || Date.now() + Math.random(),
        hiragana: w.hiragana,
        korean: w.korean,
        romaji: w.romaji || '',
        date_added: w.date_added || todayStr(),
        review_interval: w.review_interval || 0,
        next_review_date: w.next_review_date || todayStr(),
        known_count: w.known_count || 0,
        unknown_count: w.unknown_count || 0,
        total_seen_count: w.total_seen_count || 0,
        known_jp_kr_date: w.known_jp_kr_date || null,
        known_kr_jp_date: w.known_kr_jp_date || null,
        examples: w.examples || []
      });
      existingKeys.add(key);
      added++;
    }
  }

  saveWords(existing);
  return { added, skipped };
}
