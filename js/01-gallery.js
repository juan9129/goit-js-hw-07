import { galleryItems } from './gallery-items.js';

const listGallery = document.querySelector('.gallery');
galleryItems.forEach((element) => {
  listGallery.insertAdjacentHTML(
    'beforeend',
    `<li class="gallery__image"><a href="${element.original}" class="gallery__link"><img class="gallery__image" src="${element.preview}" alt="${element.description}</a></li>">`
  );
});
var linkGallery = document.querySelectorAll('.gallery__link');

linkGallery.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    var href = element.getAttribute('href');
    var instance = basicLightbox.create(`
  <div class="link-gallery">
    <img class="link-gallery__img" src="${href}">
  </div>
  `);
    instance.show(() => console.log('hola'));
    const img = document.querySelectorAll('.link-gallery__img');
    const backgroundLightBox = document.querySelector('.basicLightbox');
    img.forEach((imgItem) => {
      imgItem.addEventListener('mouseout', () => {
        backgroundLightBox.style.cursor  = `url("data:image/svg+xml,%3Csvg width='25' height='25' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Ccircle fill-opacity='.6' fill='%23FFF' cx='16' cy='16' r='16'/%3E%3Cpath fill='%23000' d='M20.385 11l-4.395 4.39-4.375-4.37-.615.615L15.375 16 11 20.37l.615.61 4.375-4.365L20.385 21l.615-.61L16.604 16 21 11.615z'/%3E%3C/g%3E%3C/svg%3E") 16 16,pointer`;
      });
      imgItem.addEventListener('mouseover', () => {
        backgroundLightBox.style.cursor = 'default';
      });
    });
  });
});