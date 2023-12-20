import React from "react";
import { SearchEvents } from "../../../types/typings";
import { IoIosSearch } from "react-icons/io";
export default function Search({
  fetchMovieData,
  inputValue,
  setInputValue,
}: SearchEvents) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className=" text-white mt-10 h-10 relative"
    >
      <IoIosSearch
        onClick={() => fetchMovieData()}
        className="absolute z-50 cursor-pointer top-4 text-3xl"
      />
      <input
        type="text"
        placeholder="Search for movies or TV series"
        className="w-full max-w-[600px] h-16 px-14 bg-transparent text-2xl  outline-none  md:focus:border-b focus:outline-none"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => fetchMovieData()} className="hidden"></button>
    </form>
  );
}
