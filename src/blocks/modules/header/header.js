import $ from "jquery";
import slick from "slick-carousel";

const headerCardsCont = document.querySelector('.header-cards-wrapper');
if (headerCardsCont && window.matchMedia('(max-width: 540px)').matches) {
  $(headerCardsCont).find('.header-cards').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '.cards-media-controls__next',
    prevArrow: '.cards-media-controls__prev',
  })
}