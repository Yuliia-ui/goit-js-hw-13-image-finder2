import refs from './refs';
import * as basicLightbox from 'basiclightbox';

function modalImageHandler(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  if (event.target.nodeName === 'IMG') {
    const instance = basicLightbox.create(
      `<img src="${event.target.dataset.source}">`,
    );
    instance.show();
  }
}

refs.list.addEventListener('click', modalImageHandler);
