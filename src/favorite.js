import createCards from "./js/markup/index";

const addToFavouriteBtn = querySelector(".item-news__add-to-favorite");
const containerCard = querySelector(".container-card");
let toFavorite = [];
if (toFavorite = true) {

}

localStorage.setItem("toFavorite", JSON.stringify(createCards));

addToFavouriteBtn.addEventListener('click', addToLocalStorage);

function addToLocalStorage(createCards) {
    toFavorite = true;
    
    insertCard();
};
function insertCard(createCards) {     
    containerCard.insertAdjacentHTML("beforeend", createCards);     
};

addToFavouriteBtn.addEventListener('click', changeBtn);
function changeBtn() {
    addToFavouriteBtn.textContent = "Remove from favorite";
    addToFavouriteBtn.svg.use.href = "./images/symbol-defs.svg#icon-removefavorite";  
};

addToFavouriteBtn.addEventListener('click', removeFromLocalStorage);

function removeFromLocalStorage(createCards) {
    localStorage.removeItem("createCards");
};

function addCurentStylePage() {
    elem.classList.add(header__page-curent)
};
addCurentStylePage()

