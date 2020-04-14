import $ from 'jquery';
import slick from 'slick-carousel';
import fancybox from "@fancyapps/fancybox";

const certificates = document.querySelector('.certificates__slider-container');

if (certificates) {
  
  // slick plug
  $(certificates).find('.certificates__js-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '.certificates-controls__next',
    prevArrow: '.certificates-controls__prev',
    responsive: [
      {
        breakpoint: 1051,
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
        breakpoint: 621,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });
  
  // click actions
  const picItems = certificates.querySelectorAll('.certificate__pic img');
  
  Array.from(picItems).forEach(el => el.addEventListener('click', certificatesClickHandler))
}

function certificatesClickHandler(evt) {
  const src = evt.target.dataset.srcset.replace('small', 'big');
  
  $.fancybox.open({
    src  :  `<img src="${src}" />`,
    type : 'inline',
  });
}