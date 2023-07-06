const burgerBtnEl = document.querySelector('.burger-button');
const modalEl = document.querySelector('.modal-container');
const iconBurgerEl = document.querySelector('.icon-burger');
const iconCloseEl = document.querySelector('.icon-x-close');

burgerBtnEl.addEventListener('click', onClick);

function onClick() {
  const isModalHidden = modalEl.classList.contains('visually-hidden');

  modalEl.classList.toggle('visually-hidden', !isModalHidden);
  iconCloseEl.classList.toggle('visually-hidden', !isModalHidden);
  iconBurgerEl.classList.toggle('visually-hidden', isModalHidden);
}
