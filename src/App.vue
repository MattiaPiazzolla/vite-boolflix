<script>
import axios from "axios";
import { store } from "./store.js";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

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
					this.getMovieCast();
				});
				return;
			}

			axios
				.get(
					`${this.store.apiUrlMovie}&query=${this.store.SearchQuery}&include_adult=false&language=it-IT&page=1`
				)
				.then((results) => {
					this.store.movieList = results.data.results;
					this.getMovieCast();
				});
		},

		getMovieCast() {
			for (let i = 0; i < this.store.movieList.length; i++) {
				this.store.movieList[i].cast = [];
				axios
					.get(
						`${this.store.apiMovieCast}${this.store.movieList[i].id}/credits?api_key=8f798c0bdd5d474178d2da0aeb1e10f5&language=it-IT&page=1`
					)
					.then((results) => {
						this.store.movieList[i].cast = results.data.cast.slice(0, 5);
					});
			}
		},

		getSeries() {
			if (this.store.SearchQuery === "") {
				axios.get(this.store.apiUrlSeriesTrending).then((results) => {
					this.store.seriesList = results.data.results;
					this.getSeriesCast();
				});
				return;
			}
			axios
				.get(
					`${this.store.apiUrlSeries}&query=${this.store.SearchQuery}&include_adult=false&language=it-IT&page=1`
				)
				.then((results) => {
					this.store.seriesList = results.data.results;
					this.getSeriesCast();
				});
		},

		getSeriesCast() {
			for (let i = 0; i < this.store.seriesList.length; i++) {
				this.store.seriesList[i].cast = [];
				axios
					.get(
						`${this.store.apiSeriesCast}${this.store.seriesList[i].id}/credits?api_key=8f798c0bdd5d474178d2da0aeb1e10f5&language=it-IT&page=1`
					)
					.then((results) => {
						this.store.seriesList[i].cast = results.data.cast.slice(0, 5);
					});
			}
		},

		Search() {
			this.getMovie();
			this.getSeries();
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
