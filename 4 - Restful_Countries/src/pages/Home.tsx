import React, { useEffect, useState } from "react";
import FilterSearch from "../components/FilterSearch";
import { CountrySearchProps } from "../typings/typings";
import { fetchFilterByRegion, fetchSingleCountry } from "../api/api";
import CountryCards from "../components/CountryCards";
import Loading from "../components/Loading";

export default function Home() {
  const [countryData, setCountryData] = useState<CountrySearchProps[] | null>(
    null
  );
  const [searchInputText, setSearchInputText] = useState<string>("");
  const [searchFilterText, setSearchFilterText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  async function fetchCountries() {
    try {
      setIsLoading(true);
      const data = await fetchSingleCountry(searchInputText);
      setCountryData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
      console.error(error);
      setIsLoading(false);
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      fetchCountries();
    }
  };

  async function fetchRegionCountries() {
    try {
      if (!searchFilterText) {
        setIsLoading(true);
        const data = await fetchFilterByRegion("all");
        setCountryData(data);
        setIsLoading(false);
      } else {
        setIsLoading(true);
        const data = await fetchFilterByRegion(searchFilterText);
        setCountryData(data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }

  useEffect(() => {
    fetchRegionCountries();
  }, [searchFilterText]);
  return (
    <main className="max-w-[1440px] mx-auto pt-6">
      <FilterSearch
        handleKeyPress={handleKeyPress}
        setSearchInputText={setSearchInputText}
        setSearchFilterText={setSearchFilterText}
        searchFilterText={searchFilterText}
      />
      {isLoading ? <Loading /> : <CountryCards countryData={countryData} />}
    </main>
  );
}
