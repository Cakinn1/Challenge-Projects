import { useSelector } from "react-redux";
import { Theme } from "../redux/feature/themeSlice";
import { SearchProps } from "../typings/typings";

export default function Search({
  fetchGithubApi,
  inputValue,
  githubData,
  setInputValue,
}: SearchProps) {
  return (
    <form
      className="py-4"
      onSubmit={(e) => {
        fetchGithubApi();
        e.preventDefault();
      }}
    >
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={`input-shadow dark:input-shadow-1 w-full py-6 placeholder:text-sm md:placeholder:text-[15px] dark:text-[#efefef] dark:bg-[#1e2a47] focus:outline-none pl-[90px] pr-32 rounded-lg`}
          placeholder="Search Github username..."
        />
        <button
          onClick={() => fetchGithubApi()}
          className="absolute dark:input-shadow-1 right-[10px] text-white bg-blue-500 font-semibold top-[12px]  px-8 rounded-lg py-3"
        >
          Search
        </button>
        <img
          className="absolute top-[25px] left-10"
          src="/assets/icon-search.svg"
          alt=""
        />
      </div>
    </form>
  );
}
