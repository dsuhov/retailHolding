import $ from 'jquery';
import slick from 'slick-carousel';

if (window.matchMedia("(max-width: 1140px)").matches) {
  $('.backdrop').click(function(evt) {
    $('.header-menu').removeClass('active');
    $(this).removeClass('active');
  });
  
  $('.burger').click(function(evt) {
    $('.backdrop').addClass('active');
    $('.header-menu').addClass('active');
  });
  
  $('.header-menu__close').click(function() {
    $('.header-menu').removeClass('active');
    $('.backdrop').removeClass('active');
  });

  const linkWithSublist = [...document.querySelectorAll('.header-menu__item')].filter(el => {
    if (el.children[1]) {
      return el;
    }
  });
  
  // linkWithSublist.forEach(el => {
  //   el.querySelector('a').addEventListener('click', evt => {
  //     evt.preventDefault();
      
  //     $(el.querySelector('ul')).slideToggle({
  //       duration: 0
  //     });
  //   })
  // });
}

if (window.matchMedia("(max-width: 540px)").matches) {

  $('.header-cards').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '.cards-media-controls__next',
    prevArrow: '.cards-media-controls__prev',
  })
}