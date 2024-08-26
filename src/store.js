import { reactive } from 'vue';

export const store = reactive({
    // URL
    apiUrlMovie: 'https://api.themoviedb.org/3/search/movie',
    apiUrlSeries: 'https://api.themoviedb.org/3/search/tv',
    // STORE
    movieList: [],
    seriesList: [],

})