<template>
	<div class="share-buttons">
		<h3 class="title">Share this quote:</h3>
		<div class="share-link">
			<a :href="`https://t.me/share/url?url=${encodedQuote}`" target="_blank">
				<img class="shate__img" src="../img/telegram.png" />
			</a>
			<a :href="facebookShareUrl" target="_blank">
				<img class="shate__img" src="../img/facebook.png" />
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

.shate__img {
	width: 50px;
	height: 50px;
}

@media (max-width: 800px) {
	.shate__img {
		width: 30px;
		height: 30px;
	}
}

.share-link {
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
