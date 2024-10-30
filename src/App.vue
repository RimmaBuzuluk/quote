<template>
	<div id="app" class="app">
		<HistoryQuote :quoteHistory="quoteHistory" class="history" />

		<RandomQuote :onNewQuote="updateQuote" :language="language" class="main-content" />
		<div class="settings-share">
			<Settings :language.sync="language" />
			<ShareQuote :quote="currentQuote" />
		</div>
	</div>
</template>

<script>
import HistoryQuote from './components/HistoryQuote.vue';
import RandomQuote from './components/RandomQuote.vue';
import Settings from './components/Settings.vue';
import ShareQuote from './components/ShareQuote.vue';

export default {
	data() {
		return {
			currentQuote: { quote: '', author: '' },
			quoteHistory: [],
			language: 'en',
		};
	},
	methods: {
		updateQuote(newQuote) {
			this.currentQuote = newQuote;
			this.quoteHistory.unshift(newQuote);
		},
	},
	components: {
		HistoryQuote,
		RandomQuote,
		Settings,
		ShareQuote,
	},
};
</script>
<style scoped>
.app {
	display: flex;
	height: 100vh;
}

.history {
	flex: 0 0 10%;
	background-color: #f0f0f0;
	padding: 10px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	overflow-y: auto;
}

.main-content {
	display: flex;
	flex-direction: column;
	flex: 1;
}

.settings-share {
	flex: 0 0 10%;
	background-color: #e8e8e8;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}

.main-content > RandomQuote {
	flex: 1;
	padding: 20px;
	overflow-y: auto;
}
</style>
