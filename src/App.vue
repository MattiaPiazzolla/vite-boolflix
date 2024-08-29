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
