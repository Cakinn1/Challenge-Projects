import React from "react";
import { SearchProps } from "./Nav";

export default function Search({
  setInputValue,
  inputValue,
  addToDo,
}: SearchProps) {
  return (
    <form
      onSubmit={(e) => {
        addToDo();
        e.preventDefault();
      }}
      className="relative dark:bg-[#161722] duration-300 bg-white shadow-md flex rounded-lg"
    >
      <div className="px-4 py-5 duration-300">
        <h1 className="border rounded-full duration-300  h-6 w-6 border-black dark:border-[#777a92]"></h1>
      </div>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        type="text"
        placeholder="Create a new todo.."
        className="dark:bg-[#161722] pr-10  duration-300 dark:text-white bg-white placeholder:text-gray-300 focus:outline-none text-lg rounded-r-lg px-1 w-full"
      />
    </form>
  );
}
