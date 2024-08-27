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
				<img
					:src="
						movie.poster_path
							? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
							: movie.backdrop_path
							? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
							: `https://placehold.co/500x750?text=${movie.title}`
					"
					alt="" />
				{{ movie.title }}
				/
				{{ movie.original_title }}
				/
				<img
					:src="`../../public/FlagsM/${movie.original_language}.svg`"
					alt=""
					class="flag" />
				/
				{{ Math.round(movie.vote_average / 2) }}
			</li>
		</ul>
		<h3>Serie Tv</h3>
		<ul>
			<li v-for="series in store.seriesList" :key="series.id">
				<img
					:src="
						series.poster_path
							? `https://image.tmdb.org/t/p/w500${series.poster_path}`
							: series.backdrop_path
							? `https://image.tmdb.org/t/p/w500${series.backdrop_path}`
							: `https://placehold.co/500x750?text=${series.name}`
					"
					alt="" />
				{{ series.name }}
				/
				{{ series.original_name }}
				/
				<img
					:src="`../../public/Flags/${series.origin_country}.svg`"
					alt=""
					class="flag" />
				/
				{{ Math.round(series.vote_average / 2) }}
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
