import createCards from "./js/markup/index";

const container = querySelector(".new");
const containerCard = querySelector(".container-card");
const toFavouriteBtn = querySelector(".item-news__add-to-favorite");

let data = [];

localStorage.setItem("data", JSON.stringify(data));
createCardsToHtml(data);
container.addEventListener('click', addTofavorite);
 
function addTofavorite(e) {
    if (e.target.nodeName !== "BUTTON") {
    return;
    }    
    const curentBtn = e.target.toFavouriteBtn;   
    curentBtn.classList.replace(".item-news__add-to-favorite-btn", ".item-news__add-to-favorite-btn-remove");    
    data.push(idCards);    
};

container.addEventListener('click', removeFromFavorite);
function removeFromFavorite() {
     if (e.target.nodeName !== "BUTTON") {
    return;
    };
    const curentBtn = e.target.toFavouriteBtn;
    curentBtn.classList.replace(".item-news__add-to-favorite-btn-remove", ".item-news__add-to-favorite-btn" )
    data.splice(idCards.index, 1);    
};

function addCurentStylePage() {
    elem.classList.add(header__page-curent)
};
addCurentStylePage()

