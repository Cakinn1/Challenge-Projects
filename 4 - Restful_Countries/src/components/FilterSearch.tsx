import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaMagnifyingGlass } from "react-icons/fa6";
import { SearchInput, filterSearchProps } from "../typings/typings";
import { InputFields } from "../api/constraints";

export default function FilterSearch({
  setSearchInputText,
  handleKeyPress,
  setSearchFilterText,
  searchFilterText,
}: filterSearchProps) {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  return (
    <form
      className="flex md:justify-between flex-col md:flex-row  md:items-center px-12"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="md:w-[400px] lg:w-[600px] text-sm md:text-lg relative rounded-md">
        <input
          type="text"
          onChange={(e) => setSearchInputText(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Search for a country..."
          className="w-full py-3 px-[65px] dark:bg-[#2b3945] dark:text-white rounded-md shadow-md focus:outline-none"
        />
        <FaMagnifyingGlass className="text-lg absolute dark:text-white top-[30%] left-7" />
      </div>
      <div
        className="relative cursor-pointer pt-[30px] md:pt-0"
        onClick={() => setIsFilterOpen(!isFilterOpen)}
      >
        <div className="flex items-center dark:bg-[#2b3945] dark:text-white gap-x-12 p-4 w-[210px]  shadow-md rounded-md">
          <h1>Filter By Region</h1>
          {isFilterOpen ? (
            <FaChevronUp className="cursor-pointer" />
          ) : (
            <FaChevronDown className="cursor-pointer" />
          )}
        </div>
        {isFilterOpen && (
          <div className="absolute space-y-1 dark:text-white dark:bg-[#2b3945] bg-white lg:top-[65px] top-[100px] rounded-md shadow-md z-50 left-0  w-[210px]">
            {InputFields.map((item) => (
              <InputField
                setIsFilterOpen={setIsFilterOpen}
                setSearchFilterText={setSearchFilterText}
                url={item.url}
                regionFiltered={item.regionFiltered}
                key={item.url}
              />
            ))}
          </div>
        )}
      </div>
    </form>
  );
}
function InputField({
  setSearchFilterText,
  setIsFilterOpen,
  regionFiltered,
  url,
}: SearchInput) {
  return (
    <h2
      className={`duration-300  active:bg-gray-300 hover:duration-300 p-4 py-2 ease-in-out dark:hover:bg-gray-600 hover:bg-gray-300 ${
        url === InputFields[0].url ? "rounded-t-lg" : ""
      }`}
      onClick={() => {
        if (setSearchFilterText && setIsFilterOpen) {
          setSearchFilterText(url);
          setIsFilterOpen(false);
        }
      }}
    >
      {regionFiltered}
    </h2>
  );
}
