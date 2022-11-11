console.log("Coundown");

const hours = document.getElementById("hours");
const HrsminusIcon = document.getElementById("HrsminusIcon");
const HrsplusIcon = document.getElementById("HrsplusIcon");

HrsminusIcon.addEventListener("click", decHrs);
function decHrs() {
  hours.innerHTML--;

  if (Number(hours.innerHTML) < 0) {
    hours.innerHTML = 23;
  }

  if (hours.innerHTML < 10) {
    hours.innerHTML = "0" + hours.innerHTML;
  }
}

HrsplusIcon.addEventListener("click", IncHrs);
function IncHrs() {
  hours.innerHTML++;

  if (Number(hours.innerHTML) > 23) {
    hours.innerHTML = 0;
  }

  if (hours.innerHTML < 10) {
    hours.innerHTML = "0" + hours.innerHTML;
  }
}

const minutes = document.getElementById("minutes");
const MinminusIcon = document.getElementById("MinminusIcon");
const MinplusIcon = document.getElementById("MinplusIcon");

MinminusIcon.addEventListener("click", decMin);
function decMin() {
  minutes.innerHTML--;

  if (Number(minutes.innerHTML) < 0) {
    minutes.innerHTML = 59;
  }

  if (minutes.innerHTML < 10) {
    minutes.innerHTML = "0" + minutes.innerHTML;
  }
}

MinplusIcon.addEventListener("click", IncMin);
function IncMin() {
  minutes.innerHTML++;

  if (Number(minutes.innerHTML) > 59) {
    minutes.innerHTML = 0;
  }

  if (minutes.innerHTML < 10) {
    minutes.innerHTML = "0" + minutes.innerHTML;
  }
}

const seconds = document.getElementById("seconds");
const SecminusIcon = document.getElementById("SecminusIcon");
const SecplusIcon = document.getElementById("SecplusIcon");

SecminusIcon.addEventListener("click", decSec);
function decSec() {
  seconds.innerHTML--;

  if (Number(seconds.innerHTML) < 0) {
    seconds.innerHTML = 59;
  }

  if (seconds.innerHTML < 10) {
    seconds.innerHTML = "0" + seconds.innerHTML;
  }
}

SecplusIcon.addEventListener("click", IncSec);
function IncSec() {
  seconds.innerHTML++;

  if (Number(seconds.innerHTML) > 59) {
    seconds.innerHTML = 0;
  }

  if (seconds.innerHTML < 10) {
    seconds.innerHTML = "0" + seconds.innerHTML;
  }
}

const timerStartedButtons = document.getElementById("timerStartedButtons");
let startTimer = false;

function removeIcons() {
  HrsminusIcon.style.display = "none";
  HrsplusIcon.style.display = "none";
  MinminusIcon.style.display = "none";
  MinplusIcon.style.display = "none";
  SecminusIcon.style.display = "none";
  SecplusIcon.style.display = "none";
}

const stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", () => {
  startTimer = false;
});

const ResumeButton = document.getElementById("ResumeButton");
ResumeButton.addEventListener("click", () => {
  startTimer = true;
});

const CancelButton = document.getElementById("CancelButton");
CancelButton.addEventListener("click", () => {
  location.reload();
});

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", startTimerfunc);
function startTimerfunc() {
  startTimer = true;
  timerStartedButtons.style.display = "block";
  startButton.style.display = "none";
  removeIcons();
}

setInterval(countdownBegins, 1000);
function countdownBegins() {
  if (startTimer == true) {
    if (seconds.innerHTML == 0) {
      if (minutes.innerHTML == 0) {
        if (hours.innerHTML > 0) {
          decHrs();
          minutes.innerHTML = 60;
        }
      }
      if (minutes.innerHTML > 0) {
        decMin();
        seconds.innerHTML = 60;
      }
    }
    decSec();
  }
}

setInterval(checkTime, 1);
function checkTime() {
  if (
    hours.innerHTML == 0 &&
    minutes.innerHTML == 0 &&
    seconds.innerHTML == 0
  ) {
    IncSec();
  }
}
