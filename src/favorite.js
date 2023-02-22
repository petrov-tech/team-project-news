import { massPageCards } from './js/markup/index';
import { createCardsToHtml } from './js/markup/index.js';
import './js/mobile_menu/index';
import './js/dark_mode/index';

const container = document.querySelector('.news');
// const containerCard = querySelector('.container-card');
// const toFavouriteBtn = querySelector('.item-news__add-to-favorite');

let dataMass = {}
const data = [];

createCardsToHtml(data);
container.addEventListener('click', addToFavorite);

function addToFavorite(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const curentBtn = e.target;
  curentBtn.classList.replace(
    '.item-news__add-to-favorite-btn',
    '.item-news__add-to-favorite-btn-remove'
  );
  const favoriteCard = e.target.dataset.id;
  massPageCards.map(massPageCard => {
    
    if (massPageCard.idCards === Number(favoriteCard)) {
      data.push(massPageCard);      
    };
    localStorage.setItem('data', JSON.stringify(dataMass));
  });
};

container.addEventListener('click', removeFromFavorite);
function removeFromFavorite() {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const curentBtn = e.target;
  curentBtn.classList.replace(
    '.item-news__add-to-favorite-btn-remove',
    '.item-news__add-to-favorite-btn'
  );

  const favoriteCard = e.target.dataset.id;
  data.map((est, i) => {
    console.log(est.idCards, Number(favoriteCard));
    if (est.idCards === Number(favoriteCard)) {
      data.splice(i, 1);
      return
    };
  });
};

function loadLockalStorage() {
  if (JSON.parse(localStorage.getItem('data')) === null) {
    return;
  };
  return JSON.parse(localStorage.getItem('data'));
};

loadLockalStorage();