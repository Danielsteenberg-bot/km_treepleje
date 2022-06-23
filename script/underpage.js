/* const lightbox = document.createElement("div")
lightbox.id = "lightbox"
document.body.appendChild(lightbox)

const images = document.querySelectorAll(".underpage-img");
images.forEach(image => {
    image.addEventListener("click", e => {
        lightbox.classList.add("active")
        const lightboxImage = document.createElement("img")
        lightboxImage.classList.add("lightbox-img")
        lightboxImage.src = image.src
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(lightboxImage)
    })
})

lightbox.addEventListener("click", e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove("active")
}) */

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  
}
