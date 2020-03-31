if (document.querySelector('.calc-price') &&  window.matchMedia("(max-width: 540px)").matches) {
  const formBlocks = Array.from(document.querySelectorAll('.calc-price__field-block-media'));
  const nextBtn = document.getElementById('calc-price-media-btn');
  
  let currBlock = 0;
  const totalBlocks = formBlocks.length;

  formBlocks.forEach(el => {
    el.classList.add('calc-price--hidden');
  });

  
  showBlock(formBlocks, ++currBlock);

  nextBtn.addEventListener('click', nextBtnHandler);

  function showBlock(allBlocks, nextBlock) {
    formBlocks[nextBlock-1].classList.add('calc-price--hidden');
    formBlocks[nextBlock].classList.remove('calc-price--hidden');

    if (currBlock === totalBlocks-1) {
      nextBtn.style.display = 'none';
      document.querySelector('.calc-price__ask_spec--media').style.display = 'none';
    }
  }
  
  function nextBtnHandler(evt) {
    showBlock(formBlocks, ++currBlock);
  }
}

