import { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import UserCard from "./components/UserCard";
import { fetchApi } from "./api/api";
import { GithubDataProps } from "./typings/typings";

export default function App() {
  const [githubData, setGithubData] = useState<GithubDataProps | null>(null);
  const [inputValue, setInputValue] = useState<string>("Cakinn1");
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function fetchGithubApi() {
    try {
      setIsLoading(true);
      // const response = await fetchApi(inputValue);
      const data = await fetch(`https://api.github.com/users/${inputValue}`);
      const response = await data.json();
      console.log(response, response.status);
      if ((await response.status) === 404) {
        console.log("1");
        setError(true);
      } else {
        setError(false);
      }
      setIsLoading(false);
      setGithubData(response);
      setInputValue("");
    } catch (error) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchGithubApi();
  }, []);

  return (
    <div className="max-w-[1000px] tracking-wide mx-auto lg:p-32 md:p-16 p-6 duration-300">
      <Header />
      <Search
        fetchGithubApi={fetchGithubApi}
        githubData={githubData}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <UserCard githubData={githubData} error={error} isLoading={isLoading} />
    </div>
  );
}
