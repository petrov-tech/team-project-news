import { getPopularArticle } from "../api";
import { createCardsToHtml } from "../markup";

getPopularArticle().then((e) => createCardsToHtml(e))