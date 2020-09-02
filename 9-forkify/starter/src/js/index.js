//GLOBAL CONTROLLER

import Search from'./models/Search';

//global state of the app
// - search object
// - current recipe object
// - shopping list object
// - liked recipes
// all above data will be stored in one central variabloe that we can access thru our controller
const state = {};

const controlSearch = async () => {
    // 1) get query from the view
    const query = 'pizza' //TODO

    if (query) {
        // 2) new search object and add it to state
        state.search = new Search(query);

        // 3) prepare UI for results

        // 4) search for recipes
        await state.search.getResults();
        
        // 5) render results on UI
        console.log(state.search.result)
    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

/*
import string from './models/Search';
//import {add, multiply, ID} from './views/searchView';
import * as searchView from './views/searchView';

console.log(`Using imported function! ${searchView.add(searchView.ID, 2)} and  ${searchView.multiply(searchView.ID, 5)}.... ${string}`);
*/