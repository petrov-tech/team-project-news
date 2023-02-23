import { massPageCards } from '../markup/index';
import { createCardsToHtml } from '../markup/index';

const data = [];
loadLockalStorage();

const container = document.querySelector('section');
container.addEventListener('click', addToFavorite);

function addToFavorite(e) {    
    if (e.target.nodeName === 'BUTTON') {
        let toggal = true;        
        const favoriteCard = e.target.dataset.id;
        
        data.map((elem, i) => {
            if (elem.idCards === Number(favoriteCard)) {
                e.target.classList.remove("cardsFavorite");
                data.splice(i, 1);
                toggal = false;
                localStorage.setItem('data', JSON.stringify(data));
                const currentPage = location.pathname.match(/favorite.html/);
                if (currentPage) { e.target.parentNode.parentNode.parentNode.remove(); }
                return
            };
        });
        if (toggal) {
        massPageCards.map(massPageCard => {
            if (massPageCard.idCards === Number(favoriteCard)) {
                e.target.classList.add("cardsFavorite");
                data.push(massPageCard);
                return
            };
            localStorage.setItem('data', JSON.stringify(data));
            });        
        };
    };  
};
 
function loadLockalStorage() {   
    const mass = dataLockalStorage();
    if (mass) loadLockalToMass(mass);
};

function dataLockalStorage() {
  if (JSON.parse(localStorage.getItem('data')) === null) {
    return;
    }    
    return JSON.parse(localStorage.getItem('data')); 
};

function loadLockalToMass(elem) {
    elem.map(e => {
        data.push(e);
    });
};

export {dataLockalStorage}