<script>
import { ref, onMounted } from 'vue';
import { fetchRandomQuote } from '@/api/quoteApi';
import { ErrorMessages } from '@/constants/ErrorMessages';

export default {
	props: ['onNewQuote', 'language'],
	setup(props) {
		const quote = ref({ quote: '', author: '' });
		const error = ref(null);

		const fetchQuote = async () => {
			error.value = null;
			try {
				quote.value = await fetchRandomQuote();
				props.onNewQuote(quote.value);
			} catch {
				error.value = ErrorMessages.FETCH_ERROR;
			}
		};

		const copyToClipboard = () => {
			const text = `"${quote.value.quote}" — ${quote.value.author}`;
			navigator.clipboard.writeText(text).then(() => alert('Quote copied to clipboard!'));
		};

		onMounted(fetchQuote);

		return {
			quote,
			error,
			fetchQuote,
			copyToClipboard,
		};
	},
};
</script>

<template>
	<div class="quote-container">
		<div v-if="error" class="error">{{ error }}</div>
		<div v-else>
			<p class="quote">{{ quote.quote }}</p>
			<p class="author">— {{ quote.author }}</p>
			<div class="quote-buttons">
				<button @click="fetchQuote">Get New Quote</button>
				<button @click="copyToClipboard">Copy Quote</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
.quote-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 2rem;
}
.quote {
	font-size: 2rem;
	margin-bottom: 1rem;
	text-align: center;
}

@media (max-width: 700px) {
	.quote {
		font-size: 1.5rem;
	}
}
.author {
	font-size: 1rem;
	color: #555;
	margin-bottom: 1rem;
	text-align: center;
}
.quote-buttons {
	display: flex;
	justify-content: center;
	column-gap: 10px;
}

@media (max-width: 700px) {
	.quote-buttons {
		align-items: center;
		flex-direction: column;
		row-gap: 10px;
		column-gap: 0;
	}
}
button {
	display: block;
	background: linear-gradient(45deg, #007bff, #00d4ff);
	color: white;
	font-size: 1.5rem;
	border: none;
	border-radius: 4px;
	padding: 1rem;
	width: 90%;
	cursor: pointer;
	transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}

@media (min-width: 800px) {
	button {
		padding: 0.5rem;
	}
}

@media (max-width: 700px) {
	button {
		font-size: 1rem;
		padding: 0.5rem;
	}
}

button:hover {
	background: linear-gradient(45deg, #0056b3, #0096c7);
	transform: scale(1.05);
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
