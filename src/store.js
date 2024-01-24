import { reactive } from 'vue';

export const store = reactive ({
    search:'',
    apiKey:'26be78da5dc0e6dc4dcd976cca352a79',
    Urlmovie:'https://api.themoviedb.org/3/search/movie',
    Urlserie:'https://api.themoviedb.org/3/search/tv',
    movies: [],
    series:[],
});