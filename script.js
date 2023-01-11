let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


const tabs = document.querySelectorAll('ul li');
const divs = document.querySelectorAll('.container-content > div');

tabs.forEach((tab) => {
    //Add click for each li
    tab.addEventListener("click", function (e) {
        tabs.forEach((tab) => {
            //On click remove class Active from all Li
            tab.classList.remove("active");
        });
        //Add Class Active On the li 
        e.currentTarget.classList.add("active");
        divs.forEach((div) => {
            //Display None for all content Divs on click
            div.style.display = 'none';
            //Select the div the contain the class of data-content and make it display flex
            document.querySelector('.' + e.currentTarget.dataset.content).style.display = 'block';
        });
    });
})


// const prev = document.querySelector(".prev");
// const next = document.querySelector(".next");
// const carousel = document.querySelector(".carousel-container");
// const track = document.querySelector(".track");
// let width = carousel.offsetWidth;
// let index = 0;
// window.addEventListener("resize", function () {
//   width = carousel.offsetWidth;
// });
// next.addEventListener("click", function (e) {
//   e.preventDefault();
//   index = index + 1.01;
//   prev.className.includes("display");
//   prev.display = "show";
// //   prev.classList.contains("display");
//   console.log(prev.display);
// //   prev.classList.display = "show";
  
//   track.style.transform = "translateX(" + index * -width + "px)";
//   if (track.offsetWidth - index * width < index * width) {
//     next.classList.add("hide");
//   }
// });
// prev.addEventListener("click", function () {
//   index = index - 1;
//   next.classList.remove("hide");
//   if (index === 0) {
//     prev.classList.remove("show");
//   }
//   track.style.transform = "translateX(" + index * -width + "px)";
// });