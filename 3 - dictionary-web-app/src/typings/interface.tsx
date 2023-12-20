export interface InputProps {
  setInputValue: (value: string) => void;
  onSearch: () => void;
  inputValue: string;
}

export interface DataProps {
  word: string;
  phonetic: string;
  meanings: Array<{
    partOfSpeech: string;
    synonyms: string[]
    antonyms: string[]
    definitions: {
      definition: string;
      example: string
    }[];
  }>;
  sourceUrls: string[]
  license: {
    url: string
    name: string
  }
  phonetics: {
    audio: string
  }[]
}

export interface MainProps {
  data: DataProps | null;
}
