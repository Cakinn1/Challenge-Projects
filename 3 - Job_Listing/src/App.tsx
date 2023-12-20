import Header from "./components/Header";
import { FaXmark } from "react-icons/fa6";
import data from "./data.json";
import ItemCard from "./components/ItemCard";
import { useState } from "react";
import { ItemCardDataProps } from "./typings/interface";

export default function App() {
  const [itemCardData, setItemCardData] = useState<ItemCardDataProps[]>(data);

  function handleClearItems () {
    setItemCardData(data)
  }

  return (
    <>
      <Header />
      <div className="max-w-[1100px]  rounded-lg  shadow-lg relative -top-5  mx-auto">
        <div className="flex gap-x-4 p  bg-white  py-4 px-5 ">
          <HandleInputValues />
          <HandleInputValues />
          <h1 onClick={() => handleClearItems()} className="flex hover:underline cursor-pointer duration-300 font-bold hover:text-[#5ca5a5] items-center ml-auto">
            Clear
          </h1>
        </div>
      </div>
      <ItemCard  setItemCardData={setItemCardData} itemCardData={itemCardData}/>
    </>
  );
}

function HandleInputValues() {
  return (
    <div className="flex gap-x-2  rounded-md pl-4 items-center  bg-[#5CA5A5] bg-opacity-10">
      <h1 className="text-[#5ca5a5] font-bold ">Frontend</h1>
      <div className="py-1 px-2 rounded-r-md bg-[#5CA5A5] duration-300 transition-all cursor-pointer hover:bg-[#2b3939] ">
        <FaXmark className="text-white text-2xl font-bold" />
      </div>
    </div>
  );
}
