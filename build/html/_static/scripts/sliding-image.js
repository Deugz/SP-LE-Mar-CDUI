document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('.scroll-in.stagger');

  let delay = 0;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('show');
        }, delay);

        delay += 1000; // délai de 500ms entre chaque image
        observer.unobserve(entry.target); // Ne pas rejouer l'anim
      }
    });
  }, { threshold: 0.1 });

  images.forEach(img => observer.observe(img));
});