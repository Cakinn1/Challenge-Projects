import React from "react";
import { InputProps } from "../typings/interface";

export default function Search({
  setInputValue,
  onSearch,
  inputValue,
}: InputProps) {
  return (
    <div className="relative">
      <input
        placeholder="Search for any word..."
        className="bg-[#f5f5f5] placeholder:text-opacity-60 text-lg  placeholder:text-black font-bold text-black px-12  w-full py-4 rounded-2xl focus:outline-[#A445ED]"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={(e) => e.key === "Enter" && onSearch()}
        type="text"
        value={inputValue}
      />
      <img
        src="icon-search.svg"
        className="absolute top-0 cursor-pointer right-0 py-5 pr-7"
        onClick={() => inputValue.length > 5 && onSearch()}
        alt=""
      />
    </div>
  );
}
