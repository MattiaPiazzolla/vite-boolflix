<script>
import axios from "axios";
import { store } from "../store.js";

export default {
	props: {
		series: Object,
	},
	data() {
		return {
			store,
			currentCast: [],
		};
	},
	methods: {
		calculateStars(vote) {
			const fullStars = Math.round(vote / 2);
			const emptyStars = 5 - fullStars;
			return { fullStars, emptyStars };
		},
		getSeriesCast(id) {
			axios
				.get(
					`${this.store.apiSeriesCast}${id}/credits?api_key=8f798c0bdd5d474178d2da0aeb1e10f5&language=it-IT&page=1`
				)
				.then((results) => {
					this.currentCast = results.data.cast.slice(0, 5);
				});
		},
	},
};
</script>

<template>
	<div class="col position-relative">
		<div class="card border-0">
			<img
				:src="
					series.poster_path
						? `https://image.tmdb.org/t/p/w500${series.poster_path}`
						: series.backdrop_path
						? `https://image.tmdb.org/t/p/w500${series.backdrop_path}`
						: `https://placehold.co/500x750?text=${series.name}`
				"
				alt=""
				class="coverCard" />
			<!-- HOVER -->
			<div class="cardHover d-flex align-items-center">
				<div class="hoverContent">
					<h4>{{ series.name }}</h4>
					<p class="d-none d-md-block">
						Titolo originale: {{ series.original_name }}
					</p>
					<img
						:src="`../../public/FlagsM/${series.original_language}.svg`"
						alt=""
						class="flag my-3 d-none d-md-block" />
					<div class="stars d-none d-md-block">
						<span
							v-for="i in calculateStars(series.vote_average).fullStars"
							:key="`full-star-${i}`">
							<i class="fa-solid fa-star"></i>
						</span>
						<span
							v-for="i in calculateStars(series.vote_average).emptyStars"
							:key="`empty-star-${i}`">
							<i class="fa-regular fa-star"></i>
						</span>
					</div>

					<button
						class="btn btn-light text-dark mt-3"
						type="button"
						data-bs-toggle="offcanvas"
						:data-bs-target="'#offcanvasBottom-' + series.id"
						aria-controls="offcanvasBottom-"
						@click="getSeriesCast(series.id)">
						<i class="fas fa-play"></i>
					</button>
				</div>
			</div>
		</div>
	</div>
	<div
		class="offcanvas offcanvas-bottom h-100 bg-black text-light"
		tabindex="-1"
		:id="'offcanvasBottom-' + series.id"
		aria-labelledby="offcanvasBottomLabel">
		<div class="offcanvas-header">
			<h1 class="offcanvas-name">
				{{ series.name }}
			</h1>
			<button
				type="button"
				class="btn-close text-reset fas fa-xmark fs-1"
				data-bs-dismiss="offcanvas"
				aria-label="Close"></button>
		</div>
		<div class="offcanvas-body px-5 py-0 m-0 w-100 d-flex">
			<div class="leftOffBody overflow-scroll">
				<p class="">
					Titolo originale:
					<span class="fw-bold">{{ series.original_name }}</span>
				</p>
				<span
					>Lingua originale:
					<img
						:src="`../../public/FlagsM/${series.original_language}.svg`"
						alt=""
						class="flag my-3"
				/></span>
				<div class="stars">
					<span
						v-for="i in calculateStars(series.vote_average).fullStars"
						:key="`full-star-${i}`">
						<i class="fa-solid fa-star"></i>
					</span>
					<span
						v-for="i in calculateStars(series.vote_average).emptyStars"
						:key="`empty-star-${i}`">
						<i class="fa-regular fa-star"></i>
					</span>
				</div>
				<p class="my-3">
					<span class="fw-bold">Descrizione:</span><br />
					{{ series.overview }}
				</p>
				<p class="my-3">
					<span class="fw-bold">Data di uscita:</span>
					{{ series.release_date }}
				</p>
				<p class="my-3 fw-bold">Cast:</p>
				<div class="castContainer">
					<div class="castRow">
						<div class="castCard" v-for="actor in currentCast" :key="actor">
							<img
								:src="
									actor.profile_path
										? `https://image.tmdb.org/t/p/w342${actor.profile_path}`
										: 'https://placehold.co/342x500?text=No+Image'
								"
								alt="" />
							<p>{{ actor.original_name }}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="image-container w-50 d-none d-md-block">
				<img
					:src="
						series.poster_path
							? `https://image.tmdb.org/t/p/w500${series.poster_path}`
							: series.backdrop_path
							? `https://image.tmdb.org/t/p/w500${series.backdrop_path}`
							: `https://placehold.co/500x750?text=${series.name}`
					"
					alt=""
					class="posterOffcanvas" />
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
		padding: 20px;
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

.image-container {
	position: relative;
	width: 100%;
	height: auto;
	overflow: hidden;
}

.posterOffcanvas {
	width: 100%;
	height: auto;
	object-fit: cover;
}

.image-container::after {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
	background: radial-gradient(
		ellipse 75% 80% at center,
		transparent,
		black 67.5%
	);
	z-index: 1;
}

.leftOffBody {
	width: 100%;
	@media (min-width: 768px) {
		width: 50%;
	}
}

.castContainer {
	width: 100%;
	overflow-x: auto;
	white-space: nowrap;
}

.castRow {
	display: flex;
	flex-wrap: nowrap;

	&:hover {
		.castCard {
			opacity: 0.3;
		}
	}
	.castCard {
		flex: 0 0 auto;
		margin-right: 20px;
		text-align: center;
		width: 125px;
		transition: 0.4s;

		&:hover {
			opacity: 1;
		}

		img {
			width: 100%;
			aspect-ratio: 1 / 1;
			object-fit: cover;
			border-radius: 50%;
		}
	}
}

.castCard p {
	margin-top: 5px;
	font-size: 15px;
	color: #ffffff;
	white-space: normal;
}
</style>
