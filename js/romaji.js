export function toHiragana(text) {
  if (window.wanakana) {
    return window.wanakana.toHiragana(text);
  }
  return text;
}

export function bindRomajiInput(inputEl, previewEl) {
  if (window.wanakana) {
    window.wanakana.bind(inputEl);
  }
  inputEl.addEventListener('input', () => {
    previewEl.textContent = toHiragana(inputEl.value);
  });
}

export function unbindRomajiInput(inputEl) {
  if (window.wanakana) {
    window.wanakana.unbind(inputEl);
  }
}
