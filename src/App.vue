<template>
	<div id="app" class="app">
		<div class="burger" @click="toggleHistory">&#9776;</div>

		<div :class="['history-overlay', { open: isHistoryOpen }]">
			<HistoryQuote :quoteHistory="quoteHistory" class="history-content" />
		</div>

		<RandomQuote :onNewQuote="updateQuote" :language="language" class="main-content" />

		<div class="settings-share">
			<ShareQuote :quote="currentQuote" />
		</div>
	</div>
</template>

<script>
import HistoryQuote from './components/HistoryQuote.vue';
import RandomQuote from './components/RandomQuote.vue';
import ShareQuote from './components/ShareQuote.vue';

export default {
	data() {
		return {
			currentQuote: { quote: '', author: '' },
			quoteHistory: [],
			language: 'en',
			isHistoryOpen: false,
		};
	},
	methods: {
		updateQuote(newQuote) {
			this.currentQuote = newQuote;
			this.quoteHistory.unshift(newQuote);
		},
		toggleHistory() {
			this.isHistoryOpen = !this.isHistoryOpen;
		},
	},
	components: {
		HistoryQuote,
		RandomQuote,
		ShareQuote,
	},
};
</script>
<style scoped>
.app {
	display: flex;
	height: 100vh;
	max-width: 1200px;
	margin: 0 auto;
	position: relative;
}

.burger {
	display: none;
	position: absolute;
	top: 10px;
	left: 10px;
	font-size: 30px;
	cursor: pointer;
	z-index: 2;
}

.history-overlay.open {
	transform: translateX(0);
}

.history-content {
	background-color: #f0f0f0;
	/* width: 80%; */
	max-width: 300px;
	height: 100%;
	padding: 30px 10px 10px 10px;
	box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.history-overlay {
	background-color: pink;
	/* margin: 0; */
	/* flex: 0 0 15%; */
}

@media (max-width: 700px) {
	.history {
		margin-top: 100px;
		display: none;
	}
	.history-overlay {
		position: fixed;
		top: 0px;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		transform: translateX(-100%);
		transition: transform 0.3s ease-in-out;
		z-index: 1;
	}
	.burger {
		display: block;
	}
}

@media (min-width: 701px) {
	.history {
		display: block;
	}
	.burger {
		display: none;
	}
}

.main-content {
	display: flex;
	flex-direction: column;
	flex: 1;
}

.settings-share {
	flex: 0 0 15%;
	background-color: #e8e8e8;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
}

.main-content > RandomQuote {
	flex: 1;
	padding: 20px;
	overflow-y: auto;
}
</style>
