import initLazy from "./popupLazyInit";
import popupsModalLogic from "./popupsModalLogic";

if (document.querySelector(".popup-lazy-img")) {
  const lazyInstance = initLazy(".popup-lazy-img");
  const popups = document.getElementById('popups');

  if (popups) {
    popupsModalLogic(popups, lazyInstance);
  }

  // disable date input
  const datePickerEl = document.querySelector('.popup-2__date-picker input[name="datepicker"]');
  if (datePickerEl) {
    datePickerEl.disabled = true;
    datePickerEl.style.display = "none";
    const isChooseDateEl = document.querySelectorAll('.popup-2__bind-method .input-checkbox__input');

    isChooseDateEl[1].addEventListener('change', evt => {
      const isChecked = evt.target.checked;

      if (isChecked) {
        datePickerEl.disabled = false;
        isChooseDateEl[0].checked = false;
        datePickerEl.style.display = "block";
      } else {
        datePickerEl.disabled = true;
        isChooseDateEl[0].checked = true;
        datePickerEl.style.display = "none";
      }
    });

    isChooseDateEl[0].addEventListener('change', evt => {
      isChooseDateEl[1].click();
    });
  }
}