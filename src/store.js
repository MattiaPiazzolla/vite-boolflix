import { reactive } from 'vue';

export const store = reactive({
    apiUrlMovie: 'https://api.themoviedb.org/3/search/movie?api_key=8f798c0bdd5d474178d2da0aeb1e10f5',
    apiUrlSeries: 'https://api.themoviedb.org/3/search/tv?api_key=8f798c0bdd5d474178d2da0aeb1e10f5',
    apiUrlMovieTrending: 'https://api.themoviedb.org/3/trending/movie/day?api_key=8f798c0bdd5d474178d2da0aeb1e10f5&language=it-IT',
    apiUrlSeriesTrending: 'https://api.themoviedb.org/3/trending/tv/day?api_key=8f798c0bdd5d474178d2da0aeb1e10f5&language=it-IT',
    apiMovieCast: 'https://api.themoviedb.org/3/movie/',
    apiSeriesCast: 'https://api.themoviedb.org/3/tv/',
    apiMovieGenre: 'https://api.themoviedb.org/3/genre/movie/list?api_key=8f798c0bdd5d474178d2da0aeb1e10f5&language=it-IT',
    apiSeriesGenre: 'https://api.themoviedb.org/3/genre/tv/list?api_key=8f798c0bdd5d474178d2da0aeb1e10f5&language=it-IT',
    MovieGenreList: [
        {
        "id": 28,
        "name": "Azione"
      },
      {
        "id": 12,
        "name": "Avventura"
      },
      {
        "id": 16,
        "name": "Animazione"
      },
      {
        "id": 35,
        "name": "Commedia"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 99,
        "name": "Documentario"
      },
      {
        "id": 18,
        "name": "Dramma"
      },
      {
        "id": 10751,
        "name": "Famiglia"
      },
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 36,
        "name": "Storia"
      },
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 10402,
        "name": "Musica"
      },
      {
        "id": 9648,
        "name": "Mistero"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 878,
        "name": "Fantascienza"
      },
      {
        "id": 10770,
        "name": "televisione film"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 10752,
        "name": "Guerra"
      },
      {
        "id": 37,
        "name": "Western"
      }],
    SeriesGenreList: [
        {
        "id": 10759,
        "name": "Action & Adventure"
      },
      {
        "id": 16,
        "name": "Animazione"
      },
      {
        "id": 35,
        "name": "Commedia"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 99,
        "name": "Documentario"
      },
      {
        "id": 18,
        "name": "Dramma"
      },
      {
        "id": 10751,
        "name": "Famiglia"
      },
      {
        "id": 10762,
        "name": "Kids"
      },
      {
        "id": 9648,
        "name": "Mistero"
      },
      {
        "id": 10763,
        "name": "News"
      },
      {
        "id": 10764,
        "name": "Reality"
      },
      {
        "id": 10765,
        "name": "Sci-Fi & Fantasy"
      },
      {
        "id": 10766,
        "name": "Soap"
      },
      {
        "id": 10767,
        "name": "Talk"
      },
      {
        "id": 10768,
        "name": "War & Politics"
      },
      {
        "id": 37,
        "name": "Western"
      }],
    movieList: [],
    seriesList: [], 
    SearchQuery: ''
});