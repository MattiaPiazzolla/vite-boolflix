import { reactive } from 'vue';

export const store = reactive({
    apiUrlMovie: 'https://api.themoviedb.org/3/search/movie?api_key=8f798c0bdd5d474178d2da0aeb1e10f5',
    apiUrlSeries: 'https://api.themoviedb.org/3/search/tv?api_key=8f798c0bdd5d474178d2da0aeb1e10f5',
    movieList: [],
    seriesList: [],
    SearchQuery: ''
});