const t=querySelector(".new");let a=[];function n(){if("A"!==e.target.nodeName)return;const t=e.target,a=document.querySelector(".navigation__link-curent");a&&a.classList.remove(".navigation__link-curent"),t.classList.add(navigation__link-curent)}localStorage.setItem("data",JSON.stringify(a)),createCardsToHtml(a),t.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;e.target.classList.replace(".item-news__add-to-favorite-btn",".item-news__add-to-favorite-btn-remove");const t=e.target.dataset.id,n=massPageCards.map((e=>e.idCards));(n=t)&&a.push(n)})),t.addEventListener("click",(function(){if("BUTTON"!==e.target.nodeName)return;e.target.classList.replace(".item-news__add-to-favorite-btn-remove",".item-news__add-to-favorite-btn");const t=e.target.dataset.id,n=a.map((e=>e.idCards));(n=t)&&a.splice(t,1)})),navList.addEventListener("click",n),n();
//# sourceMappingURL=favorite.a7d704f1.js.map
