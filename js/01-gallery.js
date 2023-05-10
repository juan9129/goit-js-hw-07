import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const galleryGrid = galleryItems.map((element) => 
`<li class= "gallery__item">
<a class= "gallery__link" href = "${element.original}">
 <img 
class= "gallery__image"
src= "${element.preview}"
data-source= "${element.original}"
alt= "${element.description}"
/>
</a>
</li>`
)
.join("");

galleryList.insertAdjacentHTML("afterbegin" , galleryGrid);

galleryList.querySelectorAll(".gallery__image").forEach((image) => {
image.addEventListener("click", (event)=> {
    event.preventDefault();
    const imageURL = event.target.getAttribute("data-source");
    const lightbox = basicLightbox.create(`<img src="${imageURL}">`);
    lightbox.show();
})
});
