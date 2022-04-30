/* var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var foldOut = this.previousElementSibling;
    if (foldOut.style.height === "0px") {
      foldOut.style.height = "350px";
      foldOut.style.margin = "25px 20px 0 20px";
      this.style.transform = "rotate(180deg)"
      this.firstElementChild.style.display = "none" 
    } else {
      foldOut.style.height = "0px";
      foldOut.style.margin = "0 20px 0 20px";
      this.style.transform = "rotate(0deg)"
      this.firstElementChild.style.display = "block" 
    }
  });
} */