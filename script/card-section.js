/* Card section upper text animation */
let cardTopText = document.querySelector(".card-section-h3")

window.addEventListener("scroll", function(){
  element = cardTopText.getBoundingClientRect().y - this.window.innerHeight;
  if (element <= - 30) {
    cardTopText.classList.add("fade-in")
  }
})

/* Card section cards animation */
let cards = document.querySelectorAll(".card")
window.addEventListener("scroll", function(){
for (let i = 0; i < cards.length; i++) {
  let cardDistanceFromTop = cards[i].getBoundingClientRect().y - window.innerHeight
  console.log("card" + " " + i + " " + cardDistanceFromTop)

 
  
  if (cardDistanceFromTop <= 0 - 100) {
    cards[i].classList.add("cards-moving")
  }
}
})