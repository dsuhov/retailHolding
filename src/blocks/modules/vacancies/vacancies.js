const vacancies = document.querySelector('.vacancies');

if (vacancies && window.matchMedia('(min-width: 1050px)').matches) {
    const sideBlock = vacancies.querySelector('.vacancies-side-card');
    const sideBlockRect = sideBlock.getBoundingClientRect();

    let elemActive = false;
    let elemInitialTopOffset = sideBlock.getBoundingClientRect().top;

    window.addEventListener('scroll', function() {
        elemTopOffset = sideBlock.getBoundingClientRect().top; 
        
        if ((elemTopOffset - 20) <= 0 && !elemActive) {
            sideBlock.classList.add('fixed');
            elemActive = true;
        } else if (pageYOffset + 20 <= elemInitialTopOffset  && elemActive) {
            sideBlock.classList.remove('fixed');
            elemActive = false;
        }
    });
}