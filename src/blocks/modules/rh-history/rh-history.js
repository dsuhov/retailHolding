import $ from 'jquery';
import slick from 'slick-carousel';

const hrHistory = document.querySelector('.rh-history');

if (hrHistory && window.matchMedia('(max-width: 1141px)').matches) {
  console.log('it');
  
  $('.rh-history__line').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '.rh-history-controls__next',
    prevArrow: '.rh-history-controls__prev',
    responsive: [
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 541,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });
}