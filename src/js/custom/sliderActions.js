import Glide from '@glidejs/glide';
import picomodal from 'picomodal';
import slick from 'slick-carousel';

export default () => {

  // trust-us section
  if (window.matchMedia("(max-width: 540px)").matches) {
    
    $('.trust-us__items').slick({
      infinite: true,
      // arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: '.trust-us-controls__next',
      prevArrow: '.trust-us-controls__prev',
    });

    
  }

  if (window.matchMedia("(max-width: 1051px)").matches) {
    $('.news-block__cards').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      nextArrow: '.news-block-controls__next',
      prevArrow: '.news-block-controls__prev',
      responsive: [
        {
          breakpoint: 901,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
    });
  }
}