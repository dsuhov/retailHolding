import $ from 'jquery';
// Filter container for objects-page
const filtOnjsCont = document.querySelector('.filtered-objects');

if (filtOnjsCont && window.matchMedia('(max-width: 1140px)').matches) {
  const triggerBtns = filtOnjsCont.querySelectorAll('.fo-filter__prefix');

  Array.from(triggerBtns).forEach(el => {
    el.addEventListener('click', () => {
      $(el.nextElementSibling).slideToggle();
    })
  });
}