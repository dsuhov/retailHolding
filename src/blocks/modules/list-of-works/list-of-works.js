import $ from 'jquery';

var listOfWorks = document.querySelector('.list-of-works__line');

if (listOfWorks && window.matchMedia('(max-width: 375px)').matches) {
  var triggers = listOfWorks.querySelectorAll('.list-of-works__list-title');
  Array.from(triggers).forEach(function (el) {
    return el.addEventListener('click', function () {
      return listTriggerHandler(el);
    });
  });
}

function listTriggerHandler(el) {
  $(el.closest('.list-of-works__list').querySelector('.list-of-works-list')).slideToggle({
    start: function start() {
      toggleArrow(el);
    }
  });
}

function toggleArrow(el) {
  if (el.classList.contains('open')) {
    el.classList.remove('open');
  } else {
    el.classList.add('open');
  }
}