import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const addGallaryMarkup = createGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", addGallaryMarkup);
function createGalleryMarkup(items) {
  return items
    .map(
      (item) => `<div class="gallery__item">
   <a class="gallery__link" 
   href=${item.original}>
     <img
       class="gallery__image"
       src=${item.preview}
       data-source=${item.original}
       alt=${item.description}
     />
   </a>
 </div>`
    )
    .join("");
}

new SimpleLightbox('.gallery a', {
  disableRightClick: true,
  scrollZoom: false,
  captionDelay: 250,
  captionsData: 'alt',
});