import Search from'./models/Search';

const search = new Search("pizza");
console.log(search);
search.getResults();

/*
import string from './models/Search';
//import {add, multiply, ID} from './views/searchView';
import * as searchView from './views/searchView';

console.log(`Using imported function! ${searchView.add(searchView.ID, 2)} and  ${searchView.multiply(searchView.ID, 5)}.... ${string}`);
*/