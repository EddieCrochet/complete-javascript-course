import axios from 'axios';

async function getResults(query) {
    try {
        const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${query}`)
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch (error) {
        alert(error);
    }
}
getResults("pasta");

/*
import string from './models/Search';
//import {add, multiply, ID} from './views/searchView';
import * as searchView from './views/searchView';

console.log(`Using imported function! ${searchView.add(searchView.ID, 2)} and  ${searchView.multiply(searchView.ID, 5)}.... ${string}`);
*/