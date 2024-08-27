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
		<div class="row justify-content-between px-5 py-1">
			<div class="logo-side">
				<img src="../../public/logo-w.png" alt="" class="logoHeader" />
				<h2 class="text-uppercase mb-0">
					<span class="text-light">Bool</span
					><span class="text-danger">flix</span>
				</h2>
			</div>
			<div class="right-side">
				<input
					v-model="store.SearchQuery"
					@keyup.enter="searchInput"
					type="text"
					class="searchBar"
					placeholder="Search..." />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.logo-side {
	display: flex;
	align-items: center;
	width: 50%;
}
.logoHeader {
	max-width: 50px;
}
.right-side {
	display: flex;
	align-items: center;
	justify-content: end;
	width: 50%;
}

.searchBar {
	width: 25%;
	min-width: 125px;
}
</style>
