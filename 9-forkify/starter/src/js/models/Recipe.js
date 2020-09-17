import axios from 'axios';

export default class Recipe { 
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
        } catch (error) {
            console.log(error);
            alert('Something went wrong');
        }
    }

    calcTime() {
        //Assuming we need 15min for each 3 ingredients
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3); 
        this.time = periods * 15;
    }

    calcServings() {
        this.servings = 4;
    }

    parseIngredients() {
        const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
        const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp','tsp', 'cup', 'pound'];

        const newIngredients = this.ingredients.map(el => {
            // 1) Uniform Units
            let ingredient = el.toLowerCase();
            //in order to avoit wayy too many cases in our arrays above
            unitsLong.forEach((unit, i) => {
                ingredient = ingredient.replace(unit, unitShort[i]);
            });

            // 2) Remove parentheses
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');
            // 3) parse ingredients into count, unit and ingredient

            return ingredient;
            //mapped into the new array
        });
        this.ingredients = newIngredients;
    }
}