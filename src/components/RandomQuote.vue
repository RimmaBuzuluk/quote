<template>
	<div class="quote-container">
		<div v-if="error" class="error">{{ error }}</div>
		<div v-else>
			<p class="quote">{{ quote.quote }}</p>
			<p class="author">— {{ quote.author }}</p>
			<button @click="fetchQuote">Get New Quote</button>
			<button @click="copyToClipboard">Copy Quote</button>
		</div>
	</div>
</template>

<script>
export default {
	props: ['onNewQuote', 'language'],
	data() {
		return {
			quote: { quote: '', author: '' },
			error: null,
		};
	},
	methods: {
		async fetchQuote() {
			this.error = null;
			try {
				const response = await fetch('https://programming-quotesapi.vercel.app/api/random');
				if (!response.ok) {
					throw new Error(`Server error: ${response.status}`);
				}

				const data = await response.json();

				if (data) {
					this.quote = { quote: data.quote, author: data.author };
					this.onNewQuote(this.quote);
				} else {
					throw new Error('Invalid quote data format.');
				}
			} catch (error) {
				this.error = 'Failed to load quote. Please try again.';
				console.error(error);
			}
		},
		copyToClipboard() {
			const text = `"${this.quote.quote}" — ${this.quote.author}`;
			navigator.clipboard.writeText(text).then(() => alert('Quote copied to clipboard!'));
		},
	},
	mounted() {
		this.fetchQuote();
	},
};
</script>

<style scoped>
.quote-container {
	padding: 2rem;
	font-family: Arial, sans-serif;
}
.quote {
	font-size: 1.5rem;
	margin-bottom: 1rem;
}
.author {
	font-size: 1rem;
	color: #555;
	margin-bottom: 1rem;
}
button {
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 4px;
	padding: 0.5rem 1rem;
	margin-right: 10px;
}
</style>
