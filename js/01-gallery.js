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

gallery.addEventListener("click", onActiveImage);

function onActiveImage(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  gallery.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
}
