import $ from 'jquery';
import rangeslider from 'rangeslider.js';
import CustomSelect from '../import/vanilla-js-dropdown.min';

export default () => {
  const rangeField = document.getElementById('cp-area');
  const rangeScreen = document.getElementById('cp-area-screen');

  
  document.querySelectorAll('select').forEach(el => {
    new CustomSelect({
      elem: el
    });
  })

  $('input[type="range"]').rangeslider({
    polyfill: false,
    onSlide: function(position, value) {
      rangeScreen.value = value;
    },
  });
  
  rangeScreen.addEventListener('change', evt => {
    const val = parseInt(evt.target.value);

    if (isNaN(val)) {
      evt.target.value = '';
    } else {
      rangeField.value = val;
      $('input[type="range"]').rangeslider('update', true);
    }

  })
}