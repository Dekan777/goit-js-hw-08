// Add imports above this line
import { galleryItems } from './gallery-items';
import  SimpleLightbox  from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line


const gallery = document.querySelector(".gallery");

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

const galleryCreate = galleryItems.map(createGalleryItem).join("");
gallery.insertAdjacentHTML("beforeend", galleryCreate);

gallery.addEventListener("click", (event) => {
  const selectedElement = event.target.closest(".gallery__link");

  if (selectedElement) {
    event.preventDefault();
    const instance = basicLightbox.create(
      `
        <img src="${selectedElement.href}" width="800" height="600">
    `,
      {
        onShow: (instance) => {
          gallery.addEventListener("keydown", closeOnEscape);
        },
      },
      {
        onClose: (instance) => {
          gallery.removeEventListener("keydown", closeOnEscape);
        },
      }
    );

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        instance.close();
      }
    };

    instance.show();
  }
});
