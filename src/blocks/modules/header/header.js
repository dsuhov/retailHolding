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

const headerPhoneEl = document.querySelector('.header-phone__phone-link');
if (window.matchMedia('(min-width: 769px)').matches && headerPhoneEl) {
  headerPhoneEl.addEventListener('click', (evt) => {
    evt.preventDefault();
    
    $.fancybox.open({
      src  : document.getElementById('popup-2'),
      type : 'inline',
      closeExisting: false,
      smallBtn: false,
      buttons: [],
      autoFocus: false,
      touch: {
        vertical: true,
        momentum: false
      }
    });
  });
}