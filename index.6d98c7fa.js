function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=e.parcelRequired7c6;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},e.parcelRequired7c6=a),a.register("6eyJa",(function(e,n){t(e.exports,"searchBloom",(function(){return w})),t(e.exports,"createCardtToNews",(function(){return b})),t(e.exports,"createCardsToHtml",(function(){return p})),t(e.exports,"addToMassCards",(function(){return y}));var r=a("1vTbE"),o=a("aEubW"),i=a("jMjR1");const u=document.getElementsByClassName("calendar__button-arrow")[0].children[0].href.baseVal,s=document.getElementsByClassName("news")[0],l=document.getElementsByClassName("pagination-buttons")[0],d=[];let c=4,f=1,h="";const m="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";let g=[],v=2,w=!1;function p(t=d,e=1){w=!1,b(t,e)}function b(t=d,e=1){y(t);x(e);!function(t){const e=(n=t,"<ul class='list-news'>"+n.map(((t,e)=>{if(location.pathname.match(/index.html/)){if(0===e)return"mobile"===h?T(t):C(t);if(1===e){if("tablet"===h)return T(t)}else if(2===e&&"desktop"===h)return T(t)}return C(t)})).join("")+"</ul>");var n;s.innerHTML="",s.insertAdjacentHTML("beforeend",e),(0,i.getWeatherRefs)()}(g),0===v||w?0!==v&&w&&(l.innerHTML=(0,r.generatePaginationButtons)(v,f)):l.innerHTML=(0,r.generatePaginationButtons)(v,f)}function y(t){t.map((t=>{if(t.idCards)return d.push(t);const e=function({abstract:t,headline:e,web_url:n,multimedia:r,pub_date:a,title:o,created_date:i,url:u,section_name:s,section:l,uri:d,media:c,published_date:f,id:h}){const g=!1,v=!1;let w="",p="",b="",y="",x="",C="";if(r)e?(p=e.main,w="https://static01.nyt.com/"+r[0].url,b=a,y=n,x=s,C=d):(p=o,w=r[r.length-2].url,b=i,y=u,x=l,C=d);else if(p=o,b=f,y=u,x=l,C=h,0===c.length)w=m;else{const t=c[0]["media-metadata"];w=t[Object.keys(t)[Object.keys(t).length-1]].url}""===w&&(w=m);b=function(t){const e=new Date(t),n=e.getUTCDate().toString().padStart(2,"0"),r=(e.getUTCMonth()+1).toString().padStart(2,"0"),a=e.getFullYear().toString().slice(2,4);return`${n}/${r}/${a} `}(b);const T=(M=t,M.slice(0,115)+"...");var M;return{idCards:C,sectionFormt:x,titleFormt:p,paragraf:T,dataFormt:b,urlFormt:y,imgUrl:w,toRead:g,toFavorite:v}}(t);d.push(e)})).join("")}function x(t){const e=document.body.clientWidth;e>1280?(h="desktop",c=8):e>760?(h="tablet",c=7):(h="mobile",c=4);location.pathname.match(/favorite.html/)&&(c+=1),v=t;const n=t*c-c;return f=d.length/c,g=d.slice(n,n+c),n}function C({urlFormt:t,sectionFormt:e,imgUrl:n,titleFormt:r,paragraf:a,dataFormt:o,idCards:i,toRead:s=!1,toFavorite:l=!1}){return`\n    <li>\n    <article class="item-news__article ${s=s?"cardsRead":""}" data-id="${i} ">    \n     <div class="item-news__wrapper-img">\n        <img class="item-news__img"\n                          src="${n}"\n                          alt="">\n                      <p class="item-news__category">${e}</p>        \n                      <button type="button" class="item-news__add-to-favorite ${l=l?"cardsFavorite":""} " data-id="${i}">\n                      <span class="item-news__add-to-favorite-btn">Add to favorite</span>\n                      <span class="item-news__add-to-favorite-btn-remove">Remove from favorite</span>\n\t\t\t\t\t\t\t\t<svg class="item-news__block-icon active-news-icon"\n\t\t\t\t\t\t\t\twidth="16"\n\t\t\t\t\t\t\t\theight="16"\n\t\t\t\t\t\t\t\tviewBox="0 0 16 16"\n\t\t\t\t\t\t\t\t><use href=" ${d=u,d.includes("#")?d.substring(0,d.indexOf("#")):d}#icon-addfavorite"></use>\n\t\t\t\t\t\t\t\t</svg></span>\n                      </button>                      \n                  </div>\n                  <div class="item-news__wrapper-text">\n                  <h2 class="item-news__title">\n                      ${r}\n                  </h2>\n                  <p class="item-news__description">\n                      ${a}</p>\n                  </div>\n                  <div class="item-news__info">\n                      <span class="item-news__info-date" >${o}</span>\n                      <a target="_blank" class="item-news__info-link" data-id="${i}" href="${t}" target="_blank" rel="noreferrer noopener">Read more</a></div>                    \n    </article>\n    </li>\n    `;var d}function T(t){return'<li><div class="weather"><div class="weather__info"><span class="weather__deg"></span><div class="weather__geo"><span class="weather__value"></span>\n            <p class="weather__location"><span class="weather__city"></span></p></div></div><img class="weather__img" /><div class="weather__date">\n        <p class="weather__day"></p><p class="weather__year"></p></div><a href="https://sinoptik.ua/" class="weather__link" target="_blank" rel="noreferrer noopener">weather for week</a></div></li>'+C(t)}window.addEventListener("resize",(function(){const t=h;x(),t!==h&&b([])})),(0,o.getPopularArticle)().then((t=>p(t)))})),a.register("1vTbE",(function(e,n){t(e.exports,"generatePaginationButtons",(function(){return s})),t(e.exports,"newSearchToNextPage",(function(){return l}));var r=a("6eyJa"),o=a("aEubW");document.getElementsByClassName("pagination-buttons")[0].addEventListener("click",(function(t){if("BUTTON"!==t.target.nodeName)return;i-t.target.dataset.page<=2&&r.searchBloom&&(console.log("suda"),(0,o.getSearchArticle)("",u).then((t=>{(0,r.addToMassCards)(t)})),u+=1);(0,r.createCardtToNews)([],+t.target.dataset.page),function(){const t=500,e=-window.scrollY/(t/15),n=setInterval((()=>{0!=window.scrollY?window.scrollBy(0,e):clearInterval(n)}),15)}()}));let i=3,u=2;function s(t,e){i=Math.ceil(e);const n=Math.max(t-Math.floor(2),1),r=Math.min(n+4,i);let a="";e>1&&-1!=-t&&(a+=`<button class="pagination-button pagination-button-scrol" data-page="${t-1}">&laquo; Prew</button>`);for(let e=n;e<=r;e+=1)a+=`<button class="pagination-button ${-e==-t?"active":" "}" data-page="${e}">${e}</button>`;return e>1&&-i!=-t&&(a+=`<button class="pagination-button pagination-button-scrol" data-page="${-1*(-t-1)}">Next &raquo;</button>`),a}function l(){u=2}})),a.register("aEubW",(function(e,n){t(e.exports,"getPopularArticle",(function(){return o})),t(e.exports,"getCategoryList",(function(){return i})),t(e.exports,"getSearchArticle",(function(){return l}));const r="api-key=ZMLoDGQ1iPfdXBvpyv6UQCmTcNMQFJ7A",a=`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?${r}`;async function o(){const t=await fetch(a),e=await t.json();let{results:n}=e;return console.log(n),n}async function i(){const t=await fetch(`https://api.nytimes.com/svc//news/v3/content/section-list.json?${r}`),e=await t.json();let{results:n}=e;return console.log(n),n}let u,s="";async function l(t=s,e){let n="";""===t?t=s:s=t;try{let t=JSON.parse(localStorage.getItem("date")).replace("/","").replace("/","");n=`&begin_date=${t}&end_date=${t}`}catch(t){}const a=await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${t}&${r}&page=${e}${n}`),o=await a.json();let{response:i,errors:l}=o;if(l)return void alert(JSON.parse(l));u=i.meta.hits>1e3?1e3:i.meta.hits;let{docs:d}=i;return console.log(d),d}})),a.register("jMjR1",(function(e,n){t(e.exports,"getWeatherRefs",(function(){return u}));var r=a("k0Sb0");const o="https://api.openweathermap.org/data/2.5/weather?";let i={};async function u(){return i={degs:document.querySelector(".weather__deg"),weather:document.querySelector(".weather__value"),city:document.querySelector(".weather__city"),day:document.querySelector(".weather__day"),year:document.querySelector(".weather__year"),img:document.querySelector(".weather__img")},async function(){const t=await async function(){const t=`${o}q=Kyiv&units=metric&appid=7d2404408b4504531781bb097acfb8ef`;try{const e=await fetch(t);return await e.json()}catch(t){}}(),{feels_like:e}=t.main,n=t.weather[0],{icon:a}=t.weather[0];i.degs.textContent=`${Math.floor(e)}°`,i.weather.textContent=n.main,i.city.textContent=t.name,i.day.textContent=(0,r.default)(new Date,"eee"),i.year.textContent=(0,r.default)(new Date,"dd LLL y"),i.img.setAttribute("src",`https://openweathermap.org/img/wn/${a}@4x.png`)}(),async function(){navigator.geolocation&&await navigator.geolocation.getCurrentPosition((({coords:{latitude:t,longitude:e}})=>{(async function(t,e){const n=`${o}lat=${t}&lon=${e}&appid=7d2404408b4504531781bb097acfb8ef&units=metric`;try{const t=await fetch(n);return await t.json()}catch(t){}})(t,e).then((t=>{const{temp:e}=t.main,n=t.weather[0],{icon:a}=t.weather[0];i.degs.textContent=`${Math.floor(e)}°`,i.weather.textContent=n.main,i.city.textContent=t.name,i.day.textContent=(0,r.default)(new Date,"eee"),i.year.textContent=(0,r.default)(new Date,"dd LLL y"),i.img.setAttribute("src",`https://openweathermap.org/img/wn/${a}@4x.png`)}))}))}(),i}window.addEventListener("load",(function(){setTimeout(u,1e3)})),window.addEventListener("resize",(function(){setTimeout(u,1e3)}))})),a.register("k0Sb0",(function(e,n){t(e.exports,"default",(function(){return y}));var r=a("7pQzR"),o=a("cfoI5"),i=a("le96L"),u=a("3rsJw"),s=a("dmQbx"),l=a("8zxzx"),d=a("xRN1E"),c=a("8d3vD"),f=a("6RzIO"),h=a("dCCOX"),m=a("fhQJu"),g=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,v=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,w=/^'([^]*?)'?$/,p=/''/g,b=/[a-zA-Z]/;function y(t,e,n){var a,w,p,y,C,T,M,D,S,k,_,O,P,U,Y,W,j,E;(0,f.default)(2,arguments);var N=String(e),z=(0,h.getDefaultOptions)(),L=null!==(a=null!==(w=null==n?void 0:n.locale)&&void 0!==w?w:z.locale)&&void 0!==a?a:m.default,R=(0,c.default)(null!==(p=null!==(y=null!==(C=null!==(T=null==n?void 0:n.firstWeekContainsDate)&&void 0!==T?T:null==n||null===(M=n.locale)||void 0===M||null===(D=M.options)||void 0===D?void 0:D.firstWeekContainsDate)&&void 0!==C?C:z.firstWeekContainsDate)&&void 0!==y?y:null===(S=z.locale)||void 0===S||null===(k=S.options)||void 0===k?void 0:k.firstWeekContainsDate)&&void 0!==p?p:1);if(!(R>=1&&R<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var q=(0,c.default)(null!==(_=null!==(O=null!==(P=null!==(U=null==n?void 0:n.weekStartsOn)&&void 0!==U?U:null==n||null===(Y=n.locale)||void 0===Y||null===(W=Y.options)||void 0===W?void 0:W.weekStartsOn)&&void 0!==P?P:z.weekStartsOn)&&void 0!==O?O:null===(j=z.locale)||void 0===j||null===(E=j.options)||void 0===E?void 0:E.weekStartsOn)&&void 0!==_?_:0);if(!(q>=0&&q<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!L.localize)throw new RangeError("locale must contain localize property");if(!L.formatLong)throw new RangeError("locale must contain formatLong property");var F=(0,i.default)(t);if(!(0,r.default)(F))throw new RangeError("Invalid time value");var $=(0,l.default)(F),H=(0,o.default)(F,$),I={firstWeekContainsDate:R,weekStartsOn:q,locale:L,_originalDate:F},A=N.match(v).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,s.default[e])(t,L.formatLong):t})).join("").match(g).map((function(r){if("''"===r)return"'";var a=r[0];if("'"===a)return x(r);var o=u.default[a];if(o)return null!=n&&n.useAdditionalWeekYearTokens||!(0,d.isProtectedWeekYearToken)(r)||(0,d.throwProtectedError)(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!(0,d.isProtectedDayOfYearToken)(r)||(0,d.throwProtectedError)(r,e,String(t)),o(H,r,L.localize,I);if(a.match(b))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return r})).join("");return A}function x(t){var e=t.match(w);return e?e[1].replace(p,"'"):t}})),a.register("7pQzR",(function(e,n){t(e.exports,"default",(function(){return u}));var r=a("cmc1k"),o=a("le96L"),i=a("6RzIO");function u(t){if((0,i.default)(1,arguments),!(0,r.default)(t)&&"number"!=typeof t)return!1;var e=(0,o.default)(t);return!isNaN(Number(e))}})),a.register("cmc1k",(function(e,n){t(e.exports,"default",(function(){return i}));var r=a("6RzIO");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){return(0,r.default)(1,arguments),t instanceof Date||"object"===o(t)&&"[object Date]"===Object.prototype.toString.call(t)}})),a.register("6RzIO",(function(e,n){function r(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}t(e.exports,"default",(function(){return r}))})),a.register("le96L",(function(e,n){t(e.exports,"default",(function(){return i}));var r=a("6RzIO");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){(0,r.default)(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===o(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}})),a.register("cfoI5",(function(e,n){t(e.exports,"default",(function(){return u}));var r=a("egwKS"),o=a("6RzIO"),i=a("8d3vD");function u(t,e){(0,o.default)(2,arguments);var n=(0,i.default)(e);return(0,r.default)(t,-n)}})),a.register("egwKS",(function(e,n){t(e.exports,"default",(function(){return u}));var r=a("8d3vD"),o=a("le96L"),i=a("6RzIO");function u(t,e){(0,i.default)(2,arguments);var n=(0,o.default)(t).getTime(),a=(0,r.default)(e);return new Date(n+a)}})),a.register("8d3vD",(function(e,n){function r(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}t(e.exports,"default",(function(){return r}))})),a.register("3rsJw",(function(e,n){t(e.exports,"default",(function(){return y}));var r=a("iUfDY"),o=a("9rMx7"),i=a("iymSi"),u=a("bCYgf"),s=a("e0HMe"),l=a("jOrUI"),d=a("bDYa5"),c="midnight",f="noon",h="morning",m="afternoon",g="evening",v="night";function w(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+(0,l.default)(o,2)}function p(t,e){return t%60==0?(t>0?"-":"+")+(0,l.default)(Math.abs(t)/60,2):b(t,e)}function b(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+(0,l.default)(Math.floor(a/60),2)+n+(0,l.default)(a%60,2)}var y={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return d.default.y(t,e)},Y:function(t,e,n,r){var a=(0,s.default)(t,r),o=a>0?a:1-a;if("YY"===e){var i=o%100;return(0,l.default)(i,2)}return"Yo"===e?n.ordinalNumber(o,{unit:"year"}):(0,l.default)(o,e.length)},R:function(t,e){var n=(0,i.default)(t);return(0,l.default)(n,e.length)},u:function(t,e){var n=t.getUTCFullYear();return(0,l.default)(n,e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return(0,l.default)(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return(0,l.default)(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return d.default.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return(0,l.default)(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=(0,u.default)(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):(0,l.default)(a,e.length)},I:function(t,e,n){var r=(0,o.default)(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):(0,l.default)(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):d.default.d(t,e)},D:function(t,e,n){var a=(0,r.default)(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):(0,l.default)(a,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return(0,l.default)(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return(0,l.default)(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return(0,l.default)(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?f:0===a?c:a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?g:a>=12?m:a>=4?h:v,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return d.default.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):d.default.H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):(0,l.default)(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):(0,l.default)(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):d.default.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):d.default.s(t,e)},S:function(t,e){return d.default.S(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return p(a);case"XXXX":case"XX":return b(a);default:return b(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return p(a);case"xxxx":case"xx":return b(a);default:return b(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+w(a,":");default:return"GMT"+b(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+w(a,":");default:return"GMT"+b(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t,o=Math.floor(a.getTime()/1e3);return(0,l.default)(o,e.length)},T:function(t,e,n,r){var a=(r._originalDate||t).getTime();return(0,l.default)(a,e.length)}}})),a.register("iUfDY",(function(e,n){t(e.exports,"default",(function(){return u}));var r=a("le96L"),o=a("6RzIO"),i=864e5;function u(t){(0,o.default)(1,arguments);var e=(0,r.default)(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var a=e.getTime(),u=n-a;return Math.floor(u/i)+1}})),a.register("9rMx7",(function(e,n){t(e.exports,"default",(function(){return l}));var r=a("le96L"),o=a("byvVj"),i=a("60OYk"),u=a("6RzIO"),s=6048e5;function l(t){(0,u.default)(1,arguments);var e=(0,r.default)(t),n=(0,o.default)(e).getTime()-(0,i.default)(e).getTime();return Math.round(n/s)+1}})),a.register("byvVj",(function(e,n){t(e.exports,"default",(function(){return i}));var r=a("le96L"),o=a("6RzIO");function i(t){(0,o.default)(1,arguments);var e=1,n=(0,r.default)(t),a=n.getUTCDay(),i=(a<e?7:0)+a-e;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}})),a.register("60OYk",(function(e,n){t(e.exports,"default",(function(){return u}));var r=a("iymSi"),o=a("byvVj"),i=a("6RzIO");function u(t){(0,i.default)(1,arguments);var e=(0,r.default)(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var a=(0,o.default)(n);return a}})),a.register("iymSi",(function(e,n){t(e.exports,"default",(function(){return u}));var r=a("le96L"),o=a("6RzIO"),i=a("byvVj");function u(t){(0,o.default)(1,arguments);var e=(0,r.default)(t),n=e.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var u=(0,i.default)(a),s=new Date(0);s.setUTCFullYear(n,0,4),s.setUTCHours(0,0,0,0);var l=(0,i.default)(s);return e.getTime()>=u.getTime()?n+1:e.getTime()>=l.getTime()?n:n-1}})),a.register("bCYgf",(function(e,n){t(e.exports,"default",(function(){return l}));var r=a("le96L"),o=a("j1YKz"),i=a("2yvSN"),u=a("6RzIO"),s=6048e5;function l(t,e){(0,u.default)(1,arguments);var n=(0,r.default)(t),a=(0,o.default)(n,e).getTime()-(0,i.default)(n,e).getTime();return Math.round(a/s)+1}})),a.register("j1YKz",(function(e,n){t(e.exports,"default",(function(){return s}));var r=a("le96L"),o=a("6RzIO"),i=a("8d3vD"),u=a("dCCOX");function s(t,e){var n,a,s,l,d,c,f,h;(0,o.default)(1,arguments);var m=(0,u.getDefaultOptions)(),g=(0,i.default)(null!==(n=null!==(a=null!==(s=null!==(l=null==e?void 0:e.weekStartsOn)&&void 0!==l?l:null==e||null===(d=e.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==s?s:m.weekStartsOn)&&void 0!==a?a:null===(f=m.locale)||void 0===f||null===(h=f.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==n?n:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=(0,r.default)(t),w=v.getUTCDay(),p=(w<g?7:0)+w-g;return v.setUTCDate(v.getUTCDate()-p),v.setUTCHours(0,0,0,0),v}})),a.register("dCCOX",(function(e,n){t(e.exports,"getDefaultOptions",(function(){return a}));var r={};function a(){return r}})),a.register("2yvSN",(function(e,n){t(e.exports,"default",(function(){return l}));var r=a("e0HMe"),o=a("6RzIO"),i=a("j1YKz"),u=a("8d3vD"),s=a("dCCOX");function l(t,e){var n,a,l,d,c,f,h,m;(0,o.default)(1,arguments);var g=(0,s.getDefaultOptions)(),v=(0,u.default)(null!==(n=null!==(a=null!==(l=null!==(d=null==e?void 0:e.firstWeekContainsDate)&&void 0!==d?d:null==e||null===(c=e.locale)||void 0===c||null===(f=c.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==l?l:g.firstWeekContainsDate)&&void 0!==a?a:null===(h=g.locale)||void 0===h||null===(m=h.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==n?n:1),w=(0,r.default)(t,e),p=new Date(0);p.setUTCFullYear(w,0,v),p.setUTCHours(0,0,0,0);var b=(0,i.default)(p,e);return b}})),a.register("e0HMe",(function(e,n){t(e.exports,"default",(function(){return l}));var r=a("le96L"),o=a("6RzIO"),i=a("j1YKz"),u=a("8d3vD"),s=a("dCCOX");function l(t,e){var n,a,l,d,c,f,h,m;(0,o.default)(1,arguments);var g=(0,r.default)(t),v=g.getUTCFullYear(),w=(0,s.getDefaultOptions)(),p=(0,u.default)(null!==(n=null!==(a=null!==(l=null!==(d=null==e?void 0:e.firstWeekContainsDate)&&void 0!==d?d:null==e||null===(c=e.locale)||void 0===c||null===(f=c.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==l?l:w.firstWeekContainsDate)&&void 0!==a?a:null===(h=w.locale)||void 0===h||null===(m=h.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==n?n:1);if(!(p>=1&&p<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(v+1,0,p),b.setUTCHours(0,0,0,0);var y=(0,i.default)(b,e),x=new Date(0);x.setUTCFullYear(v,0,p),x.setUTCHours(0,0,0,0);var C=(0,i.default)(x,e);return g.getTime()>=y.getTime()?v+1:g.getTime()>=C.getTime()?v:v-1}})),a.register("jOrUI",(function(e,n){function r(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}t(e.exports,"default",(function(){return r}))})),a.register("bDYa5",(function(e,n){t(e.exports,"default",(function(){return o}));var r=a("jOrUI"),o={y:function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return(0,r.default)("yy"===e?a%100:a,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):(0,r.default)(n+1,2)},d:function(t,e){return(0,r.default)(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return(0,r.default)(t.getUTCHours()%12||12,e.length)},H:function(t,e){return(0,r.default)(t.getUTCHours(),e.length)},m:function(t,e){return(0,r.default)(t.getUTCMinutes(),e.length)},s:function(t,e){return(0,r.default)(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,a=t.getUTCMilliseconds(),o=Math.floor(a*Math.pow(10,n-3));return(0,r.default)(o,e.length)}}})),a.register("dmQbx",(function(e,n){t(e.exports,"default",(function(){return o}));var r=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},a=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},o={p:a,P:function(t,e){var n,o=t.match(/(P+)(p+)?/)||[],i=o[1],u=o[2];if(!u)return r(t,e);switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",r(i,e)).replace("{{time}}",a(u,e))}}})),a.register("8zxzx",(function(e,n){function r(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}t(e.exports,"default",(function(){return r}))})),a.register("xRN1E",(function(e,n){t(e.exports,"isProtectedDayOfYearToken",(function(){return o})),t(e.exports,"isProtectedWeekYearToken",(function(){return i})),t(e.exports,"throwProtectedError",(function(){return u}));var r=["D","DD"],a=["YY","YYYY"];function o(t){return-1!==r.indexOf(t)}function i(t){return-1!==a.indexOf(t)}function u(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}})),a.register("fhQJu",(function(e,n){t(e.exports,"default",(function(){return r}));var r=a("eG059").default})),a.register("eG059",(function(e,n){t(e.exports,"default",(function(){return l}));var r=a("bvM2P"),o=a("haCAZ"),i=a("AVlzc"),u=a("eiIUR"),s=a("8rsbS"),l={code:"en-US",formatDistance:r.default,formatLong:o.default,formatRelative:i.default,localize:u.default,match:s.default,options:{weekStartsOn:0,firstWeekContainsDate:1}}})),a.register("bvM2P",(function(e,n){t(e.exports,"default",(function(){return a}));var r={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},a=function(t,e,n){var a,o=r[t];return a="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a}})),a.register("haCAZ",(function(e,n){t(e.exports,"default",(function(){return o}));var r=a("lbh04"),o={date:(0,r.default)({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})}})),a.register("lbh04",(function(e,n){function r(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}t(e.exports,"default",(function(){return r}))})),a.register("AVlzc",(function(e,n){t(e.exports,"default",(function(){return a}));var r={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},a=function(t,e,n,a){return r[t]}})),a.register("eiIUR",(function(e,n){t(e.exports,"default",(function(){return o}));var r=a("jZkn4"),o={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:(0,r.default)({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:(0,r.default)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})}})),a.register("jZkn4",(function(e,n){function r(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}t(e.exports,"default",(function(){return r}))})),a.register("8rsbS",(function(e,n){t(e.exports,"default",(function(){return o}));var r=a("gcy5I"),o={ordinalNumber:(0,a("jChsd").default)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})}})),a.register("gcy5I",(function(e,n){function r(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],u=e.match(i);if(!u)return null;var s,l=u[0],d=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(d)?o(d,(function(t){return t.test(l)})):a(d,(function(t){return t.test(l)}));s=t.valueCallback?t.valueCallback(c):c,s=n.valueCallback?n.valueCallback(s):s;var f=e.slice(l.length);return{value:s,rest:f}}}function a(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function o(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}t(e.exports,"default",(function(){return r}))})),a.register("jChsd",(function(e,n){function r(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var a=r[0],o=e.match(t.parsePattern);if(!o)return null;var i=t.valueCallback?t.valueCallback(o[0]):o[0];i=n.valueCallback?n.valueCallback(i):i;var u=e.slice(a.length);return{value:i,rest:u}}}t(e.exports,"default",(function(){return r}))}));
//# sourceMappingURL=index.6d98c7fa.js.map
