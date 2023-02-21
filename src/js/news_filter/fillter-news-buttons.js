import { getCategoryList } from '../api/index';
import { renderByCategory } from './render-by-category';

const refs = {
  categoryContainerEl: document.querySelector('.filter-category__container'),
  otherList: document.querySelector('.filter-category__others-container'),
  othersBtEl: document.querySelector('.filter-category__others-button > span'),
  listButtons: document.querySelector('.filter-category__list-bt'),
  loader: document.querySelector('.news-loader__container.container'),
  pagination: document.querySelector('.pagination_search'),
  listNews: document.querySelector('ul.list-news'),
};

refs.listButtons.addEventListener('click', () => {
  document
    .querySelector('.page-container-cat')
    .classList.add('pagination-cat-hidden');
});

let selectedCategory = '';
let selectedCategoryEl;

let currentNumberCategories = 0;
let outsideCategories = 0;
let windowWidth = 0;
let wetherPosition = 0;

getCategoryRender();

refs.otherList.addEventListener('click', onClickOther);

async function getCategoryRender() {
  //  ширина дисплея
  if (window.innerWidth < 768) {
    windowWidth = 4;
    wetherPosition = -1;
  }
  if (window.innerWidth > 768 && window.innerWidth < 1280) {
    windowWidth = 7;
    wetherPosition = 0;
  }
  if (window.innerWidth >= 1280) {
    windowWidth = 8;
    wetherPosition = 1;
  }

  // mobile
  if (window.innerWidth < 768) {
    currentNumberCategories = 13;
    refs.othersBtEl.textContent = 'Categories';

    getCategoryList().then(categoryList => {
      renderMarkupCategory(
        categoryList,
        currentNumberCategories,
        outsideCategories
      );
      refs.listButtons.addEventListener('click', evt => {
        onClickCategory(evt);

        refs.othersBtEl.textContent = 'Categories';
        refs.pagination.classList.add('.pagination-search-hidden');
      });
      document
        .querySelector('.filter-category__list')
        .addEventListener('click', evt => {
          onClickCategory(evt);
          if (selectedCategory !== undefined) {
            changeButtonName();
          }
        });
      refs.listNews.addEventListener('click', onClickListNews);
    });
  }
  // tablet
  if (window.innerWidth >= 768 && window.innerWidth < 1280) {
    currentNumberCategories = 17;
    outsideCategories = 4;
    refs.othersBtEl.textContent = 'Others';

    getCategoryList().then(categoryList => {
      renderMarkupCategory(
        categoryList,
        currentNumberCategories,
        outsideCategories
      );
      refs.listButtons.addEventListener('click', evt => {
        onClickCategory(evt);
        refs.othersBtEl.textContent = 'Others';
      });
      document
        .querySelector('.filter-category__list')
        .addEventListener('click', evt => {
          onClickCategory(evt);
          if (selectedCategory !== undefined) {
            changeButtonName();
          }
        });
      refs.listNews.addEventListener('click', onClickListNews);
    });
  }
  // desktop
  if (window.innerWidth >= 1280) {
    currentNumberCategories = 19;
    outsideCategories = 6;
    refs.othersBtEl.textContent = 'Others';

    getCategoryList().then(categoryList => {
      renderMarkupCategory(
        categoryList,
        currentNumberCategories,
        outsideCategories
      );
      refs.listButtons.addEventListener('click', evt => {
        onClickCategory(evt);

        refs.othersBtEl.textContent = 'Others';
      });

      document
        .querySelector('.filter-category__list')
        .addEventListener('click', evt => {
          onClickCategory(evt);

          if (selectedCategory !== undefined) {
            changeButtonName();
          }
        });
      refs.listNews.addEventListener('click', onClickListNews);
    });
  }
}
function addActiveClass(evt) {
  if (selectedCategoryEl) {
    selectedCategoryEl.classList.remove('isActive-outsideBt');
  }
  selectedCategoryEl = evt.target;
  evt.target.classList.add('isActive-outsideBt');
}
function onClickCategory(evt) {
  addActiveClass(evt);
  if (evt.target.textContent.length > 20) {
    return;
  }
  selectedCategory = evt.target.textContent;
  refs.loader.classList.remove('is-hidden');
  renderByCategory(selectedCategory.toLowerCase());
  refs.pagination.classList.add('pagination-search-hidden');
  document.querySelector('.page-container').classList.add('pagination-hidden');
  document
    .querySelector('.page-container-cat')
    .classList.remove('pagination-cat-hidden');
  

}
function renderMarkupCategory(
  categoryList,
  currentNumberCategories,
  outsideCategories
) {
  const catigorysArray = categoryList.slice(0, currentNumberCategories);
  const catigorysOtherArray = catigorysArray.slice(outsideCategories);
  const catigorysOutsideArray = catigorysArray.slice(0, outsideCategories);

  const listEl = document.createElement('ul');
  listEl.classList.add('filter-category__list');
  
    
  catigorysOutsideArray.map(({ display_name }, index) =>
    changeCategoryName(display_name, index)
  );
  catigorysOtherArray.map(({ display_name }) =>
    createMarkupOtherCategory(display_name, listEl)
  );
  refs.categoryContainerEl.append(listEl);
}

function changeCategoryName(categoryName, index) {
  const itemToChange = document.querySelector(
    `.filter-category__item-bt:nth-child(${index + 1})`
  );
  itemToChange.textContent = categoryName;
}

function createMarkupOtherCategory(category, listEl) {
  const itemEl = document.createElement('li');
  itemEl.classList.add('filter-category__item');

  const buttonEl = document.createElement('button');
  buttonEl.classList.add('filter-category__button');
  buttonEl.textContent = category;
  itemEl.append(buttonEl);

  listEl.append(itemEl);

  }

function onClickOther(evt) {
  evt.currentTarget.classList.toggle('is-open');
}

function changeButtonName() {
  refs.othersBtEl.textContent = selectedCategory;
}
function onClickListNews(evt) {
    const isCategory = evt.target.classList.contains('item-news__category');
    if (!isCategory) {
        return;
    }
    selectedCategory = evt.target.textContent;
    refs.loader.classList.remove('is-hidden');
    renderByCategory(selectedCategory.toLowerCase());
    document
        .querySelector('.page-container-cat')
        .classList.remove('pagination-cat-hidden');
}