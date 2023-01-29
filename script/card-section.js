/* Card section upper text animation */
let cardTopText = document.querySelectorAll(".card-heading-text")


window.addEventListener("scroll", function(){
  for (let i = 0; i < cardTopText.length; i++) {
    element = cardTopText[i].getBoundingClientRect().y - this.window.innerHeight;
    if (element <= - 30) {
      cardTopText[i].classList.add("fade-in")
    }
  }

})

/* Card section cards animation */
let cards = document.querySelectorAll(".card")
window.addEventListener("scroll", function(){
for (let i = 0; i < cards.length; i++) {
  let cardDistanceFromTop = cards[i].getBoundingClientRect().y - window.innerHeight * 0.9

  if (cardDistanceFromTop <= 0) {
    cards[i].classList.add("cards-moving")
  }
}
})

/* Card section Cards hover zoom */
let cardIcon = document.querySelectorAll(".card-icon")

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseover", function() {
    cardIcon[i].style.transform = "scale(1.05)"
  })
}
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseout", function() {
    cardIcon[i].style.transform = "scale(1.0)"
  })
}


window.addEventListener("scroll", function(){
  for (let i = 0; i < cards.length; i++) {
    let measuredCard = cards[0].getBoundingClientRect().y - window.innerHeight
  /*   console.log(measuredCard) */
    if(measuredCard <= window.innerHeight) {
    }
  }
})