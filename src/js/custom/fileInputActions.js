export default () => {
  const inputFile = document.querySelector('.calc-price__file-input');

  if (document.querySelector('.calc-price__file-input')) {
    inputFile.addEventListener('change', fileInputHandler);
  }
}

function fileInputHandler(evt) {
  const infoBlock = document.querySelector('.calc-price__file-info');
  const inpFiles = evt.target.files;
  const flength = inpFiles.length;

  // clear info if info block is not empty
  if (infoBlock.children.length > 0) {
    infoBlock.innerHTML = '';
  }

  // size of files
  let size = 0;

  for (let file of inpFiles) {
    size += file.size;
  }

  // actions depending on size
  if (constraint(size)) {
    evt.target.setCustomValidity("");
  } else {
    appendDescrLine("Макс. вес < 2 ГБ", infoBlock);
    evt.target.setCustomValidity("Файл должен быть не более 2ГБ");
    evt.target.value = null;
  }

  // print info about files into info block
  if (flength <= 2) {
    Array.from(inpFiles).forEach(el => {
      appendDescrLine(el.name, infoBlock);
    })
    
  } else {
    Array.from(inpFiles).slice(0, 2).forEach(el => {
      appendDescrLine(el.name, infoBlock);
    });

    appendDescrLine('+' + (flength - 2).toString() + ' файлов', infoBlock);
  }
}

function appendDescrLine(text, parentNode) {
  const newEl = document.createElement('span');
  newEl.classList.add('calc-price__file-info-text')
  newEl.innerHTML = text;
  parentNode.append(newEl);
}

function constraint(size) {
  return size < 2147483648;
}