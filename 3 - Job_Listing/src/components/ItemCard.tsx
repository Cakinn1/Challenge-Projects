import React, { useEffect, useState } from "react";
import data from "../data.json";
import { ItemCardDataProps } from "../typings/interface";

interface ItemCardDataPropsExtended extends ItemCardDataProps {
    handleFilter: (value: string) => void
}

interface ItemCardData {
    itemCardData: ItemCardDataProps[]
    setItemCardData: (value: ItemCardDataProps[]) => void
}

export default function ItemCard({setItemCardData, itemCardData}: ItemCardData) {
  const [filteringItem, setFilteringData] = useState<ItemCardDataProps[]>(data);

  function handleFilter(value: string) {
    const searchTerm = value.toLowerCase()
    console.log(searchTerm)
    const updateValue = filteringItem.filter((item) => {
      const filterByLevel = item.level.toLowerCase().includes(searchTerm);
      const filterByRole = item.role.toLowerCase().includes(searchTerm)
      const filterByLanguages = item.languages.find((language) =>{
      return language.toLowerCase().includes(searchTerm)
      });
      const filterByFramework = item.tools.find((item) => {
        return item.toLowerCase().includes(searchTerm)
      })
      return filterByLevel || filterByLanguages || filterByRole || filterByFramework
    });
    setItemCardData(updateValue);
  }

 
  console.log(itemCardData);

  return (
    <section className="max-w-[1100px]  space-y-8 mx-auto pt-4">
      {itemCardData.map((card) => (
        <SingleItemCard {...card} handleFilter={handleFilter} />
      ))}
    </section>
  );
}

function SingleItemCard({
  company,
  contract,
  featured,
  id,
  languages,
  level,
  location,
  logo,
  position,
  postedAt,
  role,
  tools,
  isNew,
  handleFilter
}: ItemCardDataPropsExtended) {
  return (
    <>
      <div
        key={id}
        className={`${
          featured ? "border-l-[5px] border-[#5CA5A5]" : ""
        } flex rounded-md py-8 px-6 bg-white`}
      >
        <figure className="my-auto">
          <img src={logo} alt="" />
        </figure>
        <div className="ml-4 flex-grow">
          <div className="flex items-center gap-x-2">
            <h1 className="text-lg font-bold text-[#5CA5A5]"> {company}</h1>
            {isNew && (
              <p className="uppercase bg-[#5CA5A5] rounded-3xl text-white font-semibold px-2 p-1 text-sm">
                new!
              </p>
            )}
            {featured && (
              <p className="uppercase text-white bg-black rounded-3xl px-2 py-1 text-sm font-semibold">
                featured
              </p>
            )}
          </div>
          <div className="flex justify-between w-full  items-center">
            <h1
              onClick={() => prompt("not added ^_^")}
              className="font-bold text-lg hover:text-[#5CA5A5] cursor-pointer transition-colors duration-300"
            >
              {position}
            </h1>
            <div className="flex gap-x-3">
              <h1 onClick={() => handleFilter(role)} className="text-[#5ca5a5] hover:bg-opacity-100 hover:text-white duration-300 transition-all flex cursor-pointer  px-4 py-2 rounded-md bg-[#5CA5A5] bg-opacity-10  font-bold ">
                {role}
              </h1>
              <h1 onClick={() => handleFilter(level)} className="text-[#5ca5a5] hover:bg-opacity-100 hover:text-white duration-300 transition-all flex cursor-pointer  px-4 py-2 rounded-md bg-[#5CA5A5] bg-opacity-10  font-bold ">
                {level}
              </h1>
              {languages.map((language) => (
                <h1  onClick={() => handleFilter(language)} className="text-[#5ca5a5] hover:bg-opacity-100 hover:text-white duration-300 transition-all flex cursor-pointer  px-4 py-2 rounded-md bg-[#5CA5A5] bg-opacity-10  font-bold ">
                  {language}
                </h1>
              ))}
              {tools.map((tool) => (
                <h1 onClick={() => handleFilter(tool)} className="text-[#5ca5a5] hover:bg-opacity-100 hover:text-white duration-300 transition-all flex cursor-pointer  px-4 py-2 rounded-md bg-[#5CA5A5] bg-opacity-10  font-bold ">
                  {tool}
                </h1>
              ))}
            </div>
          </div>
          <div className="text-[#B7C4C4] gap-x-4 flex items-center ">
            <div className="flex items-center gap-x-3">
              <p>{postedAt}</p>
              <div className="w-1 h-1 bg-[#b7c4c4] rounded-full"></div>
            </div>
            <div className="flex items-center gap-x-3">
              <p>{contract}</p>
              <div className="w-1 h-1 bg-[#b7c4c4] rounded-full"></div>
            </div>
            <div className="flex items-center gap-x-3">
              <p>{location}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
