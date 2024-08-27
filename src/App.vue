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
				this.store.movieList = [];
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
				this.store.seriesList = [];
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
	<body>
		<header class="bg-black position-fixed w-100 z-3">
			<AppHeader @search="Search" />
		</header>
		<AppMain />
	</body>
</template>

<style>
body {
	background-color: black;
}
</style>
