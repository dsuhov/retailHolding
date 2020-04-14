import $ from 'jquery';
import fancybox from "@fancyapps/fancybox";

const pageGratitudeBlock = document.querySelector('.page-gratitudes');

if (pageGratitudeBlock) {
    const pics = pageGratitudeBlock.querySelectorAll('.clickable');
    
    Array.from(pics).forEach((el) => {
        el.addEventListener('click', imgClickHandler);
    });
    
    // Actions on img cis clicked
    function imgClickHandler(evt) {
        const targetImg = evt.target.dataset.srcset.replace('small', 'big'); 
        
        $.fancybox.open({
            src  :  `<img src="${targetImg}" />`,
            type : 'inline',
        });
    }
}