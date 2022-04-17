// Hero swiper
const container = document.querySelector(".container")
const swiperHero = new Swiper('.header__swiper', {
  // Default parameters
  autoplay: {
    delay: 6000
  },

//   CREATIVE
//   effect: 'creative',
//   creativeEffect: {
//     prev: {
//       // will set `translateZ(-400px)` on previous slides
//       translate: [0, 0, -400],
//     },
//     next: {
//       // will set `translateX(100%)` on next slides
//       translate: ['100%', 0, 0],
//     },
//   },

  effect: "fade",
  speed: 2100,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: '.swiper-bullet-pagination',
    type: 'bullets',
    clickable: true,
    autoplay: true
  }

})

let actIndex;
swiperHero.on('activeIndexChange', function (item) {
  if (item.activeIndex > 0) {
    container.classList.add(`white`);
  } else {
    container.classList.remove(`white`);
  }
  
});

let audio = document.getElementById("myaudio");
  		audio.volume = 0.2;