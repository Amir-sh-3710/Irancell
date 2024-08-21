
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

let swiper1 = new Swiper(".swiper1", {

  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time * 2 / 1000)}s`;
    }
  }
});
let swiper2 = new Swiper(".swiper2", {

  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: false
  // },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time * 2 / 1000)}s`;
    }
  }
});
let thirdslider = new Swiper(".thirdslider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 9,
  loop: true,
  freeMode: true,
  centeredSlides: true,
  grabCursor: true
});

// var swiper = new Swiper(".mySwiper", {
//       slidesPerView: 3,
//       spaceBetween: 30,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//     });


