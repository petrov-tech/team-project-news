function t(t,e,n,a){Object.defineProperty(t,e,{get:n,set:a,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=e.parcelRequired7c6;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){a[t]=e},e.parcelRequired7c6=r),r.register("6eyJa",(function(e,n){t(e.exports,"searchBloom",(function(){return _})),t(e.exports,"createCardtToNews",(function(){return h})),t(e.exports,"createCardsToHtml",(function(){return w})),t(e.exports,"addToMassCards",(function(){return b}));var a=r("1vTbE"),s=r("aEubW");const o=document.getElementsByClassName("calendar__button-arrow")[0].children[0].href.baseVal,i=document.getElementsByClassName("news")[0],c=document.getElementsByClassName("pagination-buttons")[0],l=[];let d=4,u=1,p="";const f="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";let g=[],m=2,_=!1;function w(t=l,e=1){_=!1,h(t,e)}function h(t=l,e=1){v(),b(t),m=e;const n=e*d-d;u=l.length/d,g=l.slice(n,n+d),function(t){const e=(n=t,"<ul class='list-news'>"+n.map(((t,e)=>{if(0===e)return"mobile"===p?$(t):y(t);if(1===e){if("tablet"===p)return $(t)}else if(2===e&&"desktop"===p)return $(t);return y(t)})).join("")+"</ul>");var n;i.innerHTML="",i.insertAdjacentHTML("beforeend",e)}(g),0===m||_?0!==m&&_&&(c.innerHTML=(0,a.generatePaginationButtons)(m,u)):c.innerHTML=(0,a.generatePaginationButtons)(m,u)}function b(t){t.map((t=>{if(t.idCards)return l.push(t);const e=function({abstract:t,headline:e,web_url:n,multimedia:a,pub_date:r,title:s,created_date:o,url:i,section_name:c,section:l,uri:d,media:u,published_date:p,id:g}){const m=!1,_=!1;let w="",h="",b="",v="",y="",$="";if(a)e?(h=e.main,w="https://static01.nyt.com/"+a[0].url,b=r,v=n,y=c,$=d):(h=s,w=a[a.length-2].url,b=o,v=i,y=l,$=d);else if(h=s,b=p,v=i,y=l,$=g,0===u.length)w=f;else{const t=u[0]["media-metadata"];w=t[Object.keys(t)[Object.keys(t).length-1]].url}""===w&&(w=f);b=function(t){const e=new Date(t),n=e.getUTCDate().toString().padStart(2,"0"),a=(e.getUTCMonth()+1).toString().padStart(2,"0"),r=e.getFullYear().toString().slice(2,4);return`${n}/${a}/${r} `}(b);const T=(x=t,x.slice(0,115)+"...");var x;return{idCards:$,sectionFormt:y,titleFormt:h,paragraf:T,dataFormt:b,urlFormt:v,imgUrl:w,toRead:m,toFavorite:_}}(t);l.push(e)})).join("")}function v(){const t=document.body.clientWidth;t>1280?(p="desktop",d=8):t>760?(p="tablet",d=7):(p="mobile",d=4)}function y({urlFormt:t,sectionFormt:e,imgUrl:n,titleFormt:a,paragraf:r,dataFormt:s,idCards:i,toRead:c=!1,toFavorite:l=!1}){return`\n    <li>\n    <article class="item-news__article ${c=c?"cardsRead":""}" data-id="${i} ">    \n     <div class="item-news__wrapper-img">\n        <img class="item-news__img"\n                          src="${n}"\n                          alt="">\n                      <p class="item-news__category">${e}</p>        \n                      <button type="button" class="item-news__add-to-favorite ${l=l?"cardsFavorite":""} " data-id="${i}">\n                      <span class="item-news__add-to-favorite-btn">Add to favorite</span>\n                      <span class="item-news__add-to-favorite-btn-remove">Remove from favorite</span>\n\t\t\t\t\t\t\t\t<svg class="item-news__block-icon active-news-icon"\n\t\t\t\t\t\t\t\twidth="16"\n\t\t\t\t\t\t\t\theight="16"\n\t\t\t\t\t\t\t\tviewBox="0 0 16 16"\n\t\t\t\t\t\t\t\t><use href=" ${d=o,d.includes("#")?d.substring(0,d.indexOf("#")):d}#icon-addfavorite"></use>\n\t\t\t\t\t\t\t\t</svg></span>\n                      </button>                      \n                  </div>\n                  <div class="item-news__wrapper-text">\n                  <h2 class="item-news__title">\n                      ${a}\n                  </h2>\n                  <p class="item-news__description">\n                      ${r}</p>\n                  </div>\n                  <div class="item-news__info">\n                      <span class="item-news__info-date" >${s}</span>\n                      <a target="_blank" class="item-news__info-link" data-id="${i}" href="${t}" target="_blank" rel="noreferrer noopener">Read more</a></div>                    \n    </article>\n    </li>\n    `;var d}function $(t){return'<li><div class="weather"><div class="weather__info"><span class="weather__deg"></span><div class="weather__geo"><span class="weather__value"></span>\n            <p class="weather__location"><span class="weather__city"></span></p></div></div><img class="weather__img" /><div class="weather__date">\n        <p class="weather__day"></p><p class="weather__year"></p></div><a href="https://sinoptik.ua/" class="weather__link" target="_blank" rel="noreferrer noopener">weather for week</a></div></li>'+y(t)}window.addEventListener("resize",(function(){const t=p;v(),t!==p&&h()})),(0,s.getPopularArticle)().then((t=>w(t)))})),r.register("1vTbE",(function(e,n){t(e.exports,"generatePaginationButtons",(function(){return c})),t(e.exports,"newSearchToNextPage",(function(){return l}));var a=r("6eyJa"),s=r("aEubW");document.getElementsByClassName("pagination-buttons")[0].addEventListener("click",(function(t){if("BUTTON"!==t.target.nodeName)return;o-t.target.dataset.page<=2&&a.searchBloom&&(console.log("suda"),(0,s.getSearchArticle)("",i).then((t=>{(0,a.addToMassCards)(t)})),i+=1);(0,a.createCardtToNews)([],+t.target.dataset.page),function(){const t=500,e=-window.scrollY/(t/15),n=setInterval((()=>{0!=window.scrollY?window.scrollBy(0,e):clearInterval(n)}),15)}()}));let o=3,i=2;function c(t,e){o=Math.ceil(e);const n=Math.max(t-Math.floor(2),1),a=Math.min(n+4,o);let r="";e>1&&-1!=-t&&(r+=`<button class="pagination-button pagination-button-scrol" data-page="${t-1}">&laquo; Prew</button>`);for(let e=n;e<=a;e+=1)r+=`<button class="pagination-button ${-e==-t?"active":" "}" data-page="${e}">${e}</button>`;return e>1&&-o!=-t&&(r+=`<button class="pagination-button pagination-button-scrol" data-page="${-1*(-t-1)}">Next &raquo;</button>`),r}function l(){i=2}})),r.register("aEubW",(function(e,n){t(e.exports,"getPopularArticle",(function(){return s})),t(e.exports,"getSearchArticle",(function(){return c}));const a="api-key=ZMLoDGQ1iPfdXBvpyv6UQCmTcNMQFJ7A",r=`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?${a}`;async function s(){const t=await fetch(r),e=await t.json();let{results:n}=e;return console.log(n),n}let o,i="";async function c(t=i,e){let n="";""===t?t=i:i=t;try{let t=JSON.parse(localStorage.getItem("date")).replace("/","").replace("/","");n=`&begin_date=${t}&end_date=${t}`}catch(t){}const r=await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${t}&${a}&page=${e}${n}`),s=await r.json();let{response:c,errors:l}=s;if(l)return void alert(JSON.parse(l));o=c.meta.hits>1e3?1e3:c.meta.hits;let{docs:d}=c;return console.log(d),d}}));
//# sourceMappingURL=index.48401a5a.js.map
