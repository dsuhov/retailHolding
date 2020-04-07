import picomodal from 'picomodal';

const certBlock = document.querySelector('.certificates-block');

if (certBlock) {
    const picItems = certBlock.querySelectorAll('.certificate__pic img');
    
    Array.from(picItems).forEach(el => el.addEventListener('click', certificatesClickHandler))
}

function certificatesClickHandler(evt) {
    const src = evt.target.dataset.srcset.replace('small', 'big');
    
    picomodal({
        content: `<img src="${src}">`,
        overlayClose: true,
        modalStyles: {
            borderRadius: 0
        },
        
    })
    .afterClose(function (modal) { modal.destroy(); })
    .show();
}