import { massPageCards } from '../markup/index.js';
import { loadCardsHtml } from '../markup/index.js';
import { creatCards } from '../markup/index.js';

//=== через data-id="${idCards}" порівняти з let massPageCards = []

const listCard = document.querySelector('.list__card');
const dataList = document.querySelector('.date-list__data');
const dataIcon = document.querySelector('.date-list__icon');
const newContainer = document.querySelector('.news')
console.log(newContainer);


const STORAGE_KEY = 'read news';
const reading = []
newContainer.addEventListener('click', removeFromRead);
function removeFromRead(e) {
  if (e.target.nodeName !== 'A') {
    return;
  }
  //reading = e.target.dataset.data-id; 
  console.dir(e.target.dataset.id)
  massCards()
}
function massCards (){
    const massReadCards = massPageCards.map(massPageCard => {
    const cards = massPageCard.data-id === reading.data-id
    localStorage.setItem("cards", JSON.stringify('STORAGE_KEY', reading));
    
    if (JSON.parse(localStorage.getItem('STORAGE_KEY')) === null) {
    return;
    }

    })
}


// const read = document.querySelector('.navigation_link--current');
// read.addEventListener('click', addCurrentPage);

// function addCurrentPage(e) {
//   e.classList.remove('.navigation_link');
//   e.classList.add('.navigation_link--current');
// }






isStorageEmpty();

function isStorageEmpty() {
  
 JSON.parse(localStorage.getItem('STORAGE_KEY'));
}

// const toRead = document.querySelector('.item-news__info-link')
// toRead.addEventListener('click', readMoveList);

// function readMoveList(event) {
//    event.preventDefault();
   
//     const readMoreBtn = event.target
//  console.log(readMoreBtn);
//     if (!readMoreBtn) return;
//     localStorage.setItem('STORAGE_KEY', JSON.stringify(readMoreBtn))
   
  //}
