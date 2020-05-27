const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const stopButton = document.querySelector("#stop");

const workMinutes = document.querySelector("#work-minutes");
const restMinutes = document.querySelector("#rest-minutes");

const displayMinutes = document.querySelector(".minutes");
const displaySeconds = document.querySelector(".seconds");

let totalSeconds = 0;
let secondsGone = 0;
let interval;

playButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
stopButton.addEventListener("click", stopTimer);


function setTimer() {
  let minutes;

  minutes = workMinutes.value.trim(); 
  // minutes = restMinutes.value.trim();

  clearInterval(interval);
  totalSeconds = minutes * 60;
}

function renderTimer() {
  displayMinutes.textContent = formatMinutes();
  displaySeconds.textContent = formatSeconds();

  if (secondsGone >= totalSeconds) {
    stopTimer();
  }
}

function startTimer() {
  // Add functionality to start time on screen
  setTimer();

  interval = setInterval(function () {
    secondsGone++;
    renderTimer();
  }, 1000);
  // document.getElementById("play");
  // console.log("play");
}

function pauseTimer() {
  // Add functionality to pause time on screen
  // document.getElementById("pause");
  // console.log("pause");
  clearInterval(interval);
  renderTimer();
}

function stopTimer() {
  // Add functionality to stop time on screen
  // document.getElementById("stop");
  // console.log("stop");
  secondsGone = 0;
  setTimer();
  renderTimer();
}

function formatMinutes() {
  let secondsLeft = totalSeconds - secondsGone;
  let minutesLeft = Math.floor(secondsLeft / 60);
  let formattedMinutes;

  if (minutesLeft < 10) {
    formattedMinutes = "0" + minutesLeft;
  } else {
    formattedMinutes = minutesLeft;
  }
  return formattedMinutes;
}

function formatSeconds() {
  let secondsLeft = (totalSeconds - secondsGone) % 60;
  let formattedSeconds;

  if (secondsLeft < 10) {
    formattedSeconds = "0" + secondsLeft;
  } else {
    formattedSeconds = secondsLeft;
  }
  return formattedSeconds;
}

startTimer;
pauseTimer;
stopTimer;