import gallery from '../templates/gallery.hbs';
import refs from './refs';

function updateMarkup(data) {
  const markup = gallery(data);
  refs.list.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkup;
