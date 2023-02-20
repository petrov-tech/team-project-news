
import { createCardsToHtml } from "../markup"; 
const paginationDiv = document.getElementsByClassName("pagination-buttons")[0]
paginationDiv.addEventListener("click", toNextPage)  


function generatePaginationButtons(currentPage, totalPages) {
  
 
  const maxButtonsToShow = 3; // максимальна кількість кнопок для відображення
  
  // обчислюємо діапазон сторінок, який можна показати на даний момент
  const startPage = Math.max(currentPage - Math.floor(maxButtonsToShow/ 2 ) , 1);
  const endPage = Math.min(startPage + maxButtonsToShow , Math.ceil(totalPages));

  // створюємо HTML-код для кнопок пагінації
  let paginationHtml = '';
  
  if (totalPages > 1) {
        paginationHtml += `<button class="pagination-button pagination-button-scrol" data-page=" ${currentPage-1  } ">&laquo; Prew</button>`;
  } 
  
  for (let page = startPage; page <= endPage; page += 1) {    
             
    paginationHtml += `<button class="pagination-button ${page == currentPage ? "active" : " "}" data-page="${page}">${page}</button>`;
  }

  if (totalPages > 1) {
    paginationHtml += `<button class="pagination-button pagination-button-scrol" data-page="${(-currentPage-1)}">&raquo; Next</button>`;
  }

  paginationDiv.innerHTML = paginationHtml

  
  
}

function toNextPage(e) {
    
    createCardsToHtml([], +(e.target.dataset.page))
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

export {generatePaginationButtons}