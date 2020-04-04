
const pageSingleNews = document.querySelector('.page-single-news');

if (pageSingleNews && window.matchMedia('(min-width: 621px)').matches) {
  const mainPic = pageSingleNews.querySelector('.page-single-news__big-img img');
  const oreviews = pageSingleNews.querySelectorAll('.page-single-news__small-img img');
  
  Array.from(oreviews).forEach(el => {
    el.addEventListener('click', evt => {
      mainPic.src = evt.target.src.replace('small', 'big');
    });
  });
}