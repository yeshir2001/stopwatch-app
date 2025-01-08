const timerDisplay = document.querySelector('.timer-display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

let timerInterval;
let startTime;
let elapsedTime = 0;

function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  const hundredths = String(Math.floor((milliseconds % 1000) / 10)).padStart(2, '0');
  return `${minutes}:${seconds}:${hundredths}`;
}

function updateTimer() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  timerDisplay.textContent = formatTime(elapsedTime);
}

startBtn.addEventListener('click', () => {
  if (!timerInterval) {
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 10);
  }
});

pauseBtn.addEventListener('click', () => {
    if(timerInterval){
        clearInterval(timerInterval);
        timerInterval = null;
        startBtn.disabled = false;
        pauseBtn.disabled = true;
    }
});


resetBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  timerDisplay.textContent = '00:00:00';
  startBtn.disabled = false;
  pauseBtn.disabled = true;

});

pauseBtn.disabled = true;
