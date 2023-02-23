import { massPageCards } from '../markup/index.js';
import { loadCardsHtml } from '../markup/index.js';
import { creatCards } from '../markup/index.js';



const listCard = document.querySelector('.list__card');
// const dataList = document.querySelector('.date-list__data');
const dataIcon = document.querySelector('.date-list__icon');

let dataListCard = '';

const STORAGE_KEY = 'read news';
let dataMass = {};
const reading = [];

const currentPage = location.pathname.match(/read.html/);
if (!currentPage) {
  const newContainer = document.querySelector('.news');
  newContainer.addEventListener('click', removeFromRead);
}

if (currentPage) {
  dataListCard = document.querySelector('.container__read');
  dataListCard.addEventListener('click', readButton)

}

isStorageEmpty();

function removeFromRead(e) {
  if (e.target.nodeName !== 'A') {
    return;
  }

  const idCard = e.target.dataset.id;
  reading.map((est, i) => {
   // console.log(est.idCards, Number(idCard));
    if (est.idCards === idCard) {
      reading.splice(i, 1);
      return;
    }
  });

  massCards(idCard);
  e.target.offsetParent.classList.add('cardsRead');
}
function massCards(e) {
  massPageCards.map(massPageCard => {
    if (massPageCard.idCards === e) {
      reading.push(massPageCard);
    }
  });
  saveDate();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataMass));
}

function saveDate() {
  const date = new Date();
  const time = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  dataMass[time] = reading;
}

function isStorageEmpty() {
  dataMass = loadLockalStorage();
  if (!dataMass) {
    dataMass = {};
  
  }
  const date = new Date();
  const time = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  const massKeys = Object.keys(dataMass);

  massKeys.map(e => {
    if (e === time) {
      const mass = dataMass[e];
      mass.map(e => reading.push(e));
    }
  });
}
function loadLockalStorage() {
  if (JSON.parse(localStorage.getItem('read news')) === null) {
    return;
  }
  return JSON.parse(localStorage.getItem('read news'));
  
}

function createCardsToRead() {
  let listDisv = '';
  
  const massKeys = Object.keys(dataMass);
  dataMass;
  massKeys.map(e => {
    listDisv += markup(dataMass[e], e);
  });
  dataListCard.innerHTML = '';
  dataListCard.insertAdjacentHTML('beforeend', listDisv);

}


function readButton(e){
  if(e.target.nodeName === 'BUTTON'){    
    e.target.nextSibling.nextElementSibling.classList.toggle("is-hidden")
    e.target.classList.toggle("turn")
  }
}


function markup(mass, data) {
  return `<ul class="date-list">
    <li class="date-list__data">
        <button class="data-list__btn">
        <div class="date-list__data">${data}         
            <svg class="date-list__icon" aria-hidden="true" width="15" height="9" viewBox="0 0 32 32">
            <path d="M3.76 25.143l-3.76-3.479 16-14.806 16 14.806-3.76 3.479-12.24-11.302-12.24 11.302z"></path>
            </svg>
        </div>
        </button>
        <ul class="list__card">
        ${loadCardsHtml(mass)}
        </ul>
    </li>
</ul>`;
}

export { createCardsToRead, loadLockalStorage };
