/* header desktop currentPage */

const currentPage = window.location.pathname;
const homeLink = document.querySelector('.navigation_list a');
const navLink = document.querySelectorAll('.navigation_link');
navLink.forEach(link => {
  const navLinkPathname= new URL(link.href).pathname;
  if (currentPage === navLinkPathname) {
      homeLink.classList.remove('current');
      link.classList.add('current');
  } 
});

/* header mobile currentPage */
const burgerItem = document.querySelectorAll('.burger_menu-item');
const homeBurgerItem = document.querySelector('.burger_menu-list li');
const navBurgerLink = document.querySelectorAll('.burger_menu-text');
navBurgerLink.forEach(link => {
  const navLinkPathname= new URL(link.href).pathname;
    if (currentPage === navLinkPathname) {      
      homeBurgerItem.classList.remove('current');
      if (currentPage === '/index.html') {
        burgerItem[0].classList.add('current');
      }
      if (currentPage === '/favorite.html') {
        burgerItem[1].classList.add('current');
      }
      if (currentPage === '/read.html') {
        burgerItem[2].classList.add('current');
      }
    } 
});


/* BurgerMenu */
(() => {
  const refs = {
    openBtn: document.querySelector('[data-burger-open]'),
    closeBtn: document.querySelector('[data-burger-close]'),
    searchBtn: document.querySelector('.search-form-btn'),
    burgerMenu: document.querySelector('[data-burger]'),
    navigationBtns: document.querySelector('.navigation__wrap'),
    themeCtr: document.querySelector('.toogle-container'),    
    body: document.querySelector('body'),
  };

  refs.openBtn.addEventListener('click', toggleModal);
  refs.closeBtn.addEventListener('click', onCloseBtn);

  function toggleModal() {
    refs.burgerMenu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
    refs.navigationBtns.classList.toggle('is-hidden');
    refs.closeBtn.classList.remove('is-hidden');
    refs.searchBtn.classList.add('is-hidden');
    refs.themeCtr.classList.add('mobile');
  }

  function onCloseBtn() {
    refs.burgerMenu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
    refs.navigationBtns.classList.remove('is-hidden');
    refs.closeBtn.classList.toggle('is-hidden');
    refs.searchBtn.classList.remove('is-hidden');
    refs.themeCtr.classList.remove('mobile');
  }

  
})();
