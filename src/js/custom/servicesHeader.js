import $ from 'jquery';
import slick from 'slick-carousel';

export default () => {
  if (window.matchMedia("(max-width: 540px)").matches) {
    $('.header-services__cards').slick({
      infinite: true,
      // arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: '.cards-media-controls__next',
      prevArrow: '.cards-media-controls__prev',
    });
  }
}