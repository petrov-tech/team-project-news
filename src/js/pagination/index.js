const paginationDiv = document.getElementsByClassName("pagination-buttons")[0]
import { createCardtToNews,searchBloom } from "../markup";

paginationDiv.addEventListener("click",nextPage)
let lastPages = 3

function generatePaginationButtons(currentPage, totalPages) {
   
  lastPages = Math.ceil(totalPages)
  
  
  const maxButtonsToShow = 4; // максимальна кількість кнопок для відображення
  
  // обчислюємо діапазон сторінок, який можна показати на даний момент
  const startPage = Math.max(currentPage - Math.floor(maxButtonsToShow/ 2 ) , 1);
  const endPage = Math.min(startPage + maxButtonsToShow , lastPages);

  // створюємо HTML-код для кнопок пагінації
  let paginationHtml = '';
  
  if (totalPages > 1 && -1 != -currentPage) {
        paginationHtml += `<button class="pagination-button pagination-button-scrol" data-page="${currentPage-1  }">&laquo; Prew</button>`;
  } 
  
  for (let page = startPage; page <= endPage; page += 1) {    
             
    paginationHtml += `<button class="pagination-button ${-page === -currentPage ? "active" : " "}" data-page="${page}">${page}</button>`;
  }

  if (totalPages > 1 && -lastPages != -currentPage) {    
    paginationHtml += `<button class="pagination-button pagination-button-scrol" data-page="${-1*(-currentPage-1)}">Next &raquo;</button>`;
  }

  
  return paginationHtml

}
function nextPage(e) {
  
    if (e.target.nodeName !== "BUTTON") {    return;    } 
  if (lastPages - e.target.dataset.page <= 1 && searchBloom) {

    // //сюда масив пошуку т
    // addToMassCards(mass)
    // console.log(lastPages, e.target.dataset.page, "load",searchBloom);
  }
    createCardtToNews([], +(e.target.dataset.page))
    scrollToTop()
  }

function scrollToTop() {
  const scrollToTopDuration = 500; 
  const scrollStep = -window.scrollY / (scrollToTopDuration / 15);
  const scrollInterval = setInterval(() => {
    if (window.scrollY != 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}

export {generatePaginationButtons,scrollToTop}