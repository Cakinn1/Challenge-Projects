export default {}


export interface CountrySearchProps {
    name: {
        common: string
    }
    population: number
    region: string
    capital: string[]
    flags: {
        png: string
    }
}

export interface filterSearchProps {
    setSearchInputText: (e: string) => void;
    handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    setSearchFilterText: (value: string) => void;
    searchFilterText: string;
  }
  
  export interface SearchInput {
    setSearchFilterText?: (value: string) => void;
    setIsFilterOpen?: (value: boolean) => void;
    url: string;
    regionFiltered: string;
  }