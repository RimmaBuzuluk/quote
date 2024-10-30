<template>
	<div class="share-buttons">
		<h3>Share this quote:</h3>
		<a :href="`https://t.me/share/url?url=${encodedQuote}`" target="_blank">Telegram</a>
		<a :href="`https://www.facebook.com/sharer/sharer.php?u=${encodedQuote}`" target="_blank">Facebook</a>
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
</style>
