import './js/modal';
import './styles.css';
import refs from './js/refs';
import apiService from './js/apiService';
import updateMarkup from './js/update-markup';
import LoadMoreBtn from './js/load-button';

const loadMoreBtn = new LoadMoreBtn({
  selector: 'button[data-action="load-more"]',
  hidden: true,
});

loadMoreBtn.refs.button.addEventListener('click', fetchItems);

function SubmitHandler(event) {
  event.preventDefault();

  const form = event.currentTarget;
  apiService.query = form.elements.query.value;
  clearArticlesContainer();
  apiService.resetPage();
  fetchItems();
  form.reset();
}

function fetchItems() {
  loadMoreBtn.disable();

  apiService.fetchItems().then(data => {
    updateMarkup(data);
    if (data.length < 12) {
      loadMoreBtn.hide();
    } else {
      loadMoreBtn.show();
      loadMoreBtn.enable();
    }
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  });
}

function clearArticlesContainer() {
  refs.list.innerHTML = '';
}

refs.form.addEventListener('submit', SubmitHandler);
