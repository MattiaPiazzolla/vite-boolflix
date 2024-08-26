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
		<ul>
			<li v-for="movie in store.movieList" :key="movie.id">
				{{ movie.title }}
				/
				{{ movie.original_title }}
				/
				{{ movie.original_language }}
				/
				{{ movie.vote_average }}
			</li>
		</ul>
		<CardMovies />
		<CardSeries />
	</div>
</template>

<style lang="scss"></style>
