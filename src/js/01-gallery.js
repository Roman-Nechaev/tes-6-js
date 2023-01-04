import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('div.gallery');

galleryRef.addEventListener('click', onClickImg);

function creatMarcupImg(item) {
  return item
    .map(gal => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${gal.original}">
    <img
      class="gallery__image"
      src="${gal.preview}" 
      data-source= ${gal.original}
      alt="${gal.description}"
    />
  </a>
</div>
    `;
    })
    .join('');
}
const cardMaking = creatMarcupImg(galleryItems);

galleryRef.innerHTML = cardMaking;

function onClickImg(evt) {
  evt.preventDefault();
  const swatchEl = evt.target;
  const inUseImg = swatchEl.closest('.gallery__link');

  //   const testData = evt.target.dataset.source;
  //   console.log('inUseImg :>> ', inUseImg);
  //   console.log(testData);
  //   const testClick = swatchEl.nodeName !== 'IMG';
  //   console.log(testClick);
  if (!inUseImg) {
    return;
  }
  showModal(inUseImg);
}

function showModal(params) {
  const instance = basicLightbox.create(`
    <img src="${params}" width="800" height="600">
`);
  instance.show();
  window.addEventListener('keydown', onKeyClose);

  function onKeyClose(evt) {
    const checkKeyEsc = evt.code === 'Escape';

    if (checkKeyEsc) {
      console.log('checkKeyEsc :>> ', checkKeyEsc);
      window.removeEventListener('keydown', onKeyClose);
      return instance.close();
    }
  }
}
