import { galleryItems } from './gallery-items.js';

const listGallery = document.querySelector('.gallery');
galleryItems.forEach((element) => {
  listGallery.insertAdjacentHTML(
    'beforeend',
    `<li class="gallery__image"><a href="${element.original}" class="gallery__link"><img class="gallery__image" src="${element.preview}" alt="${element.description}"></a></li>`
  );
});
let galleryCaption = new SimpleLightbox('.gallery__link', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});