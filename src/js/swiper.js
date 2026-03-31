import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

new Swiper('.my-swiper', {
  modules: [Autoplay],
  loop: true,
  speed: 6000,
  allowTouchMove: false,
  grabCursor: false,
  slidesPerView: 1.0,
  spaceBetween: 16,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },

  breakpoints: {
    1440: {
      slidesPerView: 3.0,
      spaceBetween: 24,
    },
  },
});