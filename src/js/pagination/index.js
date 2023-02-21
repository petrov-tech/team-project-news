const paginationDiv = document.getElementsByClassName("pagination-buttons")[0]
import { createCardtToNews, searchBloom, allCardsOnPage, addToMassCards } from "../markup";
import { getSearchArticle } from "../api";

paginationDiv.addEventListener("click",nextPage)
let lastPages = 3
let pageToBackend = 2

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
  if (lastPages - e.target.dataset.page <= 2 && searchBloom) {
    console.log("suda");
    getSearchArticle("", pageToBackend).then((e) => { addToMassCards(e) })
    pageToBackend += 1
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
function newSearchToNextPage() {
  pageToBackend = 2 
}

export {generatePaginationButtons,scrollToTop,newSearchToNextPage}