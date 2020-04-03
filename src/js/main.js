import svg4everybody from 'svg4everybody';
import webptest from './custom/webptest';
import lazyActions from './custom/lazy-actions';
import sliderActions from './custom/sliderActions';
// import calcFormActions from './custom/formCalcActions';
import fileInputActions from './custom/fileInputActions';
import validation from './custom/validation';
import servicesHeader from './custom/servicesHeader';
// import mapActions from './custom/mapcode';

window.addEventListener('load', () => {
  svg4everybody({});
  webptest(lazyActions);
  fileInputActions();

  if (document.querySelector('body.main-page')) {
    sliderActions();
    // calcFormActions();
    fileInputActions();
    validation();
    // mapActions();

  }

  if (document.querySelector('.services-page')) {
    servicesHeader();
  }

  if (document.querySelector('body.object-page')) {
    sliderActions();
    // calcFormActions();
    fileInputActions();
    validation();
  }

  
})