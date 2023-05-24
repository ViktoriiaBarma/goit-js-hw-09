const CHANGE_COLOR_DELAY = 1000;

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

btnStop.disabled = true;
btnStart.addEventListener('click', onBtnStartChangeColor);
btnStop.addEventListener('click', onBtnStopChangeColor);

function onBtnStartChangeColor() {
  btnStart.disabled = true;
  btnStop.disabled = false;

  idInt = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, CHANGE_COLOR_DELAY);
}

function onBtnStopChangeColor() {
  btnStart.disabled = false;
  btnStop.disabled = true;

  clearInterval(idInt);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
