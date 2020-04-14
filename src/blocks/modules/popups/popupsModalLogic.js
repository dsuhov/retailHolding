import $ from 'jquery';
import fancybox from "@fancyapps/fancybox";

import { operateOnBtns } from "./btnPopupAccociation";

export default function popupsModalLogic(rootElPopups, lazyInstance) {
  operateOnBtns(createModal);
}

function createModal(popupId, btnId) {
  const popupEl = document.getElementById(popupId);
  const btnEl = document.getElementById(btnId);

  if (popupEl && btnEl) {

    $(btnEl).click((evt) => {
      evt.preventDefault();
      
      $.fancybox.open({
        src  : popupEl,
        type : 'inline',
        closeExisting: false,
        smallBtn: false,
        buttons: [],
        autoFocus: false,
        touch: {
          vertical: true,
          momentum: false
        }
      });
    })
  }
}

$('.popup__close').click(() => $.fancybox.close());