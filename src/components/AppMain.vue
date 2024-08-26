<script>
import CardMovies from "./CardMovies.vue";
import CardSeries from "./CardSeries.vue";
export default {
	components: {
		CardMovies,
		CardSeries,
	},
};
</script>

<template>
	<div class="container">
		<h1>Main</h1>
		<CardMovies />
		<CardSeries />
	</div>
</template>

<style lang="scss"></style>
