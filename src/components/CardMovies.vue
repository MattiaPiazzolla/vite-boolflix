<script>
export default {
	props: {
		movie: Object,
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
	<div class="col">
		<div class="card">
			<img
				:src="
					movie.poster_path
						? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
						: movie.backdrop_path
						? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
						: `https://placehold.co/500x750?text=${movie.title}`
				"
				alt="" />
			{{ movie.title }} / {{ movie.original_title }} /
			<img
				:src="`../../public/FlagsM/${movie.original_language}.svg`"
				alt=""
				class="flag" />
			<div class="stars">
				<span
					v-for="i in calculateStars(movie.vote_average).fullStars"
					:key="`full-star-${i}`">
					<i class="fa-solid fa-star"></i>
				</span>
				<span
					v-for="n in calculateStars(movie.vote_average).emptyStars"
					:key="`empty-star-${n}`">
					<i class="fa-regular fa-star"></i>
				</span>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.flag {
	width: 25px;
}
</style>
