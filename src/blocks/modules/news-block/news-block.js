import $ from "jquery";
import slick from "slick-carousel";

const newsBlock = document.querySelector('.news-block__media-wrapper');
if (newsBlock && window.matchMedia('(max-width: 1050px)').matches) {
  $(newsBlock).find('.news-block__cards').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: '.news-block-controls__next',
    prevArrow: '.news-block-controls__prev',
    responsive: [
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 1
        }
      },
      // {
      //   breakpoint: 769,
      //   settings: {
      //     slidesToShow: 3
      //   }
      // },
      // {
      //   breakpoint: 541,
      //   settings: {
      //     slidesToShow: 1
      //   }
      // },
    ]
  })
}