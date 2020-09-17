//GLOBAL CONTROLLER

import Search from'./models/Search';
import Recipe from './models/Recipe';
import {elements, renderLoader, clearLoader} from './views/base';
import * as searchView from './views/searchView';


//global state of the app
// - search object
// - current recipe object
// - shopping list object
// - liked recipes
// all above data will be stored in one central variabloe that we can access thru our controller
const state = {};

const controlSearch = async () => {
    // 1) get query from the view
        //read input from the input field
    const query = searchView.getInput();
    //console.log(query);

    if (query) {
        // 2) new search object and add it to state
        state.search = new Search(query);

        // 3) prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try {
            // 4) search for recipes
            //get results from our api call
            await state.search.getResults();
            
            // 5) render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);
        } catch (err) {
            alert(`${err} is the problem... idk man....`);
        }

        
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

//TESTING
elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});



///////////
// RECIPE CONTROLLER

const controlRecipe = async () => {
    // get ID from URL
    const id = window.location.hash.replace('#', '');
    console.log(id);

    if (id) {
        //prepare UI for changes

        // Create new recipe object
        state.recipe = new Recipe(id);

        try {
            //Get recipe data
            await state.recipe.getRecipe();

            // calculate servings and TimeRanges
            state.recipe.calcTime();
            state.recipe.calcServings();

            // render recipe
            console.log(state.recipe);
            } catch (err) {
                alert('Error rocessing recipe!!!!!!!!!');
            }

       
    }
};

//window.addEventListener('hashchange', controlRecipe);
//window.addEventListener('load', cotrolRecipe);
//OR....

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

/* Just for testing
const r = new Recipe(47746);
r.getRecipe();
console.log(r);
*/

/* old code to show npm and module functionality
import string from './models/Search';
//import {add, multiply, ID} from './views/searchView';
import * as searchView from './views/searchView';

console.log(`Using imported function! ${searchView.add(searchView.ID, 2)} and  ${searchView.multiply(searchView.ID, 5)}.... ${string}`);
*/