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
};
</script>

<template>
	<div class="container">
		<h3>Film</h3>
		<ul>
			<li v-for="movie in store.movieList" :key="movie.id">
				{{ movie.title }}
				/
				{{ movie.original_title }}
				/
				<img
					:src="`../../public/FlagsM/${movie.original_language}.svg`"
					alt=""
					class="flag" />
				/
				{{ movie.vote_average }}
			</li>
		</ul>
		<h3>Serie Tv</h3>
		<ul>
			<li v-for="series in store.seriesList" :key="series.id">
				{{ series.name }}
				/
				{{ series.original_name }}
				/
				<img
					:src="`../../public/Flags/${series.origin_country}.svg`"
					alt=""
					class="flag" />
				/
				{{ series.vote_average }}
			</li>
		</ul>
		<CardMovies />
		<CardSeries />
	</div>
</template>

<style lang="scss">
.flag {
	width: 25px;
}
</style>
