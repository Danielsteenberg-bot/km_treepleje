let BurgerCrossWrapper = document.getElementById("burger-cross-wrapper")
let bars = document.getElementById("burger")
let cross = document.getElementById("cross")
let hiddenNav = document.getElementById("hidden-navigation")

BurgerCrossWrapper.addEventListener("click", popOutNavbar);

function popOutNavbar() {
    
    if(hiddenNav.style.left == "-100vw") {
        hiddenNav.style.left = "0vw"
        bars.style.display = "none"
        cross.style.display = "block"
    }
    else {
        hiddenNav.style.left = "-100vw"
        bars.style.display = "block"
        cross.style.display = "none"
    }
}