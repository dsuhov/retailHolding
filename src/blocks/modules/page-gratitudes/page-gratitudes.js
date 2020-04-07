import picomodal from 'picomodal';

const pageGratitudeBlock = document.querySelector('.page-gratitudes');

if (pageGratitudeBlock) {
    const pics = pageGratitudeBlock.querySelectorAll('.clickable');

    console.log(pics);
    
    Array.from(pics).forEach((el) => {
        el.addEventListener('click', imgClickHandler);
    });
    
    // Actions on img cis clicked
    function imgClickHandler(evt) {
        const targetImg = evt.target.dataset.srcset.replace('small', 'big'); 
        
        picomodal({
            content: `<img style="width: 100%" src="${targetImg}">`,
            overlayClose: true,
            modalStyles: {
                borderRadius: 0
            },
            
        })
        .afterClose(function (modal) { modal.destroy(); })
        .show();
    }
}