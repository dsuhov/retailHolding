import LazyLoad from 'vanilla-lazyload';

export default (elSelector) => {
  const popupLazyBgInstance = new LazyLoad({
    elements_selector: elSelector,
    callback_reveal: (el) => {
      const lazySrc = el.dataset.lbg;

      el.style.backgroundImage = `url(\'${lazySrc}\')`;
    },
  });

  return popupLazyBgInstance;
}

