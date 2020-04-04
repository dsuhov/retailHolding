import $ from 'jquery';
import slick from 'slick-carousel';

const trusUs = document.querySelector('.trust-us');

if (trusUs) {
  if (window.matchMedia('(max-width: 540px)').matches) {
    $(trusUs).find('.trust-us__items').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: '.trust-us-controls__next',
      prevArrow: '.trust-us-controls__prev',
    });
  }
}