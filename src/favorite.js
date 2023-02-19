import createCards from "./js/markup/index";

const addToFavouriteBtn = querySelector(".item-news__add-to-favorite");
const containerCard = querySelector(".container-card");
let toFavorite = [];
if (toFavorite = true) {
    toFavorite.push[idCards];
};

localStorage.setItem("toFavorite", JSON.stringify(toFavorite));
createCardsToHtml(data);
addToFavouriteBtn.addEventListener('click', addTofavorite);

function addTofavorite() {
    toFavorite = true;
    addToFavouriteBtn.textContent = "Remove from favorite";
    addToFavouriteBtn.svg.use.href = "./images/symbol-defs.svg#icon-removefavorite";  
    insertCard();
};
function insertCard(createCards) {     
    containerCard.insertAdjacentHTML("beforeend", createCards);     
};

// addToFavouriteBtn.addEventListener('click', changeBtn);
// function changeBtn() {
//     addToFavouriteBtn.textContent = "Remove from favorite";
//     addToFavouriteBtn.svg.use.href = "./images/symbol-defs.svg#icon-removefavorite";  
// };

addToFavouriteBtn.addEventListener('click', removeFromFromavorite);

function removeFromFromavorite() {
    if (toFavorite = false) {
    toFavorite.splice(idCards.index, 1);
    };
};

function addCurentStylePage() {
    elem.classList.add(header__page-curent)
};
addCurentStylePage()

