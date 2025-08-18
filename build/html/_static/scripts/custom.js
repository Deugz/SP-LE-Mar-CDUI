function getTargetEl() {
  const id = decodeURIComponent(location.hash.replace(/^#/, ''));
  return id ? document.getElementById(id) : null; // évite les soucis de sélecteur CSS
}

function applyTimedHighlight() {
  document.querySelectorAll('.hash-highlight').forEach(el => el.classList.remove('hash-highlight'));
  const el = getTargetEl();
  if (!el) return;
  el.classList.add('hash-highlight');
  setTimeout(() => el.classList.remove('hash-highlight'), 5000);
}

document.addEventListener('DOMContentLoaded', applyTimedHighlight);
window.addEventListener('hashchange', applyTimedHighlight);

// Re-applique si on clique un lien vers le même hash (hashchange ne se déclenche pas)
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  if (a.getAttribute('href') === location.hash) applyTimedHighlight();
});