import Swiper from 'swiper'

const swiper = new Swiper('.reviews__slider', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.js-button-next-review',
    prevEl: '.js-button-prev-review',
  },
});
