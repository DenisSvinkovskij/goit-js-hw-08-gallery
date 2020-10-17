import galleryItems from './gallery-items.js';

const refs = {
  list: document.querySelector('.js-gallery'),
  modal: document.querySelector('.js-lightbox'),
  closeModalBtn: document.querySelector('button[data-action="close-lightbox"]'),
  modalImg: document.querySelector('.lightbox__image'),
};

refs.list.innerHTML = galleryItems
  .map(
    img => `<li class="gallery__item">
<a
  class="gallery__link"
  href="${img.original}"
>
  <img
    class="gallery__image"
    src="${img.preview}"
    data-source="${img.original}"
    alt="${img.description}"
  />
</a>
</li>`,
  )
  .join('');

refs.list.addEventListener('click', e => {
  e.preventDefault();
  if (e.currentTarget !== e.target) {
    refs.modal.classList.add('is-open');
    galleryItems.map(img => {
      if (img.preview === e.target.src) {
        refs.modalImg.src = img.original;
        refs.modalImg.alt = img.description;
      }
    });
  }
});

refs.closeModalBtn.addEventListener('click', () => {
  refs.modal.classList.remove('is-open');
  refs.modalImg.src = '';
  refs.modalImg.alt = '';
});
