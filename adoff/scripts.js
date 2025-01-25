let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";

  if (slides[slideIndex - 1].className.match("whiteSlide")) {
    let arrowLeftElement = document.getElementById("arrow_left");
    arrowLeftElement.src = "images/desktop/arrow_left_white.png";
    let arrowRightElement = document.getElementById("arrow_right");
    arrowRightElement.src = "images/desktop/arrow_right_white.png";
  } else {
    let arrowLeftElement = document.getElementById("arrow_left");
    arrowLeftElement.src = "images/desktop/arrow_left_black.png";
    let arrowRightElement = document.getElementById("arrow_right");
    arrowRightElement.src = "images/desktop/arrow_right_black.png";
  }
}
