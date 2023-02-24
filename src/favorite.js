import './js/mobile_menu/index';
import './js/dark_mode/index';
import "./js/favorite_search/index"

import { dataLockalStorage } from './js/favorite_search/index';
import { createCardsToHtml } from './js/markup';
import { noResultsFavourite } from './js/no-results-plug';

let mass = dataLockalStorage()

if (mass === undefined) mass = [];


createCardsToHtml(mass)
noResultsFavourite()
