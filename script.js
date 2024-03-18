let timerInterval;
let timerRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {
  if (!timerRunning) {
    timerInterval = setInterval(updateTimer, 1000);
    timerRunning = true;
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById('timer').textContent = '00:00:00';
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  const formattedTime = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
  document.getElementById('timer').textContent = formattedTime;
}

function pad(number) {
  return (number < 10) ? '0' + number : number;
}
