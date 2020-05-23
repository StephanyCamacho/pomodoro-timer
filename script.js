const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const stopButton = document.querySelector("#stop");

const workMinutes = document.querySelector("#work-minutes");
const restMinutes = document.querySelector("#rest-minutes");

const displayMinutes = document.querySelector(".minutes");
const displaySeconds = document.querySelector(".seconds");

const totalSeconds = 0;
const secondsElapsed = 0;

playButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
stopButton.addEventListener("click", stopTimer);


function setTimer (){

}

function startTimer(){
    // Add functionality to start time on screen
    document.getElementById("play");
    console.log("play");
}

function pauseTimer(){
    // Add functionality to pause time on screen
    document.getElementById("pause");
    console.log("pause");
}

function stopTimer(){
    // Add functionality to stop time on screen
    document.getElementById("stop");
    console.log("stop");
}

startTimer;
pauseTimer;
stopTimer;