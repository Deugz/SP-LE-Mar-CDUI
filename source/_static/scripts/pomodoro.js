let timer = null;
let timeLeft = localStorage.getItem("pomodoro-timeLeft")
  ? parseInt(localStorage.getItem("pomodoro-timeLeft"))
  : 25 * 60;
let isRunning = localStorage.getItem("pomodoro-isRunning") === "true";

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const display = document.getElementById("timer-display");
  if (display) {
    display.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }
}

function tick() {
  if (timeLeft > 0) {
    timeLeft--;
    localStorage.setItem("pomodoro-timeLeft", timeLeft);
    updateDisplay();
  } else {
    clearInterval(timer);
    timer = null;
    localStorage.setItem("pomodoro-isRunning", false);
    alert("Pomodoro terminé !");
  }
}

function startPomodoro() {
  if (timer) return; // déjà en cours
  timer = setInterval(tick, 1000);
  localStorage.setItem("pomodoro-isRunning", true);
}

function resetPomodoro() {
  clearInterval(timer);
  timer = null;
  timeLeft = 25 * 60;
  localStorage.setItem("pomodoro-timeLeft", timeLeft);
  localStorage.setItem("pomodoro-isRunning", false);
  updateDisplay();
}

document.addEventListener("DOMContentLoaded", () => {
  // Met à jour l’affichage
  updateDisplay();
  // Si le timer était en cours, on le relance
  if (isRunning && !timer) {
    timer = setInterval(tick, 1000);
  }
});