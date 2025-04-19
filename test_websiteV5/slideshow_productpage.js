var slideIndex = 1;
    var demos = document.getElementsByClassName("demo-image");
    showSlides(slideIndex);
  
    function plusSlides(n) {
      if (slideIndex === 1 && n === -1) {
        slideIndex = demos.length;
        moveScrollbar(1);
      } else if (slideIndex === demos.length && n === 1) {
        slideIndex = 1;
        moveScrollbar(-1);
      } else {
        slideIndex += n;
        moveScrollbar(n);
      }
      showSlides(slideIndex);
    }
  
    function moveScrollbar(n) {
  var container = document.querySelector(".img-container");
  var slideWidth = demos[0].offsetWidth;
  var scrollAmount = slideWidth * n;
  var newScrollLeft = container.scrollLeft + scrollAmount;

  if (slideIndex === 1 && n === -1) {
    newScrollLeft = 0;
  } else if (slideIndex === demos.length && n === 1) {
    newScrollLeft = container.scrollWidth - container.clientWidth;
  }

  container.scroll({
    left: newScrollLeft,
    behavior: "smooth"
  });
}
    function currentDiv(n) {
      showSlides(slideIndex = n);
    }
  
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
  
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
  
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
  
      for (i = 0; i < demos.length; i++) {
        demos[i].style.border = "none";
      }
  
      slides[slideIndex - 1].style.display = "block";
      demos[slideIndex - 1].style.border = "5px solid hsl(226, 44%, 80%)";
    }