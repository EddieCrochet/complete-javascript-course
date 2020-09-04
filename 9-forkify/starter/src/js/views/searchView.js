//export const add = (a, b) => a + b;
//export const multiply = (a, b) => a * b;
//export const ID = 23;

import {elements} from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
};

//17 is the sweet spot for our pages layot for titles
// 'pasta with tomato and spinach"
const limitRecipeTitle = (title, limit = 17) => {
    //variable to store the array of words for the new title
    const newTitle = [];
    if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);

        //return the final result
        return `${newTitle.join(' ')} ...`;
    } 
    return title;
};

const renderRecipe = recipe => {
    //make a variable containing the markup we want to append
    //send the html you want to add to a template string in a variable
    const markup = 
    `<li>
        <a class="results__link" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>`;
    elements.searchResList.insertAdjacentHTML('beforeend', markup);
};

export const renderResults = recipes => {
    recipes.forEach(renderRecipe);
};