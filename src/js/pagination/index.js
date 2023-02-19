const paginationDiv = document.getElementsByClassName("pagination-buttons")[0]
import { createCardsToHtml } from "../markup"; 

paginationDiv.addEventListener("click",nextPage)

function generatePaginationButtons(currentPage, totalPages) {
  const maxButtonsToShow = 7; // максимальна кількість кнопок для відображення
    
  // обчислюємо діапазон сторінок, який можна показати на даний момент
  const startPage = Math.max(currentPage - Math.floor(maxButtonsToShow / 2) , 1);
  const endPage = Math.min(startPage + maxButtonsToShow , Math.ceil(totalPages));

  // створюємо HTML-код для кнопок пагінації
  let paginationHtml = '';

  if (startPage > 1) {
    paginationHtml += '<button class="pagination-button" data-page="1">&laquo;</button>';
  }
  
    for (let page = startPage; page <= endPage; page +=1) {
    paginationHtml += `<button class="pagination-button ${page == currentPage ? "active" : " "}" data-page="${page}">${page}</button>`;
  }

  if (endPage < totalPages) {
    paginationHtml += `<button class="pagination-button" data-page="${totalPages}">&raquo;</button>`;
  }

    paginationDiv.innerHTML= paginationHtml   
}

function nextPage(e) {
    
    createCardsToHtml([], e.target.dataset.page)
    
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