import svg4everybody from 'svg4everybody';
import webptest from './custom/webptest';
import lazyActions from './custom/lazy-actions';

window.addEventListener('load', () => {
  svg4everybody({});

  webptest(lazyActions);
  // setTimeout(lazyActions, 100);
})