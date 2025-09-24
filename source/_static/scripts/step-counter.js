function updateStepDisplay() {
  const count = localStorage.getItem("step-counter") || 0;
  const display = document.getElementById("step-display");
  if (display) {
    display.textContent = count;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Récupérer le compteur
  let count = parseInt(localStorage.getItem("step-counter") || "0", 10);

  // Incrémenter de 1 à chaque nouvelle page
  count++;

  // Sauvegarder et afficher
  localStorage.setItem("step-counter", count);
  updateStepDisplay();
});
