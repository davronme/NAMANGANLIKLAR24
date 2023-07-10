const elModal = document.querySelector('.modal');
const elModalClose = elModal.querySelector('.modal-close');

elModalClose.addEventListener('click', function() {
  elModal.classList.remove('modal-open');
});