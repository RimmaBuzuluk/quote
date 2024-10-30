<template>
	<div class="quote-history-container">
		<h3 class="quote-title">Quote History</h3>
		<ul class="quote-list">
			<li v-for="(item, index) in quoteHistory" :key="index" class="history-item">{{ item.quote }} — {{ item.author }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: ['quoteHistory'],
};
</script>

<style scoped>
.quote-title {
	text-align: center;
}
.quote-history-container {
	max-height: 100%;
	overflow-y: auto;
	border: 1px solid #ddd;
	padding: 10px;
	border-radius: 5px;
}

.quote-list {
	padding: 0;
	margin: 0;
	list-style: none;
}
.history-item {
	margin-bottom: 20px;
	border-bottom: 1px solid #ddd;
}
</style>
