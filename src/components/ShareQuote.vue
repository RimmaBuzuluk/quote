<template>
	<div class="share-buttons">
		<h3 class="title">Share this quote:</h3>
		<div class="share-link">
			<a :href="`https://t.me/share/url?url=${encodedQuote}`" target="_blank">
				<img src="../img/telegram.png" />
			</a>
			<a :href="facebookShareUrl" target="_blank">
				<img src="../img/facebook.png" />
			</a>
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
		facebookShareUrl() {
			const pageUrl = 'https://your-website.com';
			return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}&quote=${this.encodedQuote}`;
		},
	},
};
</script>

<style scoped>
.title {
	text-align: center;
}
.share-buttons a {
	margin: 0.5rem;
	color: #007bff;
	text-decoration: none;
}
.share-link {
	display: flex;
	align-items: center;
}
</style>
