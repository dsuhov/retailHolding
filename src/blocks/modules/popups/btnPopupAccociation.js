// modal id -> string[button id]
const btnPopupAccociation = {
  "popup-1": ["ask_specialist", "ask_specialist-2"],
  "popup-2": ["header-phone-text-btn", "header-phone-text-btn-footer"],
  "popup-3": ["header-main-btn", "footer-card-btn", ]
};

export function operateOnBtns(callback) {
  for (let item in btnPopupAccociation) {
    btnPopupAccociation[item].forEach((element) => {
      callback(item, element);
    });
  }
}