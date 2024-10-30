<template>
	<div class="share-buttons">
		<h3>Share this quote:</h3>
		<div class="share-link">
			<a :href="`https://t.me/share/url?url=${encodedQuote}`" target="_blank"><img src="../img/telegram.png" /></a>
			<a :href="`https://www.facebook.com/sharer/sharer.php?u=${encodedQuote}`" target="_blank"><img src="../img/facebook.png" /></a>
		</div>
	</div>
</template>

<script>
export default {
	props: ['quote'],
	computed: {
		encodedQuote() {
			return encodeURIComponent(`${this.quote.quote} — ${this.quote.author}`);
		},
	},
};
</script>

<style scoped>
.share-buttons a {
	margin: 0.5rem;
	color: #007bff;
	text-decoration: none;
}

.share-link {
	display: flex;
	align-items: center;
	/* width: 50px;
	height: 50px;
	background-color: azure; */
}
</style>
