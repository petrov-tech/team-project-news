!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequired7c6;null==a&&((a=function(t){if(t in r)return r[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},n.parcelRequired7c6=a),a.register("aDyNI",(function(e,n){t(e.exports,"searchBloom",(function(){return v})),t(e.exports,"createCardtToNews",(function(){return m})),t(e.exports,"createCardsToHtml",(function(){return g}));var r=a("i7yLH"),o=a("i24Cx"),i=document.getElementsByClassName("calendar__button-arrow")[0].children[0].href.baseVal,c=document.getElementsByClassName("news")[0],s=document.getElementsByClassName("pagination-buttons")[0],u=[],l=4,f=1,h="",d="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png",p=2,v=!1;function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;v=!1,m(t,e)}function m(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;w(),y(t),p=e;var n=e*l-l;f=u.length/l,_(u.slice(n,n+l)),0===p||v?0!==p&&v&&(s.innerHTML=(0,r.generatePaginationButtons)(p,f)):s.innerHTML=(0,r.generatePaginationButtons)(p,f)}function y(t){t.map((function(t){if(t.idCards)return u.push(t);var e=function(t){var e=t.abstract,n=t.headline,r=t.web_url,o=t.multimedia,a=t.pub_date,i=t.title,c=t.created_date,s=t.url,u=t.section_name,l=t.section,f=t.uri,h=t.media,p=t.published_date,v=t.id,g=!1,m=!1,y="",w="",_="",b="",x="",L="";if(o)n?(w=n.main,y="https://static01.nyt.com/"+o[0].url,_=a,b=r,x=u,L=f):(w=i,y=o[o.length-2].url,_=c,b=s,x=l,L=f);else if(w=i,_=p,b=s,x=l,L=v,0===h.length)y=d;else{var E=h[0]["media-metadata"];y=E[Object.keys(E)[Object.keys(E).length-1]].url}""===y&&(y=d);T=_,k=new Date(T),O=k.getUTCDate().toString().padStart(2,"0"),N=(k.getUTCMonth()+1).toString().padStart(2,"0"),j=k.getFullYear().toString().slice(2,4),_="".concat(O,"/").concat(N,"/").concat(j," ");var T,k,O,N,j;var F=(P=e,P.slice(0,115)+"...");var P;return{idCards:L,sectionFormt:x,titleFormt:w,paragraf:F,dataFormt:_,urlFormt:b,imgUrl:y,toRead:g,toFavorite:m}}(t);u.push(e)})).join("")}function w(){var t=document.body.clientWidth;t>1280?(h="desktop",l=8):t>760?(h="tablet",l=7):(h="mobile",l=4)}function _(t){var e="<ul class='list-news'>"+t.map((function(t,e){if(0===e)return"mobile"===h?x(t):b(t);if(1===e){if("tablet"===h)return x(t)}else if(2===e&&"desktop"===h)return x(t);return b(t)})).join("")+"</ul>";c.innerHTML="",c.insertAdjacentHTML("beforeend",e)}function b(t){var e,n=t.urlFormt,r=t.sectionFormt,o=t.imgUrl,a=t.titleFormt,c=t.paragraf,s=t.dataFormt,u=t.idCards,l=t.toRead,f=void 0!==l&&l,h=t.toFavorite,d=void 0!==h&&h;return d=d?"cardsFavorite":"",'\n    <li>\n    <article class="item-news__article '.concat(f=f?"cardsRead":"",'" data-id="').concat(u,' ">    \n     <div class="item-news__wrapper-img">\n        <img class="item-news__img"\n                          src="').concat(o,'"\n                          alt="">\n                      <p class="item-news__category">').concat(r,'</p>        \n                      <button type="button" class="item-news__add-to-favorite ').concat(d,' " data-id="').concat(u,'">\n                      <span class="item-news__add-to-favorite-btn">Add to favorite</span>\n                      <span class="item-news__add-to-favorite-btn-remove">Remove from favorite</span>\n\t\t\t\t\t\t\t\t<svg class="item-news__block-icon active-news-icon"\n\t\t\t\t\t\t\t\twidth="16"\n\t\t\t\t\t\t\t\theight="16"\n\t\t\t\t\t\t\t\tviewBox="0 0 16 16"\n\t\t\t\t\t\t\t\t><use href=" ').concat((e=i,e.includes("#")?e.substring(0,e.indexOf("#")):e),'#icon-addfavorite"></use>\n\t\t\t\t\t\t\t\t</svg></span>\n                      </button>                      \n                  </div>\n                  <div class="item-news__wrapper-text">\n                  <h2 class="item-news__title">\n                      ').concat(a,'\n                  </h2>\n                  <p class="item-news__description">\n                      ').concat(c,'</p>\n                  </div>\n                  <div class="item-news__info">\n                      <span class="item-news__info-date" >').concat(s,'</span>\n                      <a target="_blank" class="item-news__info-link" data-id="').concat(u,'" href="').concat(n,'" target="_blank" rel="noreferrer noopener">Read more</a></div>                    \n    </article>\n    </li>\n    ')}function x(t){return'<li><div class="weather"><div class="weather__info"><span class="weather__deg"></span><div class="weather__geo"><span class="weather__value"></span>\n            <p class="weather__location"><span class="weather__city"></span></p></div></div><img class="weather__img" /><div class="weather__date">\n        <p class="weather__day"></p><p class="weather__year"></p></div><a href="https://sinoptik.ua/" class="weather__link" target="_blank" rel="noreferrer noopener">weather for week</a></div></li>'+b(t)}window.addEventListener("resize",(function(){var t=h;w(),t!==h&&m()})),(0,o.getPopularArticle)().then((function(t){return g(t)}))})),a.register("i7yLH",(function(e,n){t(e.exports,"generatePaginationButtons",(function(){return i}));var r=a("aDyNI");document.getElementsByClassName("pagination-buttons")[0].addEventListener("click",(function(t){if("BUTTON"!==t.target.nodeName)return;o-t.target.dataset.page<=1&&r.searchBloom,(0,r.createCardtToNews)([],+t.target.dataset.page),e=500,n=-window.scrollY/(e/15),a=setInterval((function(){0!=window.scrollY?window.scrollBy(0,n):clearInterval(a)}),15);var e,n,a}));var o=3;function i(t,e){o=Math.ceil(e);var n=Math.max(t-Math.floor(2),1),r=Math.min(n+4,o),a="";e>1&&-1!=-t&&(a+='<button class="pagination-button pagination-button-scrol" data-page="'.concat(t-1,'">&laquo; Prew</button>'));for(var i=n;i<=r;i+=1)a+='<button class="pagination-button '.concat(-i==-t?"active":" ",'" data-page="').concat(i,'">').concat(i,"</button>");return e>1&&-o!=-t&&(a+='<button class="pagination-button pagination-button-scrol" data-page="'.concat(-1*(-t-1),'">Next &raquo;</button>')),a}})),a.register("i24Cx",(function(n,r){t(n.exports,"getPopularArticle",(function(){return u}));var o=a("bpxeT"),i=a("2TvXO"),c="api-key=ZMLoDGQ1iPfdXBvpyv6UQCmTcNMQFJ7A",s="https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?".concat(c);function u(){return l.apply(this,arguments)}function l(){return(l=e(o)(e(i).mark((function t(){var n,r,o;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(s);case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,o=r.results,console.log(o),t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}})),a.register("bpxeT",(function(t,e){"use strict";function n(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,s,"next",t)}function s(t){n(i,o,a,c,s,"throw",t)}c(void 0)}))}}})),a.register("2TvXO",(function(t,e){var n=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),i=new N(r||[]);return a._invoke=function(t,e,n){var r=f;return function(o,a){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw a;return F()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=T(i,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?p:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={};function g(){}function m(){}function y(){}var w={};s(w,a,(function(){return this}));var _=Object.getPrototypeOf,b=_&&_(_(j([])));b&&b!==n&&r.call(b,a)&&(w=b);var x=y.prototype=g.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function T(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,T(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function j(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:F}}function F(){return{value:e,done:!0}}return m.prototype=y,s(x,"constructor",y),s(y,"constructor",m),m.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(E.prototype),s(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new E(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(x),s(x,c,"Generator"),s(x,a,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:j(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}))}();
//# sourceMappingURL=favorite.59f72688.js.map