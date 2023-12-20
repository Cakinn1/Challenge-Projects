import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Search from "./components/Search";
import { fetchData } from "./api";
import Main from "./components/Main";
import { DataProps } from "./typings/interface";
import Error from "./components/ui/Error";
import Loading from "./components/ui/Loading";

export default function App() {
  const [data, setData] = useState<DataProps | null>(null);
  const [inputValue, setInputValue] = useState<string>("keyboard");
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  function onSearch() {
    fetchApi();
    setInputValue('')
  }
  async function fetchApi() {
    try {
      setLoading(true);
      const data = await fetchData(inputValue);
      setData(data[0]);
      setError(false);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.error(error);
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="max-w-[737px] px-6 mb-20  mx-auto">
      <Nav />
      <Search
        setInputValue={setInputValue}
        onSearch={onSearch}
        inputValue={inputValue}
      />
      {loading ? <Loading /> : error ? <Error /> : <Main data={data} />}
    </div>
  );
}
// Completed base:
// - need to add dark mode, functionality done, just need css added (boring but easy)
// - add animations to swapping dark mode to light mode (medium, suck at css)
// - add audio to play button, audio is already within API (hard never done it before)
// 
// 
// 
// 
// 
// 
// 
// 




