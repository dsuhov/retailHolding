import Glide from '@glidejs/glide';
import picomodal from 'picomodal';
import slick from 'slick-carousel';

export default () => {

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
      content: `<img src="${targetImg}">`,
      overlayClose: true,
      modalStyles: {
        borderRadius: 0
      },
      
    })
    // .afterCreate(imgModalCreateHandler)
    .afterClose(function (modal) { modal.destroy(); })
    .show();
  }

  // Actions, attached to img after modal is created
  // function imgModalCreateHandler(modal) {
    // const elem = modal.modalElem();

    // elem.style.cursor = 'zoom-in';

    // elem.addEventListener('click', () => {
    //   modal.close();
    // })
  // }

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