const buttonPopup = document.getElementById('button-open-popup');
const popup = document.querySelector('.popup');

export default function btnEventHandlers() {
  buttonPopup.onclick = () => {
    popup.classList.toggle('open-popup');
    if (document.body.scrollHeight > document.body.clientHeight) {
      document.body.classList.toggle('fixed-window');
    }
  };

  document.onclick = (e) => {
    if (!e.target.closest('#button-open-popup') && !e.target.closest('.popup')) {
      popup.classList.remove('open-popup');
      document.body.classList.remove('fixed-window');
    }
  };
}

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});
