import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBoxRef = document.querySelector('.gallery');

function renderGalleryEl(items) {
  return items
    .map(({ original, description, preview }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image"
  src="${preview}" alt="${description}" title="${description}" />
</a>`;
    })
    .join('');
}
const marcapEl = renderGalleryEl(galleryItems);

galleryBoxRef.innerHTML = marcapEl;

var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
