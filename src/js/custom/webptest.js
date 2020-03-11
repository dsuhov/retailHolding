import './modernizr-custom';

export default (cllb) => {
  Modernizr.on('webp', function(result) {
    if (result) {
      document.querySelectorAll('.bg-img').forEach(e => {
        e.classList.add('webp');
      });
    } else {
      document.querySelectorAll('.bg-img').forEach(e => {
        e.classList.add('no-webp');
      });
    }
    cllb();

  });
}