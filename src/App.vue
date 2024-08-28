<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { store } from "./store.js";

export default {
	data() {
		return {
			store,
		};
	},
	components: {
		AppHeader,
		AppMain,
	},
	methods: {
		getMovie() {
			if (this.store.SearchQuery === "") {
				axios.get(this.store.apiUrlMovieTrending).then((results) => {
					this.store.movieList = results.data.results;
				});
				return;
			}

			axios
				.get(
					`${this.store.apiUrlMovie}&query=${this.store.SearchQuery}&include_adult=false&language=it-IT&page=1`
				)
				.then((results) => {
					this.store.movieList = results.data.results;
				});
		},

		getMovieCast() {
			this.store.movieCast = [];
			this.store.movieList.forEach((movie) => {
				axios
					.get(
						`${this.store.apiMovieCast}${movie.id}/credits?api_key=8f798c0bdd5d474178d2da0aeb1e10f5`
					)
					.then((results) => {
						this.store.movieCast = results.data.cast;
					});
			});
		},

		getSeries() {
			if (this.store.SearchQuery === "") {
				axios.get(this.store.apiUrlSeriesTrending).then((results) => {
					this.store.seriesList = results.data.results;
				});
				return;
			}
			axios
				.get(
					`${this.store.apiUrlSeries}&query=${this.store.SearchQuery}&include_adult=false&language=it-IT&page=1`
				)
				.then((results) => {
					this.store.seriesList = results.data.results;
				});
		},
		Search() {
			this.getMovie();
			this.getSeries();
			setTimeout(() => {
				this.getMovieCast();
			}, 2000);
		},
	},
	created() {
		this.Search();
	},
};
</script>

<template>
	<body class="bg-grey">
		<header class="bg-black position-fixed w-100 z-3">
			<AppHeader @search="Search" />
		</header>
		<AppMain />
	</body>
</template>

<style lang="scss">
@import "./style/generals.scss";
.logoText {
	font-family: "Bebas Neue", sans-serif;
}
</style>
