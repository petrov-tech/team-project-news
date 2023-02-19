import { data } from "./gallery3"
import { generatePaginationButtons } from "../pagination"
    
const news = document.getElementsByClassName("news")[0]

const allCardsOnPage = []
let paginationKoef = 4
let numberPages = 1
let orientation = ""
const feeltImg = ""
let massPageCards = []
let currectPage = 2
let lastCuttectPage = 0


createCardsToHtml(data,1)

// перехід між сторінками createCardsToHtml([] ,3), має бути контейнер з класом news
function createCardsToHtml(mass = allCardsOnPage, page = 1) {    

    
    orientationFromBody()    
    mass.map((elem) => {
        if (elem.idCards) {return allCardsOnPage.push(elem)}        
        const mass = transformToFormat(elem)        
        allCardsOnPage.push(mass)        
    }).join("") 
    
    currectPage = page
    const startMass = page * paginationKoef - paginationKoef 
    numberPages = allCardsOnPage.length / paginationKoef    
    massPageCards = allCardsOnPage.slice(startMass, startMass + paginationKoef)  
    
    getMarkup(massPageCards,startMass)
}
// перехід між сторінками createCardsLast([] ,99,100), має бути контейнер з класом news
function createCardsLast(mass , page = 100, maxPage = 100) {    
    orientationFromBody()    
    mass.map((elem) => {
        if (elem.idCards) {return allCardsOnPage.push(elem)}        
        const mass = transformToFormat(elem)        
        allCardsOnPage.push(mass)        
    }).join("")    
    
    
    const startMass = (maxPage - page + 1) * paginationKoef - paginationKoef  
    numberPages = maxPage - (allCardsOnPage.length / paginationKoef)  
    massPageCards = allCardsOnPage.slice(startMass, startMass + paginationKoef)  
    
    getMarkup(massPageCards,startMass)
}

// вертає HTML розмітку без пагінації
function loadCardsHtml(mass) {
    return "<ul class='list-news'>" + mass.map((elem) => {
        return createCards(elem)
     }).join("") + "</ul>"

}
function orientationFromBody() {
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
    
}

function getMarkup(massPageCards) {       
   const mass = getHtmlMarkup(massPageCards)  
    news.innerHTML = ""
    news.insertAdjacentHTML("beforeend", mass)
    if (currectPage !== lastCuttectPage) {generatePaginationButtons(currectPage, numberPages )}
    
}
function getHtmlMarkup(massPageCards) {
    return "<ul class='list-news'>" + massPageCards.map((elem, i) => {        
        if (i === 0) {
            if (orientation === 'mobile') { return addWetter(elem) }                      
            return createCards(elem)
        } 
        else if (i === 1) { if (orientation === 'tablet') { return addWetter(elem) } }
        else if (i === 2) { if (orientation === 'desktop') { return addWetter(elem) } }        
        return createCards(elem)
    }).join("") + "</ul>"
}
function transformToFormat({ abstract, headline, web_url, multimedia, pub_date, title, created_date, url,section_name,section,uri,media,published_date,id }) {
    
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
            imgUrl = getFormatImg(multimedia[multimedia.length - 1].url);
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
    if (imgUrl === "") imgUrl="./error.png"
    dataFormt = getDataFormat(dataFormt)
    const paragraf = getFormatParagraf(abstract)

    // тут якщо читали або фаворіт по ід провіряти

  return  ({idCards,sectionFormt,titleFormt,paragraf,dataFormt,urlFormt,imgUrl})
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
                      <button type="button" class="item-news__add-to-favorite ${toFavorite} ">
                      <span class="item-news__add-to-favorite-btn">Add to favorite</span>
                      <span class="item-news__add-to-favorite-btn-remove">Remove from favorite</span>
								<svg class="item-news__block-icon active-news-icon"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								><use href="/symbol-defs.a8b2e413.svg#icon-addfavorite"></use>
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
                      <span class="item-news__info-date">${dataFormt}</span>
                      <a target="_blank" class="item-news__info-link" href="${
                        urlFormt
                      }">Read more</a></div>                    
    </article>
    </li>
    `        
}


function getFormatParagraf(p) {
    return p.slice(0,115) + "..."
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
            <p class="weather__location"><span class="weather__city"></span></p></div></div><img class="weather__img" /><div class="weather__date">
        <p class="weather__day"></p><p class="weather__year"></p></div><a href="https://sinoptik.ua/" class="weather__link" target="_blank" rel="noreferrer noopener">weather for week</a></div></li>` + createCards(elem)
    
}
function getFormatImg(e) {
    return "https://static01.nyt.com/"+ e
}
function deleteCardsForNewSearch() {

    news.innerHTML = ""
    allCardsOnPage.length = 0
}
export {allCardsOnPage,orientation,massPageCards,numberPages, createCardsToHtml, deleteCardsForNewSearch,loadCardsHtml,createCardsLast}