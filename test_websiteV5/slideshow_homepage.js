function plusSlides(n, group) {
  const slides = document.getElementsByClassName(`mySlides-${group}`);
  slideIndex[group] += n;

  if (slideIndex[group] > slides.length) {
    slideIndex[group] = 1;
  }
  if (slideIndex[group] < 1) {
    slideIndex[group] = slides.length;
  }

  showSlides(slideIndex[group], group);
}

function currentSlide(n, group) {
  slideIndex[group] = n;
  showSlides(slideIndex[group], group);
}

function showSlides(n, group) {
  const slides = document.getElementsByClassName(`mySlides-${group}`);
  const dots = document.getElementsByClassName(`dot-${group}`);

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[n - 1].style.display = "block";
  dots[n - 1].className += " active";
}

// Initialize slide indices for each group
const slideIndex = [1, 1, 1];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
