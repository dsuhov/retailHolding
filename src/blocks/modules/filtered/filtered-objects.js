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

var rootEl = document.querySelector('.filter');

if (rootEl) {
  // Здесть будет и логика получения записей через wp rest api
  var filterBtns = Array.from(rootEl.querySelectorAll('.filter__btn'));

  if (window.matchMedia('(max-width: 620px)').matches) {
    var fiterBtnsCurrField = document.createElement('div');
    var fiterBtnsContainer = document.createElement('div');
    var contOpen = false;
    fiterBtnsCurrField.classList.add('filter__media-curr-field');
    fiterBtnsCurrField.innerHTML = filterBtns[0].textContent;
    fiterBtnsContainer.classList.add('filter__media-container');
    filterBtns.forEach(function (el) {
      return fiterBtnsContainer.appendChild(el);
    }); // click on filter option insert current btn

    filterBtns.forEach(function (el) {
      return el.addEventListener('click', function (evt) {
        fiterBtnsCurrField.innerHTML = evt.target.textContent;
        contOpen = openCloseContainer(contOpen, fiterBtnsContainer, fiterBtnsCurrField);
      });
    }); // open/close container

    fiterBtnsCurrField.addEventListener('click', function () {
      contOpen = openCloseContainer(contOpen, fiterBtnsContainer, fiterBtnsCurrField);
    }); // remove old and inset new

    Array.from(rootEl.querySelectorAll('.filter__col')).forEach(function (el) {
      return rootEl.removeChild(el);
    });
    rootEl.appendChild(fiterBtnsCurrField);
    rootEl.appendChild(fiterBtnsContainer);
  }
}

function openCloseContainer(status, el, currField) {
  if (!status) {
    el.classList.add('show');
    currField.classList.add('open');
    return true;
  } else {
    el.classList.remove('show');
    currField.classList.remove('open');
    return false;
  }
}