import $ from 'jquery';
import rangeslider from 'rangeslider.js';
import CustomSelect from '../../../js/import/vanilla-js-dropdown';

if (document.querySelector('.calc-price')) {

  // Something like quiz on small devices
  if (window.matchMedia("(max-width: 540px)").matches) {
    const formBlocks = Array.from(document.querySelectorAll('.calc-price__field-block-media'));
    const nextBtn = document.getElementById('calc-price-media-btn');
    
    let currBlock = 0;
    const totalBlocks = formBlocks.length;
  
    formBlocks.forEach(el => {
      el.classList.add('calc-price--hidden');
    });
  
    const showBlock = (allBlocks, nextBlock) => {
      formBlocks[nextBlock-1].classList.add('calc-price--hidden');
      formBlocks[nextBlock].classList.remove('calc-price--hidden');
  
      if (currBlock === totalBlocks-1) {
        nextBtn.style.display = 'none';
        document.querySelector('.calc-price__ask_spec--media').style.display = 'none';
      }
    }
    
    showBlock(formBlocks, ++currBlock);
  
    nextBtn.addEventListener('click', nextBtnHandler);
  
    
    
    function nextBtnHandler(evt) {
      showBlock(formBlocks, ++currBlock);
    }
  }
  

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