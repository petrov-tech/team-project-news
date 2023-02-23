
import { createCardtToNews, searchBloom, allCardsOnPage, addToMassCards } from "../markup";
import { getSearchArticle } from "../api";
const currentPage = location.pathname.match(/read.html/);
if (!currentPage) {
  const paginationDiv = document.getElementsByClassName("pagination-buttons")[0]
  paginationDiv.addEventListener("click",nextPage)
}

let lastPages = 0
let pageToBackend = 2

function generatePaginationButtons(currentPage, totalPages) {
   if (totalPages) lastPages = Math.ceil(totalPages) 

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
  
  if (e.target.nodeName !== "BUTTON") { return; }  
  if (2 >= lastPages - e.target.dataset.page && searchBloom) {
  
    getSearchArticle("", pageToBackend).then((ent) => {
      addToMassCards(ent)
      createCardtToNews([],Number(e.target.dataset.page))
    })
    pageToBackend += 1    
  } else
    createCardtToNews([], Number(e.target.dataset.page))
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