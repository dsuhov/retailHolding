import LazyLoad from 'vanilla-lazyload';

export default () => {

  const lazyBG = new LazyLoad({
    elements_selector: ".lazy-bg",
    callback_reveal: (el) => {
      const isWebp = el.classList.contains('webp');
      const lazySrc = el.dataset.lbg;
      const beforeExt = lazySrc.slice(lazySrc.indexOf('.'));

      if (isWebp) {
        el.style.backgroundImage = `url(\'${lazySrc.replace(beforeExt, '.webp')}\')`;
      } else {
        el.style.backgroundImage = `url(\'${lazySrc}\')`;
      }
    },
  });

  new LazyLoad({
    elements_selector: '.lazy-img-simple'
  })
}