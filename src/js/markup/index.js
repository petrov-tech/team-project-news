
import { generatePaginationButtons, newSearchToNextPage } from "../pagination/index"
import { getPopularArticle } from "../api";
import { getWeatherRefs } from "../weather";
import { loadLockalStorage } from "../read_more";
  
const news = document.getElementsByClassName("news")[0]
const paginationDiv = document.getElementsByClassName("pagination-buttons")[0]
const allCardsOnPage = []
let paginationKoef = 4
let numberPages = 1
let orientation = ""
const feeltImg = "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
let massPageCards = []
let currectPage = 2
let lastCuttectPage = 0
let searchBloom = false


window.addEventListener('resize', function () {
    const lastOriemtir = orientation
    orientationFromBody()
    
    if (lastOriemtir !== orientation) {
        createCardtToNews([])
    }
});


    

// перехід між сторінками createCardsToHtml([] ,3), має бути контейнер з класом news
function createCardsToHtml(mass = allCardsOnPage, page = 1) {
    searchBloom = false;
    createCardtToNews(mass, page)
    
}

function searchCards(mass,page = 1) {
    searchBloom = true;
    createCardtToNews(mass, page) 
    
}


function createCardtToNews(mass = allCardsOnPage, page = 1) { 
    addToMassCards(mass) 
    const startMass = orientationFromBody(page)    
     getMarkup(massPageCards, startMass)  
    
    

    if (currectPage !== lastCuttectPage && !searchBloom) { 
        
        paginationDiv.innerHTML = generatePaginationButtons(currectPage, numberPages);
    }
    
    else if (currectPage !== lastCuttectPage && searchBloom) {
        
       paginationDiv.innerHTML = generatePaginationButtons(currectPage, numberPages);                 
    }
}

function addToMassCards(elem) {
    elem.map((elem) => {
        if (elem.idCards) {return allCardsOnPage.push(elem)}        
        const mass = transformToFormat(elem)        
        allCardsOnPage.push(mass)        
    }).join("") 
}

// вертає HTML розмітку без пагінації
function loadCardsHtml(mass) {
    return "<ul class='list-news'>" + mass.map((elem) => {
        // пошук на фаворіт


        return createCards(elem)
     }).join("") + "</ul>"

}
function orientationFromBody(page) {
    const widthBody = document.body.clientWidth

    
    if (widthBody > 1280) {
        orientation ='desktop'
        paginationKoef = 8
    } else if (widthBody > 760) {
        orientation ='tablet'
        paginationKoef = 7
    } else {orientation ='mobile'
        paginationKoef = 4
    }
    const currentPage = location.pathname.match(/favorite.html/);
    if (currentPage) { paginationKoef += 1 }

    currectPage = page
    const startMass = page * paginationKoef - paginationKoef 
    numberPages = allCardsOnPage.length / paginationKoef    
    massPageCards = allCardsOnPage.slice(startMass, startMass + paginationKoef)
    return startMass
}

function getMarkup(massPageCards) {       
   const mass = getHtmlMarkup(massPageCards)  
    news.innerHTML = ""
    news.insertAdjacentHTML("beforeend", mass)

    const currentPage = location.pathname.match(/favorite.html/);
    if (!currentPage) { getWeatherRefs() }
}
function getHtmlMarkup(massPageCards) {
    return "<ul class='list-news'>" + massPageCards.map((elem, i) => {        
        
        
        const currentPage = location.pathname.match(/favorite.html/);
        if (!currentPage) {
                if (i === 0) {
                if (orientation === 'mobile') { return addWetter(elem) }                      
                return createCards(elem)
            } 
            else if (i === 1) { if (orientation === 'tablet') { return addWetter(elem) } }
            else if (i === 2) { if (orientation === 'desktop') { return addWetter(elem) } }            
        } 




        return createCards(elem)
    }).join("") + "</ul>"
}
function transformToFormat({ abstract, headline, web_url, multimedia, pub_date, title, created_date, url,section_name,section,uri,media,published_date,id }) {
    let toRead = false
    let toFavorite = false
    let imgUrl = ""
    let titleFormt = ""
    let dataFormt = ""
    let urlFormt = ""
    let sectionFormt = ""
    let idCards = ""

    if (multimedia) {                
        if (headline) {
            // масив за пошуком слова
            titleFormt = headline.main;
            imgUrl = getFormatImg(multimedia[0].url);
            dataFormt = pub_date;
            urlFormt = web_url;
            sectionFormt = section_name;
            idCards = uri
        }
        else {
            // масив за пошуком категорією
            titleFormt = title;
            imgUrl = multimedia[multimedia.length - 2].url;
            dataFormt = created_date;
            urlFormt = url;
            sectionFormt = section;
            idCards = uri
        }
    }
    else  {        

        // масив за популярним
        titleFormt = title;        
        dataFormt = published_date;
        urlFormt = url;
        sectionFormt = section;
        idCards = id

        // танці з бубном через media-metadata
        if (media.length === 0) {
            imgUrl = feeltImg;
        } else {
            const value = media[0];        
            const myObject = value['media-metadata'];        
            const lastKey = Object.keys(myObject)[Object.keys(myObject).length - 1];        
            const lastValue = myObject[lastKey].url;        
            imgUrl = lastValue
        }        
    }
    if (imgUrl === "") imgUrl=feeltImg
    dataFormt = getDataFormat(dataFormt)
    const paragraf = getFormatParagraf(abstract)

    // тут якщо читали або фаворіт по ід провіряти
   toRead = LockalStorageRead(idCards)

  return  ({idCards,sectionFormt,titleFormt,paragraf,dataFormt,urlFormt,imgUrl,toRead ,toFavorite })
}

function LockalStorageRead(id) {
    const dataObj = loadLockalStorage()
    if (dataObj) {
        const dataMass = Object.values(dataObj)
    
    for (let i = 0; i < dataMass.length; i++) {
        for (let j = 0; j < dataMass[i].length; j++) {
            if (dataMass[i][j].idCards === id) {
            return true
            }  
        }      
    }
    
}
}

function createCards({  urlFormt , sectionFormt,imgUrl,titleFormt,paragraf,dataFormt, idCards,toRead = false,toFavorite = false }) {
    if (toRead) {toRead = "cardsRead"} else toRead = ""
    if (toFavorite) {toFavorite = "cardsFavorite"} else toFavorite = ""    
    return `
    <li>
    <article class="item-news__article ${toRead}" data-id="${idCards} ">    
     <div class="item-news__wrapper-img">
        <img class="item-news__img"
                          src="${imgUrl}"
                          alt="">
                      <p class="item-news__category">${sectionFormt}</p>        
                      <button type="button" class="item-news__add-to-favorite ${toFavorite} " data-id="${idCards}">
                      <span class="item-news__add-to-favorite-btn">Add to favorite</span>
                      <span class="item-news__add-to-favorite-btn-remove">Remove from favorite</span>
								<svg class="item-news__block-icon active-news-icon"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								><path d="M4.66683 2C2.82616 2 1.3335 3.47733 1.3335 5.3C1.3335 6.77133 1.91683 10.2633 7.65883 13.7933C7.76168 13.8559 7.87976 13.889 8.00016 13.889C8.12056 13.889 8.23864 13.8559 8.3415 13.7933C14.0835 10.2633 14.6668 6.77133 14.6668 5.3C14.6668 3.47733 13.1742 2 11.3335 2C9.49283 2 8.00016 4 8.00016 4C8.00016 4 6.5075 2 4.66683 2Z" stroke="#4440F7" stroke-linecap="round" stroke-linejoin="round"/>

								</svg></span>
                      </button>                      
                  </div>
                  <div class="item-news__wrapper-text">
                  <h2 class="item-news__title">
                      ${titleFormt}
                  </h2>
                  <p class="item-news__description">
                      ${paragraf}</p>
                  </div>
                  <div class="item-news__info">
                      <span class="item-news__info-date" >${dataFormt}</span>
                      <a target="_blank" class="item-news__info-link" data-id="${idCards}" href="${
                        urlFormt
                      }" target="_blank" rel="noreferrer noopener">Read more</a></div>                    
    </article>
    </li>
    `        
}


function getFormatParagraf(p) {

     return p.slice(0, 115) + "..."
    

}

function getDataFormat(time) {
    const date = new Date(time)
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth()+1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(2,4);    
    return `${day}/${month}/${year} `   
}

function addWetter(elem) {
    // return massPageCards.push(лі погода) 
    
    return   `<li><div class="weather"><div class="weather__info"><span class="weather__deg"></span><div class="weather__geo"><span class="weather__value"></span>
            <p class="weather__location"><svg class="icon-location" width="20" height="20">
                  <use class="icon-location" href="/symbol-defs.a8b2e413.svg#icon-location"></use>
                </svg><span class="weather__city"></span></p></div></div><img class="weather__img" /><div class="weather__date">
        <p class="weather__day"></p><p class="weather__year"></p></div><a href="https://sinoptik.ua/" class="weather__link" target="_blank" rel="noreferrer noopener">weather for week</a></div></li>` + createCards(elem)
    
}
function getFormatImg(e) {
    return "https://static01.nyt.com/"+ e
}
function deleteCardsForNewSearch() {
    newSearchToNextPage()
    searchBloom = false
    news.innerHTML = ""
    allCardsOnPage.length = 0
}
function removeHash(str) {
  if (str.includes("#")) {
    return str.substring(0, str.indexOf("#"));
  } else {
    return str;
  }
}
export { allCardsOnPage, massPageCards, numberPages, searchBloom, createCardsToHtml, deleteCardsForNewSearch, loadCardsHtml, createCardsLast, searchCards, createCardtToNews, addToMassCards }

