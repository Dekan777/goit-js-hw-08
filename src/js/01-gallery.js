// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const gallery = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => {
  return `<li class="gallery__item">
                  <a class="gallery__link" href="${original}">
                      <img 
                          class="gallery__image" 
                          src="${preview}" 
                          data-source="${original}"
                          alt="${description}" 
                      />
                  </a>
              </li>`;
};

const galleryCreate = galleryItems.map(createGalleryItem).join('');
gallery.insertAdjacentHTML('beforeend', galleryCreate);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
