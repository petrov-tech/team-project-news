import { data } from "./gallery" 

const news = document.getElementsByClassName("news")[0]

const allCardsOnPage = []
let idCards = 0
let paginationKoef = 5
let orientation = ""

createCardsToHtml(data)


// потрібний сторінка
function createCardsToHtml(mass) {

    const page = 1

    orientationFromBody()

    // mass.response.docs.map((elem) => { allCardsOnPage.push(elem)        
    // }).join("") 
    
    mass.map((elem) => { allCardsOnPage.push(elem)        
    }).join("")    

    
    const startMass = page * paginationKoef - paginationKoef    
    const massPageCards = allCardsOnPage.slice(startMass, startMass + paginationKoef)  
    
    getMarkup(massPageCards,startMass)
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

function getMarkup(massPageCards,idCardsSave) {        
    
    const mass = "<ul class='list-news'>" + massPageCards.map((elem, i) => {
        
        if (i === 0) {
            if (orientation === 'mobile') {
                idCards = idCardsSave
                return addWetter(elem)
            }            
            idCards = idCardsSave
            return createCards(elem, idCardsSave)
        } 
        else if (i === 1) { if (orientation === 'tablet') { return addWetter(elem) } }
        else if (i === 2) { if (orientation === 'desktop') { return addWetter(elem) } }        
        return createCards(elem)
    }).join("") + "</ul>"
  
    news.innerHTML = ""
    news.insertAdjacentHTML("beforeend", mass) 
}

// idCardsSave назва ід елемента в стореджі

function createCards({ abstract, headline, web_url , multimedia, pub_date ,url, title, thumbnail_standard, source },idCardsSave =  idCards) {
    
    idCards += 1
    const time = getDataFormat(pub_date)
    const paragraf = getFormatParagraf(abstract)
    const img = getFormatImg( multimedia[0].legacy.xlarge)
    const titleCard = headline.main


    return `
    <li>
    <article class="item-news__article" data-id="${idCards}">    
     <div class="item-news__wrapper-img">
        <img class="item-news__img"
                          src="${img}"
                          alt="">
                      <p class="item-news__category">${source}</p>
        
                      <button type="button" class="item-news__add-to-favorite ">
                      <span class="item-news__add-to-favorite-btn">Add to favorite
                         </span>
								<svg class="item-news__block-icon active-news-icon"
								width="16"
								height="16"
								viewBox="0 0 37 32"
								>
								</svg></span>
                      </button>
                      
                  </div>
                  <div class="item-news__wrapper-text">
                  <h2 class="item-news__title">
                      ${titleCard}
                  </h2>
                  <p class="item-news__description">
                      ${paragraf}</p>
                  </div>
                  <div class="item-news__info">
                      <span class="item-news__info-date">
                          ${time}
                      </span>
                      <a target="_blank" class="item-news__info-link" href="${
                        web_url
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
    return    createCards(elem)
    return   "<li>wetter</li>" + createCards(elem)
    
}
function getFormatImg(e) {
    return "https://static01.nyt.com/"+ e
}
export {allCardsOnPage,orientation, createCardsToHtml}