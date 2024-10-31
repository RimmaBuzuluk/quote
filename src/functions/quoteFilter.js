import { FilterTypes } from '@/constants/filtersQuote';

export function filterQuotes(quotes, filter) {
	switch (filter) {
		case FilterTypes.LIKED:
			return quotes.filter(item => item.liked);
		case FilterTypes.UNLIKED:
			return quotes.filter(item => !item.liked);
		default:
			return quotes;
	}
}
