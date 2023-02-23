import { getSearchArticle, sumPage } from '../api';
import {
  generatePaginationButtons,
  scrollToTop,
  newSearchToNextPage,
} from '../pagination';
import { deleteCardsForNewSearch, searchCards } from '../markup';

const refs = {
  searchForm: document.querySelector('#search-form'),
  paginationCtr: document.querySelector('.pagination-buttons'),
  errorCtr: document.querySelector('.not-found'),
};

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
  const data = await getSearchArticle(search_query, page);

  if (data.length === 0) {
    clearNewsAndPagination();
    refs.searchForm.reset();
  } else if (search_query === '') {
    clearNewsAndPagination();
  } else {
    valuePage.totalPages = sumPage / 10;
    deleteCardsForNewSearch(data);
    searchCards(data, 1);
    generatePaginationButtons();
    scrollToTop();
    newSearchToNextPage();
    refs.searchForm.reset();
    refs.paginationCtr.classList.remove('is-hidden');
    refs.errorCtr.classList.add('is-hidden');
  }
}

function clearNewsAndPagination() {
  deleteCardsForNewSearch();
  refs.paginationCtr.classList.add('is-hidden');
  refs.errorCtr.classList.remove('is-hidden');
}
