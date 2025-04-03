let slideIndex = 1;
showSlides(slideIndex);

let imageHeight = document.getElementsByClassName("photo")[0].clientHeight;
let contentDivs = document.body.getElementsByClassName("slide-content");
const mediaQueryCondition = window.matchMedia("( min-width: 500px )");
if (mediaQueryCondition.matches) {
  const addCSS = (css) =>
    (document.head.appendChild(document.createElement("style")).innerHTML =
      css);

  addCSS(".slide-content{ min-height: " + imageHeight + "px }");
}

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
