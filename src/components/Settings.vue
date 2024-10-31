<script>
import { computed } from 'vue';

export default {
	props: ['quote'],
	setup(props) {
		const encodedQuote = computed(() => encodeURIComponent(`${props.quote.quote} — ${props.quote.author}`));
		const facebookShareUrl = computed(() => {
			const pageUrl = 'https://your-website.com';
			return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}&quote=${encodedQuote.value}`;
		});

		return {
			encodedQuote,
			facebookShareUrl,
		};
	},
};
</script>

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

<style scoped></style>
