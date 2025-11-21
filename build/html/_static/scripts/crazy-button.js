const buttonElement = document.querySelector('.crazy-button');
const container = document.querySelector('.crazy-button-container');

buttonElement.addEventListener('mouseenter', () => {
  const offsetLeft = Math.random() * (container.clientWidth - buttonElement.clientWidth);
  const offsetTop = Math.random() * (container.clientHeight - buttonElement.clientHeight);

  buttonElement.style.left = offsetLeft + 'px';
  buttonElement.style.top = offsetTop + 'px';
});