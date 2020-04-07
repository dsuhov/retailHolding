import LazyLoad from 'vanilla-lazyload';

export default () => {

  const lazyBG = new LazyLoad({
    elements_selector: ".lazy-bg",
    callback_reveal: (el) => {
      const lazySrc = el.dataset.lbg;
      const beforeExt = lazySrc.slice(lazySrc.indexOf('.'));

      el.style.backgroundImage = `url(\'${lazySrc}\')`;
    },
  });

  const simpleLL = new LazyLoad({
    elements_selector: '.lazy-img-simple'
  })
}