const currentPage = window.location.pathname;
console.log(currentPage);
const navLink = document.querySelectorAll('.navigation_link').forEach(link => {
  if (link.href.includes(`${currentPage}`)) {
    link.classList.add('current');
    console.log(link);
  }
});

(() => {
  const refs = {
    openBtn: document.querySelector('[data-burger-open]'),
    closeBtn: document.querySelector('[data-burger-close]'),
    burgerMenu: document.querySelector('[data-burger]'),
    navigationBtns: document.querySelector('.navigation__wrap'),
    body: document.querySelector('body'),
  };

  refs.openBtn.addEventListener('click', toggleModal);
  refs.closeBtn.addEventListener('click', onCloseBtn);

  function toggleModal() {
    refs.burgerMenu.classList.toggle('menu-is-hidden');
    refs.body.classList.toggle('no-scroll');
    refs.navigationBtns.classList.toggle('menu-is-hidden');
    refs.closeBtn.classList.remove('menu-is-hidden');
  }

  function onCloseBtn() {
    refs.burgerMenu.classList.toggle('menu-is-hidden');
    refs.body.classList.toggle('no-scroll');
    refs.navigationBtns.classList.remove('menu-is-hidden');
    refs.closeBtn.classList.toggle('menu-is-hidden');
  }
})();
