import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            //api call based on the search query
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`)
            this.result = res.data.recipes;
            //console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}

//export default 'I am an exported string';