/* Cover zoom effect on load */
let coverImage = document.querySelector(".cover-container")
window.addEventListener("load", function () {
    coverImage.classList.add("cover-zoom")
})