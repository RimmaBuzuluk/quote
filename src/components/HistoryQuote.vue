<script>
import { FilterTypes } from '@/constants/filtersQuote';
import { filterQuotes } from '@/functions/quoteFilter';
import { ref, computed, watch } from 'vue';

export default {
	props: ['quoteHistory'],
	setup(props) {
		const filter = ref(FilterTypes.ALL);

		const filteredQuotes = computed(() => filterQuotes(props.quoteHistory, filter.value));

		const toggleLike = index => {
			props.quoteHistory[index].liked = !props.quoteHistory[index].liked;
			saveHistory();
		};

		const removeQuote = index => {
			props.quoteHistory.splice(index, 1);
			saveHistory();
		};

		const unlikeAllQuotes = () => {
			props.quoteHistory.forEach(item => (item.liked = false));
			saveHistory();
		};

		const saveHistory = () => {
			localStorage.setItem('quoteHistory', JSON.stringify(props.quoteHistory));
		};

		watch(filteredQuotes, saveHistory);

		return {
			filter,
			filteredQuotes,
			toggleLike,
			removeQuote,
			unlikeAllQuotes,
		};
	},
};
</script>

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
		<button class="unlike" @click="unlikeAllQuotes">Unlike All</button>
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

<style scoped>
.unlike {
	box-sizing: border-box;
	width: 40px;
	height: 40px;
	padding: 5px;
	background-color: #166ebf;
	font-weight: 600;
	font-size: 8px;
	border-radius: 40px;
	border: 1px solid white;
	color: white;
	margin: 10px 0;
}
.quote-title {
	text-align: center;
	font-weight: 600;
}
.quote-history-container {
	display: flex;
	flex-direction: column;
	height: 100%;
	border: 1px solid #ddd;
	padding: 10px;
	border-radius: 5px;
	position: relative;
	min-width: 300px;
}

.filter {
	margin: 10px 0;
	display: flex;
	justify-content: end;
}

.quote-list {
	max-height: 70%;
	overflow-y: scroll;
	padding: 0;
	margin: 0;
	list-style: none;
	display: flex;
	flex-direction: column-reverse;
	scrollbar-width: none;
	position: absolute;
	bottom: 0;
}

.quote-list::-webkit-scrollbar {
	display: none;
}

.history-item {
	box-sizing: border-box;
	margin-bottom: 20px;
	padding: 20px 20px 50px 10px;
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
	margin-right: 4px;
	background-image: url(../img/heart-o.png);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	border: none;
	border-radius: 30px;

	position: absolute;
	bottom: 10px;
	right: 0;
	transition: transform 0.3s ease;
}

.history-like-active {
	width: 30px;
	height: 30px;
	border-radius: 30px;

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
	margin-right: 5px;
	border-radius: 20px;
}
.history-remove:hover {
	transform: scale(1.25);
}

#filterSelect {
	width: 50%;
	height: 25px;
	color: #fff;
	background-color: #166ebf;
	border: 1px solid #fff;
}
</style>
