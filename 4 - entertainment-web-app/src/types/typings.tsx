// main movie props
export type Movie = {
	title: string
	thumbnail: {
		trending?: {
			small: string
			large: string
		}
		regular: {
			small: string
			medium: string
			large: string
		}
	}
	year: number
	category: string
	rating: string
	isTrending: boolean
	isBookmarked?: boolean
}

// search

export interface SearchEvents {
  inputValue: string;
  setInputValue: (value: string) => void;
  fetchMovieData: () => void;
}
