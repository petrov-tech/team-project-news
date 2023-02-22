import './js/mobile_menu/index';
import './js/dark_mode/index';
import "./js/favorite_search/index"
import { dataLockalStorage } from './js/favorite_search/index';
import { createCardsToHtml } from './js/markup';

let mass = dataLockalStorage()

if (mass === undefined) mass = [];

console.log(mass);
createCardsToHtml(mass)

