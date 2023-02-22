import { massPageCards } from '../markup/index';
import { createCardsToHtml } from '../markup/index';


// const containerCard = querySelector('.container-card');
// const toFavouriteBtn = querySelector('.item-news__add-to-favorite');


const data = [];
loadLockalStorage();


// createCardsToHtml(data);



    const container = document.querySelector('section');
    container.addEventListener('click', addToFavorite);





function addToFavorite(e) {
    
    if (e.target.nodeName === 'BUTTON') {
         let toggal = true     
        
        


        const favoriteCard = e.target.dataset.id;
        
        data.map((elem,i) => {
            if (elem.idCards === Number(favoriteCard)) {
                e.target.classList.remove("cardsFavorite")
                data.splice(i, 1);
                toggal = false
                localStorage.setItem('data', JSON.stringify(data));
                return
            } 
            
        })
        if (toggal) {
        massPageCards.map(massPageCard => {
                if (massPageCard.idCards === Number(favoriteCard)) {
                    e.target.classList.add("cardsFavorite")
                    data.push(massPageCard);
                    return
                }
                localStorage.setItem('data', JSON.stringify(data));
                });        
        }}      
    }
    


// container.addEventListener('click', removeFromFavorite);

// function removeFromFavorite() {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   const curentBtn = e.target;
//   curentBtn.classList.replace(
//     '.item-news__add-to-favorite-btn-remove',
//     '.item-news__add-to-favorite-btn'
//   );

//   const favoriteCard = e.target.dataset.id;
//   data.map((est, i) => {
//     console.log(est.idCards, Number(favoriteCard));
//     if (est.idCards === Number(favoriteCard)) {
//       data.splice(i, 1);
//       return;
//     }
//   });
// }

function loadLockalStorage() {   
    const mass = dataLockalStorage()
    if (mass) loadLockalToMass(mass)
}
function dataLockalStorage() {
  if (JSON.parse(localStorage.getItem('data')) === null) {
    return;
    }    
    return JSON.parse(localStorage.getItem('data'))    
}
function loadLockalToMass(elem) {
    elem.map(e => {
        data.push(e)
    })
}


export {dataLockalStorage}