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
	<div class="col position-relative">
		<div class="card border-0">
			<img
				:src="
					movie.poster_path
						? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
						: movie.backdrop_path
						? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
						: `https://placehold.co/500x750?text=${movie.title}`
				"
				alt=""
				class="coverCard" />
			<!-- HOVER -->
			<div class="cardHover d-flex align-items-center">
				<div class="hoverContent">
					<h6>{{ movie.title }}</h6>
					<p class="">Titolo originale: {{ movie.original_title }}</p>
					<img
						:src="`../../public/FlagsM/${movie.original_language}.svg`"
						alt=""
						class="flag my-3" />
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
		</div>
	</div>
</template>

<style lang="scss" scoped>
.flag {
	width: 25px;
}

.card {
	flex: 0 0 auto;
	margin-right: 10px;
	width: calc(100vw / 4);
	min-width: 150px;
	position: relative;
	transition: all 0.25s;

	.cardHover {
		color: #fff;
		position: absolute;
		padding: 10px;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.75);
		opacity: 0;
		transition: all 0.5s;
	}

	&:hover .cardHover {
		opacity: 1;
	}
}

.coverCard {
	width: 100%;
	height: auto;
	object-fit: fill;
}
</style>
