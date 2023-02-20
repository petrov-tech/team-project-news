// import createCards from "./js/markup/index.js";
// import massPageCards from "./js/markup/index.js";

const container = querySelector(".new");
const containerCard = querySelector(".container-card");
// const toFavouriteBtn = querySelector(".item-news__add-to-favorite");
const navList = document.querySelector('.navigation_list');
// const favoriteNavLink = document.querySelector('.navigation_link')


let data = [];

localStorage.setItem("data", JSON.stringify(data));
createCardsToHtml(data);
container.addEventListener('click', addTofavorite);
 
function addTofavorite(e) {
    if (e.target.nodeName !== "BUTTON") {
    return;
    }    
    const curentBtn = e.target;   
    curentBtn.classList.replace(".item-news__add-to-favorite-btn", ".item-news__add-to-favorite-btn-remove");    
    data.push(idCards);    
};

container.addEventListener('click', removeFromFavorite);
function removeFromFavorite() {
     if (e.target.nodeName !== "BUTTON") {
    return;
    };
    const curentBtn = e.target;
    curentBtn.classList.replace(".item-news__add-to-favorite-btn-remove", ".item-news__add-to-favorite-btn" )
    data.splice(idCards.index, 1);    
};

navList.addEventListener('click', addCurentStylePage);

function addCurentStylePage() {
     if (e.target.nodeName !== "A") {
    return;
    };
    const favoriteNav = e.target;
    const currentActiveLink = document.querySelector('.navigation__link - curent')
    favoriteNav.classList.add(navigation__link - curent);
    currentActiveLink.classList.remove('.navigation__link - curent')
};
addCurentStylePage();

