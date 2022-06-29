/* Desktop Navigation animations */
let desktopFoldout = document.querySelector(".desktop-foldout")
let desktopArrowContainer = document.querySelector(".desktop-arrow-container")
let desktopArrow = document.querySelector(".desktop-arrow")


desktopArrowContainer.addEventListener("click", desktopNavDrop)

function desktopNavDrop() {
    
    if(desktopFoldout.style.height == "0px") {
        desktopFoldout.style.height = "300px"
        desktopArrow.style.transform = "rotate(180deg)"
    }
    else {
        desktopFoldout.style.height = "0px"
        desktopArrow.style.transform = "rotate(0deg)"
    }
}

function desktopNavDropCancel() {
    if(desktopFoldout.style.height == "300px") {
        desktopFoldout.style.height = "0px"
        desktopArrow.style.transform = "rotate(0deg)"
    }
    console.log("hey")
}




/* Mobile navigation animations */
let Navbar = document.querySelector(".navbar")
let BurgerCrossWrapper = document.getElementById("burger-cross-wrapper")
let bars = document.getElementById("burger")
let cross = document.getElementById("cross")
let hiddenNavWrapper = document.querySelector(".hidden-navigation-wrapper")
let hiddenNav = document.querySelector(".hidden-navigation")


BurgerCrossWrapper.addEventListener("click", popOutNavbar);

function popOutNavbar() {
    
    if(hiddenNav.style.left == "-100vw") {
        Navbar.style.position = "fixed"
        hiddenNavWrapper.style.position = "fixed"
        hiddenNavWrapper.style.left = "0vw"
        hiddenNav.style.position = "fixed"
        hiddenNav.style.left = "0vw"
        bars.style.display = "none"
        cross.style.display = "block"
    }
    else {
        Navbar.style.position = "absolute"
        hiddenNavWrapper.style.position = "absolute"
        hiddenNavWrapper.style.left = "-100vw"
        hiddenNav.style.position = "absolute"
        hiddenNav.style.left = "-100vw"
        bars.style.display = "block"
        cross.style.display = "none"
        servicesDivWrapper.style.height = "0px"
        serviceArrow.style.transform = "rotate(0deg)"
    }
}

let servicesMenuPoint = document.querySelector(".services")
let servicesDivWrapper = document.querySelector(".navigation-accordion")
let serviceArrow = document.querySelector(".fold-out-arrow")

servicesMenuPoint.addEventListener("click", function() {
    if (servicesDivWrapper.style.height <= "0px") {
        servicesDivWrapper.style.height = "280px"
        serviceArrow.style.transform = "rotate(180deg)"
    }
    else {
        servicesDivWrapper.style.height = "0px"
        serviceArrow.style.transform = "rotate(0deg)"
    }
})
