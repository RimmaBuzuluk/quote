<template>
	<div>
		<h3>Quote History</h3>
		<ul>
			<li v-for="(item, index) in quoteHistory" :key="index">{{ item.quote }} — {{ item.author }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: ['quoteHistory'],
};
</script>

<style scoped></style>
