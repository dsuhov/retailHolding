import 'simplebar';

var teamBlock = document.querySelector('.team');

if (teamBlock && window.matchMedia("(min-width: 769px)").matches) {
  
  var tbItems = Array.from(teamBlock.querySelectorAll('.team__person-item')); // add click event on all items

  tbItems.forEach(function (el) {
    el.addEventListener('click', tbItemClickHandleer);
  });
}

function tbItemClickHandleer(evt) {
  var item = null;

  if (evt.target.classList.contains('team__person-item')) {
    item = evt.target;
  } else {
    item = evt.target.closest('.team__person-item');
  }

  Array.from(teamBlock.querySelectorAll('.team__person-item')).forEach(function (el) {
    el.classList.remove('team__person-item--active');
  });
  item.classList.add('team__person-item--active');
  var perside = teamBlock.querySelector('.team__person-side');
  var picSet = item.querySelector('picture img').dataset.srcset;
  var name = item.querySelector('.team__person-item-name').textContent;
  var charge = item.querySelector('.team__person-item-charge').textContent;
  var projects = item.dataset.projects;

  var newCode = `
  <div class="team__person-side-content">
    <div class="team__person-side-pic">
          <div class="image-adaptive">
            <img style="width: 100%" class="image-adaptive__img lazy-img-simple" src="${picSet}" alt="Иван Иванов">
          </div>
    </div>
    <div class="team__person-side-name">${name}</div>
    <div class="team__person-side-charge">${charge}</div>
    <div class="team__person-side-projects">${projects} проектов</div>
  </div>
  `;
  perside.innerHTML = newCode;
}