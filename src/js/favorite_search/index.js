import { massPageCards } from '../markup/index';
import { loadLockalStorage } from '../read_more';

const data = [];
loadLockalStorageFavorite();


const container = document.querySelector('section');
container.addEventListener('click', addToFavorite);


function addToFavorite(e) {

    if (e.target.classList.contains("item-news__add-to-favorite")) {
         let toggal = true     

        const favoriteCard = e.target.dataset.id;

        data.map((elem,i) => {
            if (elem.idCards == favoriteCard) {
                e.target.classList.remove("cardsFavorite")
                data.splice(i, 1);
                toggal = false
                localStorage.setItem('data', JSON.stringify(data));
                const currentPage = location.pathname.match(/favorite.html/);
                 if (currentPage) { e.target.parentNode.parentNode.parentNode.remove(); }
                
                return
            } 
            
        })
        if (toggal) {            
            const currentPage = location.pathname.match(/read.html/);            
            
            if (currentPage) {
                const card = LockalStorageRead(favoriteCard);
                
                if (card === undefined) {
                    return
                } else {
                    e.target.classList.add("cardsFavorite");
                    card.toRead = true
                    data.push(card);
                    localStorage.setItem('data', JSON.stringify(data));
                    return
                }
            } else
            massPageCards.map(massPageCard => {               

                 if (massPageCard.idCards == favoriteCard) {                    
                    e.target.classList.add("cardsFavorite")
                    massPageCard.toFavorite = true
                    data.push(massPageCard);
                    return
                }
                localStorage.setItem('data', JSON.stringify(data));
                });        
        }}      
    }
    

function LockalStorageRead(id) {
    const dataObj = loadLockalStorage()
    
    if (dataObj) {
        const dataMass = Object.values(dataObj)        
        for (let i = 0; i < dataMass.length; i++) {            
            for (let j = 0; j < dataMass[i].length; j++) {
                if (dataMass[i][j].idCards == id) {                    
                    return dataMass[i][j]
                } 
            }
        }
    } 
}

function loadLockalStorageFavorite() {   
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