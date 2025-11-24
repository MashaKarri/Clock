const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");
const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");

let seconds = 0;
let minutes = 0;
let interval;

function updateClock() {
  const secondDegree = (seconds % 60) * 6;
  const minuteDegree = (minutes % 60) * 6;

  secondHand.style.transform = `translateX(-50%) rotate(${secondDegree}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegree}deg)`;

  seconds += 1;
  if (seconds % 60 === 0) {
    minutes += 1;
  }
}

function startClock() {
  if (!interval) {
    interval = setInterval(updateClock, 1000);
  }
}

function stopClock() {
  clearInterval(interval);
  interval = null;
}

startBtn.addEventListener("click", startClock);
stopBtn.addEventListener("click", stopClock);
