// Scroll to top while clicking on the logo img (footer)

document.getElementById("logo").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Animation while scrolling

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-items");
    } else {
      entry.target.classList.remove("show-items");
    }
  });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => {
  observer.observe(el);
});

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => {
  observer.observe(el);
});

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => {
  observer.observe(el);
});

const scrollRight = document.querySelectorAll(".scroll-right");
scrollRight.forEach((el) => {
  observer.observe(el);
});

const scrollLeft = document.querySelectorAll(".scroll-left");
scrollLeft.forEach((el) => {
  observer.observe(el);
});

const scrollOpacity = document.querySelectorAll(".scroll-opacity");
scrollOpacity.forEach((el) => {
  observer.observe(el);
});

// Swiper

const swiper = new Swiper(".swiper", {
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  keyboard: {
    enabled: true,
  },
});

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 0,
//   keyboard: {
//     enabled: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   grabCursor: true,
//   loop: true,
//   breakpoints: {
//     500: {
//       slidesPerView: 1,
//       spaceBetween: 0,
//     },
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 0,
//     },
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 0,
//     },
//     1024: {
//       slidesPerView: 4,
//       spaceBetween: 0,
//     },
//   },
// });
