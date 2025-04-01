import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
let lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <a href="${largeImageURL}" class="gallery-item">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        <div class="info">
          <p> Likes: <span class="loader">${likes}</span></p>
          <p> Views: <span class="loader">${views}</span></p>
          <p> Comments: <span class="loader">${comments}</span></p>
          <p> Downloads: <span class="loader">${downloads}</span></p>
        </div>
      </a>
    `
    )
    .join('');
  galleryContainer.innerHTML = markup;
  lightbox.refresh();
}


export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  document.querySelector('.loader').classList.add('visible');
}

export function hideLoader() {
  document.querySelector('.loader').classList.remove('visible');
}
function showLoadingMessage() {
  const loadingMessage = document.querySelector('.loading-message');
  loadingMessage.style.display = 'block';
}

function hideLoadingMessage() {
  const loadingMessage = document.querySelector('.loading-message');
  loadingMessage.style.display = 'none';
}