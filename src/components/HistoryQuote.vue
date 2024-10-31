<template>
	<div class="quote-history-container">
		<h3 class="quote-title">Quote History</h3>

		<div class="filter">
			<label for="filterSelect">Show:</label>
			<select id="filterSelect" v-model="filter">
				<option value="all">All</option>
				<option value="liked">Liked</option>
				<option value="unliked">Unliked</option>
			</select>
		</div>

		<ul class="quote-list">
			<li v-for="(item, index) in filteredQuotes" :key="index" class="history-item">
				<span :class="{ liked: item.liked }">{{ item.quote }} — {{ item.author }}</span>
				<div class="quote-actions">
					<button @click="toggleLike(index)" :class="['history-like', { 'history-like-active': item.liked }]"></button>
					<button @click="removeQuote(index)" class="history-remove"></button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: ['quoteHistory'],
	data() {
		return {
			filter: 'all',
		};
	},
	computed: {
		filteredQuotes() {
			if (this.filter === 'liked') {
				return this.quoteHistory.filter(item => item.liked);
			} else if (this.filter === 'unliked') {
				return this.quoteHistory.filter(item => !item.liked);
			} else {
				return this.quoteHistory;
			}
		},
	},
	methods: {
		toggleLike(index) {
			this.quoteHistory[index].liked = !this.quoteHistory[index].liked;
			this.saveHistory();
		},
		removeQuote(index) {
			this.quoteHistory.splice(index, 1);
			this.saveHistory();
		},
		saveHistory() {
			localStorage.setItem('quoteHistory', JSON.stringify(this.quoteHistory));
		},
	},
};
</script>

<style scoped>
.quote-title {
	text-align: center;
	font-weight: 600;
}
.quote-history-container {
	max-height: 100%;
	overflow-y: auto;
	border: 1px solid #ddd;
	padding: 10px;
	border-radius: 5px;
}

.quote-list {
	padding: 0;
	margin: 0;
	list-style: none;
}
.history-item {
	margin-bottom: 20px;
	padding: 10px 20px 30px 10px;
	border-bottom: 1px solid #ddd;
	position: relative;
}
.liked {
	color: #007bff;
	font-weight: bold;
}
.history-like {
	width: 30px;
	height: 30px;
	background-image: url(../img/heart-o.png);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	border: none;
	position: absolute;
	bottom: 10px;
	right: 0;
	transition: transform 0.3s ease;
}

.history-like-active {
	width: 25px;
	height: 30px;
	background-image: url(../img/heart.png);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	border: none;
	position: absolute;
	bottom: 10px;
	right: 0;
	transition: transform 0.3s ease;
}
.history-like:hover {
	transform: scale(1.25);
}
.history-remove {
	width: 20px;
	height: 20px;
	background-image: url(../img/close-big.png);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	border: none;
	position: absolute;
	top: 0;
	right: 0;
	transition: transform 0.3s ease;
}
.history-remove:hover {
	transform: scale(1.5);
}

.filter {
	margin: 40px 0;
	display: flex;
	justify-content: end;
}

#filterSelect {
	width: 50%;
	height: 25px;
	color: #fff;
	background-color: #166ebf;
	border: 1px solid #fff;
}
</style>
