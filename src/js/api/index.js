const KEY = 'api-key=ZMLoDGQ1iPfdXBvpyv6UQCmTcNMQFJ7A';
const BASE_URL = 'https://api.nytimes.com/svc';
const MOST_POPULAR_NEWS = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?${KEY}`;

async function getPopularArticle() {
  const articleFetch = await fetch(MOST_POPULAR_NEWS);
  const articles = await articleFetch.json();
  let { results } = articles;
  console.log(results);
  return results;
}

async function getCategoryList() {
  const categoryList = await fetch(
    `${BASE_URL}//news/v3/content/section-list.json?${KEY}`
  );
  const categories = await categoryList.json();
  let { results } = categories;

  console.log(results);

  return results;
}
let sumPage;

async function getSearchArticle(value = lastSearch, page) {
  let dateForUrl = '';
  lastSearch = value;
  try {
    let date = JSON.parse(localStorage.getItem('date'))
      .replace('/', '')
      .replace('/', '');
    // console.log(date);
    dateForUrl = `&begin_date=${date}&end_date=${date}`;
  } catch (error) {
    // dateForUrl = '';
  }
  const articleFetch = await fetch(
    `${BASE_URL}/search/v2/articlesearch.json?q=${value}&${KEY}&page=${page}${dateForUrl}`
  );
  const articles = await articleFetch.json();

  let { response, errors } = articles;

  if (errors) {
    alert(JSON.parse(errors));
    return;
  }

  if (response.meta.hits > 1000) {
    sumPage = 1000;
  } else {
    sumPage = response.meta.hits;
  }
  // console.log(response.meta.hits);
  let { docs } = response;
  console.log(docs);

  return docs;
}

async function getArticleByCategory(value) {
  try {
    let newValue = encodeURIComponent(value);

    const articleFetch = await fetch(
      `${BASE_URL}/news/v3/content/all/${newValue}.json?${KEY}&limit=26`
    );

    const articles = await articleFetch.json();

    let { results } = articles;

    console.log(results);
    return results;
  } catch (error) {
    console.log('error');
  }
}

export {
  getPopularArticle,
  getCategoryList,
  getSearchArticle,
  getArticleByCategory,
  sumPage,
};
