

document.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target && target.classList.contains("dropdown")) {
      target.classList.add("open");
    }
  }

  document.querySelectorAll(".admonition.dropdown > .admonition-title")
    .forEach(title => {
      title.addEventListener("click", () => {
        title.parentElement.classList.toggle("open");
      });
    });
});