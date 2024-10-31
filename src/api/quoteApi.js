import { ErrorMessages } from '@/constants/ErrorMessages';

export async function fetchRandomQuote() {
	const response = await fetch('https://quotes-api-self.vercel.app/quote');

	if (!response.ok) {
		throw new Error(`${ErrorMessages.FETCH_ERROR}`);
	}

	const data = await response.json();
	return { quote: data.quote, author: data.author };
}
