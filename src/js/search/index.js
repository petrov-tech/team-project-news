import { getSearchArticle, sumPage } from "../api";
import { getWeatherRefs } from "../weather";
import {generatePaginationButtons,scrollToTop,newSearchToNextPage} from "../pagination";
import { deleteCardsForNewSearch, searchCards } from "../markup";

const refs = {
    searchForm: document.querySelector('#search-form'),
    searchInput: document.querySelector('#search-form__input'),
    formBtn: document.querySelector('.search-form-btn'),
    newsList: document.querySelector('.list-news'),
    containerNews: document.querySelector('.news'),
    paginationCtr: document.querySelector('.pagination-buttons'),
    errorCtr: document.querySelector('.not-found'),


}

let valuePage = {
  curPage: 1,
  numLinksTwoSide: 1,
  totalPages: 100,
};

let page = 0;

refs.searchForm.addEventListener('submit', inSearchNews);

async function inSearchNews(e) {
    e.preventDefault();
    
    const {
        elements: { searchQuery },
      } = e.currentTarget;
    const search_query = searchQuery.value.toLowerCase().trim();
    // refs.containerNews.classList.remove('is-hidden');
    const data = await getSearchArticle(search_query, page);

    
    if (data.length === 0) {
        refs.newsList.innerHTML = '';
        // refs.pagination.classList.add('pagination-hidden');
        // //  refs.weather.classList.add('weather-hidden');
        refs.errorCtr.classList.remove('not-found--hidden');
    }

    if (search_query === '') {
        refs.errorCtr.classList.remove('not-found--hidden');
    }
       

    valuePage.totalPages = sumPage / 10;

    deleteCardsForNewSearch(data);
    searchCards(data, 1);

    updateNewsList();

    generatePaginationButtons();
    scrollToTop();
    newSearchToNextPage();

    // refs.errorCtr.classList.add('not-found--hidden');
    /* потрібно добавити до секції Pagination в css стилі клас is-hidden */
    refs.paginationCtr.classList.add('is-hidden');
    
    
  

    function updateNewsList(markup) {
        refs.newsList.innerHTML = markup;
    };
    
    refs.searchInput.reset();

}


// const newsList = document.querySelector('list-news');

// searchForm.addEventListener('submit', inSearchNews);

// function inSearchNews(e) {
//     e.preventDefault();

//     let searchValue = searchInput.value.toLowerCase().trim();
//     let searchNews = JSON.parse(localStorage.getItem('newsSection'));
//         if(searchNews === null) return;
//     let hits = checkSearchNews(searchNews, searchInput);

//     function checkSearchNews(searchNews, searchValue) {
//         searchNews.reduce((hits, news) => {
//         if (
//             news.title.toLowerCase().includes(searchValue) ||
//             news.description.toLowerCase().includes(searchValue) ||
//             news.category.toLowerCase().includes(searchValue)
//             ) {
//                 hits.push(news);
//             }
//             return hits;
//         }, [])};
    
//     if (hits.length === 0) {
//         block.innerHTML = '';
//         document.querySelector('.underfined').classList.remove('underfined-hidden');
//         return;
//     }

//     let markup = 
// }



/* Приклад 1*/



// import { createMarkup, block } from '../../favorite';
// const inputEl = document.querySelector('#search-field__input'),
//   formEl = document.querySelector('#form-field');

// formEl.addEventListener('submit', event => {
//   event.preventDefault();

//   let value = inputEl.value.toLowerCase().trim();
//   let arr = getLocalarr();
//   if (arr === null) return;
//   let hits = checkArr(arr, value);

//   if (hits.length === 0) {
//     block.innerHTML = '';
//     document.querySelector('.underfined').classList.remove('underfined-hidden');
//     return;
//   }

//   let markup = createMarkup(hits);
//   block.innerHTML = markup;
//   document.querySelector('.underfined').classList.add('underfined-hidden');
// });

// function getLocalarr() {
//   return JSON.parse(localStorage.getItem('newsSection'));
// }
// function checkArr(arr, value) {
//   return arr.reduce((hits, elem) => {
//     if (
//       elem.title.toLowerCase().includes(value) ||
//       elem.description.toLowerCase().includes(value) ||
//       elem.category.toLowerCase().includes(value)
//     ) {
//       hits.push(elem);
//     }
//     return hits;
//   }, []);
// }

/* 2 */

// const block = document.querySelector('.list-news');

// function createMarkup(arr) {
//     const newArr = arr
//       .map(elem => {
//         return `<li class="list-news__item">
//         <article class="item-news__article" id="${elem.id}">
//               <div class="item-news__wrapper-img">
//                    <img class="item-news__img"
//                         src="${elem.img}"
//                         alt="">
//                    <p class="item-news__category">${elem.category}</p>
//                    <button type="button" class="item-news__add-to-favorite hidden-span">
//                 <span class="item-news__add-to-favorite-btn">Add to favorite
//                   <svg class="item-news__block-icon active-news-icon"
//                     width="16"
//                     height="16"
//                     viewBox="0 0 37 32"
//                     >
//                     <path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>
//                   </svg>
//                 </span>
//                               <span class="item-news__remove-to-favorite-btn">Remove from favorite
//                                   <svg class="item-news__block-icon active-news-icon"
//                                     width="16"
//                                     height="16"
//                                     viewBox="0 0 37 32"
//                                     >
//                                     <path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>
//                             </svg></span>
//                     </button>
//               </div>
//               <div class="item-news__wrapper-text">
//               <h2 class="item-news__title">
//                    ${elem.title}
//               </h2>
//               <p class="item-news__description">
//                    ${elem.description}</p>
//               </div>
//               <div class="item-news__info">
//                    <span class="item-news__info-date">
//                         ${elem.date}
//                    </span>
//                    <a target="_blank" class="item-news__info-link" href="${elem.link}">Read more</a>
//                    <p class='is-hidden'>${elem.uri}</p>
//               </div>
//         </article>
//    </li>`;
//       })
//       .join('');
//     return newArr;
//   }
//   document.querySelector('.news-loader__container ').classList.add('is-hidden');