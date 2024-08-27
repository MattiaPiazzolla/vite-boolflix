<script>
import CardMovies from "./CardMovies.vue";
import CardSeries from "./CardSeries.vue";
import { store } from "../store.js";

export default {
	data() {
		return {
			store,
		};
	},
	components: {
		CardMovies,
		CardSeries,
	},
	methods: {
		calculateStars(vote) {
			const fullStars = Math.round(vote / 2);
			const emptyStars = 5 - fullStars;
			return { fullStars, emptyStars };
		},
	},
};
</script>

<template>
	<div class="container-fluid">
		<h3>Film</h3>
		<div class="d-flex overflow-auto custom-row my-4">
			<CardMovies
				v-for="movie in store.movieList"
				:key="movie.id"
				:movie="movie" />
		</div>

		<h3>Serie Tv</h3>
		<div class="d-flex overflow-auto custom-row my-4">
			<CardSeries
				v-for="series in store.seriesList"
				:key="series.id"
				:series="series" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
h3 {
	color: #fff;
}

.container-fluid {
	padding-top: 75px;
}

.custom-row {
	flex-wrap: nowrap;
	overflow-x: auto;
	padding-bottom: 10px;
}
</style>
