import svg4everybody from 'svg4everybody';
import webptest from './custom/webptest';
import lazyActions from './custom/lazy-actions';
import fileInputActions from './custom/fileInputActions';
import validation from './custom/validation';
import servicesHeader from './custom/servicesHeader';

window.addEventListener('load', () => {
  svg4everybody({});
  webptest(lazyActions);
  fileInputActions();
  validation();

  servicesHeader();
});