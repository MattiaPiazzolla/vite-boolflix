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
			if (this.store.SearchQuery.trim() === "") {
				this.store.movieList = [];
				return;
			}

			axios
				.get(
					`${this.store.apiUrlMovie}&query=${this.store.SearchQuery}&include_adult=false&language=it-IT&page=1`
				)
				.then((response) => {
					this.store.movieList = response.data.results;
				});
		},
	},
	created() {
		this.getMovie();
	},
};
</script>

<template>
	<AppHeader @search="getMovie" />
	<AppMain />
</template>

<style></style>
