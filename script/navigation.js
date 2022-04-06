let bars = document.getElementById("burger")
let hiddenNav = document.getElementById("hidden-navigation")

bars.addEventListener("click", doSomething);

function doSomething() {
    
    if(hiddenNav.style.right != "white") {
        console.log("bars.style.color")
    }
}