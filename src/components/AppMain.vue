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

		<!-- <ul>
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
				<span
					v-for="i in calculateStars(series.vote_average).fullStars"
					:key="`full-star-${i}`">
					<i class="fa-solid fa-star"></i>
				</span>
				<span
					v-for="n in calculateStars(series.vote_average).emptyStars"
					:key="`empty-star-${n}`">
					<i class="fa-regular fa-star"></i>
				</span>
			</li>
		</ul> -->
	</div>
</template>

<style lang="scss" scoped>
.container-fluid {
	padding-top: 75px;
}

.custom-row {
	flex-wrap: nowrap;
	overflow-x: auto;
	padding-bottom: 10px;
}
</style>
