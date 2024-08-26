<script>
import { store } from "../store.js";

export default {
	data() {
		return {
			store,
		};
	},
	methods: {
		searchInput() {
			this.$emit("search");
		},
	},
};
</script>

<template>
	<div class="container-fluid">
		<div class="row justify-content-between px-5 py-3">
			<h1 class="w-25">LOGO</h1>
			<input
				v-model="store.SearchQuery"
				@input="searchInput"
				type="text"
				class="searchBar"
				placeholder="Search..." />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.searchBar {
	width: 25%;
	min-width: 100px;
}
</style>
