document.getElementsByClassName("news")[0];const t=querySelector(".new");querySelector(".container-card"),querySelector(".item-news__add-to-favorite");let a=[];localStorage.setItem("data",JSON.stringify(a)),createCardsToHtml(a),t.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;e.target.toFavouriteBtn.classList.replace(".item-news__add-to-favorite-btn",".item-news__add-to-favorite-btn-remove"),a.push(idCards)})),t.addEventListener("click",(function(){if("BUTTON"!==e.target.nodeName)return;e.target.toFavouriteBtn.classList.replace(".item-news__add-to-favorite-btn-remove",".item-news__add-to-favorite-btn"),a.splice(idCards.index,1)})),elem.classList.add(header__page-curent);
//# sourceMappingURL=favorite.eacdbe9d.js.map
