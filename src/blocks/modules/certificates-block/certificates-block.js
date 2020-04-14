import $ from 'jquery';
import fancybox from "@fancyapps/fancybox";

const certBlock = document.querySelector('.certificates-block');

if (certBlock) {
    const picItems = certBlock.querySelectorAll('.certificate__pic img');
    
    Array.from(picItems).forEach(el => el.addEventListener('click', certificatesClickHandler))
}

function certificatesClickHandler(evt) {
    const src = evt.target.dataset.srcset.replace('small', 'big');
    
    $.fancybox.open({
        src  :  `<img src="${src}" />`,
        type : 'inline',
    });
}