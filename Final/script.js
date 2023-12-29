let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {
  timer = setInterval(updateDisplay, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}

function updateDisplay() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  const display = document.querySelector('.display');
  display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
  return value < 10 ? `0${value}` : value;
}

document.querySelector('.start').addEventListener('click', startTimer);
document.querySelector('.stop').addEventListener('click', stopTimer);
document.querySelector('.reset').addEventListener('click', resetTimer);
