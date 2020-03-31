import IMask from 'imask';

export default () => {
  const phoneInputs = document.querySelectorAll('input[name="phone"]');

  [...phoneInputs].forEach(el => {
    IMask(el, {
      mask: '{+7} (000) 000-00-00',
      lazy: true,
    })
  });

  validPhone(phoneInputs);
  
}

function validPhone(inputs) {
  const regex = /\d+/g;

  // safary fix
  for (let i = 0; i < inputs.length; i++) {
    inputs[i]
        .closest('form')
        .querySelector('button[type="submit"]')
        .addEventListener('click', inputErrHandler(inputs[i]));
  }

  function inputErrHandler(inpEl) {  
    
    return (evt) => {

      if (inpEl.value.length !== 18 || isSameNumbers(inpEl.value)) {
        inpEl.setCustomValidity('Неверный формат номера!');
      } else {
        inpEl.setCustomValidity('');
      }
    }

  }

  function isSameNumbers(num) {
    const digits = num.match(regex).slice(1).join('');
    
    if (digits.length !== 10) {
      return true;
    }

    if (digits === '1234567890') {
      return true;
    }

    return digits.split('').every((el, i, arr) => {
      
      if (i > 0) {
        return arr[i-1] === el;
      } else {
        return true;
      }
    });
  }
}