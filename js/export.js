import { getWords, setLastBackupDate, importWords } from './storage.js';

function escapeCSV(str) {
  if (typeof str !== 'string') str = String(str ?? '');
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

function downloadFile(content, filename, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function exportCSV() {
  const words = getWords();
  const header = 'hiragana,korean,romaji,date_added,review_interval,next_review_date,known_count';
  const rows = words.map(w =>
    [w.hiragana, w.korean, w.romaji, w.date_added, w.review_interval, w.next_review_date, w.known_count]
      .map(escapeCSV).join(',')
  );
  const csv = [header, ...rows].join('\n');
  const date = new Date().toISOString().split('T')[0];
  downloadFile(csv, `japango-backup-${date}.csv`, 'text/csv;charset=utf-8;');
  setLastBackupDate();
}

export function exportJSON() {
  const words = getWords();
  const json = JSON.stringify(words, null, 2);
  const date = new Date().toISOString().split('T')[0];
  downloadFile(json, `japango-backup-${date}.json`, 'application/json');
  setLastBackupDate();
}

function parseCSV(text) {
  const lines = text.trim().split('\n');
  if (lines.length < 2) return [];

  const headers = lines[0].split(',').map(h => h.trim());
  const words = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (values.length < 3) continue;

    const obj = {};
    headers.forEach((h, idx) => {
      obj[h] = values[idx] || '';
    });

    words.push({
      hiragana: obj.hiragana || '',
      korean: obj.korean || '',
      romaji: obj.romaji || '',
      date_added: obj.date_added || '',
      review_interval: parseInt(obj.review_interval) || 0,
      next_review_date: obj.next_review_date || '',
      known_count: parseInt(obj.known_count) || 0
    });
  }

  return words;
}

function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"' && line[i + 1] === '"') {
        current += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        current += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ',') {
        result.push(current);
        current = '';
      } else {
        current += ch;
      }
    }
  }
  result.push(current);
  return result;
}

export function handleImport(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target.result;
        let words;

        if (file.name.endsWith('.json')) {
          words = JSON.parse(text);
          if (!Array.isArray(words)) {
            reject(new Error('JSON 파일은 배열 형식이어야 합니다.'));
            return;
          }
        } else {
          words = parseCSV(text);
        }

        const result = importWords(words);
        resolve(result);
      } catch (err) {
        reject(new Error('파일 파싱 실패: ' + err.message));
      }
    };
    reader.onerror = () => reject(new Error('파일을 읽을 수 없습니다.'));
    reader.readAsText(file);
  });
}
