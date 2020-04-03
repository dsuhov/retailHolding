import $ from 'jquery';
import slick from 'slick-carousel';

const logoLine = document.querySelector('.logo-line');

if (logoLine) {
  $('.logo-line__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: '.logo-line-controls__next',
    prevArrow: '.logo-line-controls__prev',
    responsive: [
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3
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