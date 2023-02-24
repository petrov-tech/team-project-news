const noResultsFavoriteMarkup = `<section class="not-found">
  <p class="not-found__text">You have not added any news </br> to your favorites yet</p>
  <picture>
    <source
      srcset="
        ${new URL(
          '../../images/not-found/desktop-not-found.png',
          import.meta.url
        )}    1x,
        ${new URL(
          '../../images/not-found/desktop-not-found@2x.png',
          import.meta.url
        )} 2x
      "
      media="(min-width:1279.98px)"
      type="image/png"
    />
    <source
      srcset="
        ${new URL(
          '../../images/not-found/tablet-not-found.png',
          import.meta.url
        )}    1x,
        ${new URL(
          '../../images/not-found/tablet-not-found@2x.png',
          import.meta.url
        )} 2x
      "
      media="(min-width:768px)"
      type="image/png"
    />
    <source
      srcset="
        ${new URL(
          '../../images/not-found/mobile-not-found.png',
          import.meta.url
        )}    1x,
        ${new URL(
          '../../images/not-found/mobile-not-found@2x.png',
          import.meta.url
        )} 2x
      "
      media="(max-width:767.98px)"
      type="image/png"
    />
    <img
      class="not-found__img"
      src="${new URL(
        '../../images/not-found/mobile-not-found.png',
        import.meta.url
      )}"
      alt="News hasn't been found"
    />
  </picture>
  </section>`;

const noResultsReadMarkup = `<section class="not-found">
  <p class="not-found__text">You haven't read any news yet</p>                             
  <picture>
    <source
      srcset="
        ${new URL(
          '../../images/not-found/desktop-not-found.png',
          import.meta.url
        )}    1x,
        ${new URL(
          '../../images/not-found/desktop-not-found@2x.png',
          import.meta.url
        )} 2x
      "
      media="(min-width:1279.98px)"
      type="image/png"
    />
    <source
      srcset="
        ${new URL(
          '../../images/not-found/tablet-not-found.png',
          import.meta.url
        )}    1x,
        ${new URL(
          '../../images/not-found/tablet-not-found@2x.png',
          import.meta.url
        )} 2x
      "
      media="(min-width:768px)"
      type="image/png"
    />
    <source
      srcset="
        ${new URL(
          '../../images/not-found/mobile-not-found.png',
          import.meta.url
        )}    1x,
        ${new URL(
          '../../images/not-found/mobile-not-found@2x.png',
          import.meta.url
        )} 2x
      "
      media="(max-width:767.98px)"
      type="image/png"
    />
    <img
      class="not-found__img"
      src="${new URL(
        '../../images/not-found/mobile-not-found.png',
        import.meta.url
      )}"
      alt="News hasn't been found"
    />
  </picture>    
  </section>`;

const favorites = localStorage.getItem('data');
const readNews = localStorage.getItem('read news');
const favouritesContainer = document.querySelector('.container__favourite');
const readContainer = document.querySelector('.container__read');

function noResultsFavourite() {
  if (!favorites || favorites === "[]") {
    favouritesContainer.insertAdjacentHTML(
      'afterbegin',
      noResultsFavoriteMarkup
    );
  }
}

function noResultsRead() {
  if (!readNews) {
    readContainer.insertAdjacentHTML('afterbegin', noResultsReadMarkup);
  }
}

export { noResultsFavourite, noResultsRead };
