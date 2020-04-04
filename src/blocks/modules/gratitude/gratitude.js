import $ from 'jquery';
import slick from 'slick-carousel';
import picomodal from 'picomodal';

const gratitude = document.querySelector('.gratitude');

if (gratitude) {
  $('.gratitude__slides').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: '.gratitude-controls__next',
    prevArrow: '.gratitude-controls__prev',
    responsive: [
      {
        breakpoint: 1141,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 621,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });

  [...document.querySelectorAll('.gratitude__slider-item img')].forEach((el) => {
    el.addEventListener('click', imgClickHandler);
  });

  // Actions on img cis clicked
  function imgClickHandler(evt) {
    const targetImg = evt.target.dataset.srcset.replace('small', 'big'); 
      
    picomodal({
      content: `<img style="width: 100%" src="${targetImg}">`,
      overlayClose: true,
      modalStyles: {
        borderRadius: 0
      },
      
    })
    // .afterCreate(imgModalCreateHandler)
    .afterClose(function (modal) { modal.destroy(); })
    .show();
  }
}