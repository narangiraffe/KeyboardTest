function createKeyButton (symbol) {
  
  const div = document.createElement('div');
  div.classList.add('key');
  div.setAttribute('data-key', symbol);

  const p = document.createElement('p');
  p.classList.add('symbol');
  p.textContent = symbol;
  div.appendChild(p);

  const span = document.createElement('span');
  span.classList.add('signal');
  div.appendChild(span);

  return div;
}

function drawKeyboard (keys) {
  const keyboardElement = document.querySelector('.keyboard');
  for (const key of keys) {
    keyboardElement.appendChild(createKeyButton(key));
  }
}

const latinKeyboard = ['Q','W','E','R','T'];
drawKeyboard(latinKeyboard);

document.addEventListener('keydown', (event) => {
  const pressedKey = event.key.toUpperCase();
  const keySignal = document.querySelector(`.key[data-key="${pressedKey}"]`);
  keySignal.querySelector('.signal').style.backgroundColor = '#80EF80';
    
});

document.addEventListener('keyup', (event) => {
  const releasedKey = event.key.toUpperCase();
  const keySignal = document.querySelector(`.key[data-key="${releasedKey}"]`);
  keySignal.querySelector('.signal').style.backgroundColor = '';
});