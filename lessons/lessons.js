function openNav(){
    document.getElementById("navbar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav(){
    document.getElementById("navbar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    console.log("0");   
}

let binarysearch = document.getElementById("binary-search")

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
