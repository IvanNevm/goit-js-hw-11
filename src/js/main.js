import { getImagesByQuery } from './pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const searchInput = document.querySelector('input[name="search-text"]');
const loadingMessage = document.querySelector('.loading-message'); // Елемент для повідомлення

function showLoadingMessage() {
  loadingMessage.style.display = 'block'; // Показати повідомлення
}

function hideLoadingMessage() {
  loadingMessage.style.display = 'none'; // Приховати повідомлення
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = searchInput.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Search field cannot be empty!',
    });
    return;
  }

  clearGallery();
  showLoader();
  showLoadingMessage(); // Показати "Loading, please wait"

  try {
    const data = await getImagesByQuery(query);
    if (data.hits.length === 0) {
      iziToast.info({
        title: 'No Results',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      createGallery(data.hits);
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later!',
    });
  } finally {
    hideLoader();
    hideLoadingMessage(); // Приховати "Loading, please wait"
  }
});