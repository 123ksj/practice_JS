let minutes = 0;
let seconds = 0;
let tenMillies = 0;

const appendTens = document.getElementById("tenMillis");
const appendSeconds = document.getElementById("seconds");
const appendMinutes = document.getElementById("minutes");
const buttonStart = document.getElementById("bt_start");
const buttonStop = document.getElementById("bt_stop");
const buttonReset = document.getElementById("bt_reset");

let intervalId;

buttonStart.onclick = function(){
  clearInterval(intervalId);
  intervalId = setInterval(operateTimer, 10);
}

buttonStop.onclick = function(){
  clearInterval(intervalId);
}

buttonReset.onclick = function(){
  clearInterval(intervalId);
  tenMillies = 0;
  seconds = 0;
  minutes = 0;
  appendTens.textContent = "00";
  appendSeconds.textContent = "00";
  appendMinutes.textContent = "00";
}

// 10ms마다 시간에 대한 숫자가 증가한다.
function operateTimer(){
  tenMillies++;
  appendTens.textContent = tenMillies > 9 ? tenMillies : '0' + tenMillies;
  if(tenMillies > 99){
    seconds++;
    appendSeconds.textContent = seconds > 9 ? seconds : '0' + seconds;
    tenMillies = 0;
    appendTens.textContent = "00";
  }
  if(seconds > 59){
    minutes++;
    appendMinutes.textContent = minutes > 9 ? minutes : '0' + minutes;
    seconds = 0;
    appendSeconds.textContent = "00";
  }
}