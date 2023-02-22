import { massPageCards } from '../markup/index.js';
import { loadCardsHtml } from '../markup/index.js';
import { creatCards } from '../markup/index.js';


//=== через data-id="${idCards}" порівняти з let massPageCards = []

const listCard = document.querySelector('.list__card');
const dataList = document.querySelector('.date-list__data');
const dataIcon = document.querySelector('.date-list__icon');
let dataListCard = ""



const STORAGE_KEY = 'read news';
let dataMass = {}
const reading = []

const currentPage = location.pathname.match(/read.html/);
if (!currentPage) {
  const newContainer = document.querySelector('.news')
  newContainer.addEventListener('click', removeFromRead);
}

if (currentPage) {
   dataListCard = document.querySelector('.container__read');
}



isStorageEmpty();



function removeFromRead(e) {
  if (e.target.nodeName !== 'A') {
    return;
  }
  
  const idCard = e.target.dataset.id; 
  
  massCards(idCard)
  e.target.offsetParent.classList.add("cardsRead")
}
function massCards (e){
  massPageCards.map(massPageCard => {

     if (massPageCard.idCards === Number(e)) {       
       reading.push(massPageCard)
       
       
     }     
  })
  
  saveDate()
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataMass));
    
}

function saveDate() {
  const date = new Date()
  
  const time = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
  

  dataMass[time] = reading

  } 






function isStorageEmpty() {
  
  dataMass = loadLockalStorage()

    const date = new Date()
    const time = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
   
  const massKeys = Object.keys(dataMass)

    massKeys.map(e => {
    
      
    if (e === time) {    
      const mass = dataMass[e]
      mass.map(e => 
        reading.push(e)
      )
        

    } 
    })

  
}
function loadLockalStorage() {
  if (JSON.parse(localStorage.getItem('read news')) === null) {
    return;
    }
  return JSON.parse(localStorage.getItem('read news'));
}


function createCardsToRead() {
  let listDisv = ""
  const massKeys = Object.keys(dataMass)
  dataMass
  massKeys.map(e => {
    
    listDisv += markup(dataMass[e],e)
  })
  
  dataListCard.innerHTML = ""  
    dataListCard.insertAdjacentHTML("beforeend", listDisv)
  
}


function markup(mass,data) {
  

  return `<ul class="date-list">
    <li class="date-list__data">
        <button class="data-list__btn">
        <div class="date-list-search is-hidden">
            <svg class="date-list__icon turn" aria-hidden="true" width="15" height="9">
            <use href="./images/symbol-defs.svg#icon-up"></use></svg>
            <p>${data}</p>            
        </div>
        </button>
        ${loadCardsHtml(mass)}
    </li>
</ul>`
}

export {createCardsToRead,loadLockalStorage}