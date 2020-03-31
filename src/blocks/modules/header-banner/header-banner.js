import $ from 'jquery';
import slick from 'slick-carousel';

if (document.querySelector('.hb-logos__logos-media') &&  window.matchMedia("(max-width: 540px)").matches) {

  if (window.matchMedia("(max-width: 540px)").matches) {
    $('.hb-logos__logos-media').slick({
      infinite: true,
      // arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: '.hb-logos-controls__next',
      prevArrow: '.hb-logos-controls__prev',
    });
  }

}