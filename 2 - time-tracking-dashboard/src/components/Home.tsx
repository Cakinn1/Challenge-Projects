import React, { useState } from "react";
import data from "../api/data.json";
import {
  CardProps,
  DataProps,
  InputValueProps,
  Props,
} from "../typings/typings";

export default function Home() {
  const [itemData, setItemData] = useState<DataProps[]>(data);
  const [selected, setSelected] = useState<string>("weekly");

  const onClickValues: string[] = ["daily", "weekly", "monthly"];
  function handleClick(value: string) {
    setSelected(value);
  }
  function HandleInputValue({ handleClick, value, selected }: InputValueProps) {
    console.log(selected, value);
    const h4Value = document.getElementById("input-value__text");

    return (
      <h4
        id="input-value__text"
        className={`lg:font-[300] font-[400]   cursor-pointer ${
          selected === value ? "text-" : ""
        }`}
        onClick={() => handleClick(value)}
      >
        {value[0].toUpperCase() + value.slice(1)}
      </h4>
    );
  }

  const dataMatchedToColorAndImage: Props[] = [
    {
      image: "/icon-work.svg",
      color: "hsl(15, 100%, 70%)",
    },
    {
      image: "/icon-play.svg",
      color: "hsl(195, 74%, 62%)",
    },
    {
      image: "/icon-study.svg",
      color: "hsl(348, 100%, 68%)",
    },
    {
      image: "/icon-exercise.svg",
      color: "hsl(145, 58%, 55%)",
    },
    {
      image: "/icon-social.svg",
      color: "hsl(264, 64%, 52%)",
    },
    {
      image: "/icon-self-care.svg",
      color: "hsl(43, 84%, 65%)",
    },
  ];

  function Card({
    index,
    title,
    timeframes,
    selected,
    dataMatchedToColorAndImage,
  }: CardProps) {
    const selectedATimeFrame = timeframes[selected];
    console.log(dataMatchedToColorAndImage[index]);
    return (
      <div
        className="w-full lg:w-[30%] md:w-[45%] relative rounded-2xl bg- flex-grow mb-8 "
        style={{
          backgroundColor: `${dataMatchedToColorAndImage[index].color}`,
        }}
      >
        <div className="absolute top-0 right-0">
          <img src={dataMatchedToColorAndImage[index].image} alt="" />
        </div>
        <div className="rounded-t-2xl mt-[51px] hover:bg-blue-900 duration-200 ease-in-out  cursor-pointer relative rounded-2xl main-card p-7">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-[500]">{title}</h1>
            <img
              src="/icon-ellipsis.svg"
              className="duration-300 ease-in-out cursor-pointer hover:brightness-150"
              alt=""
            />
          </div>
          <h1 className="lg:text-7xl text-2xl mt-3 font-[300]">
            {selectedATimeFrame?.current}hrs
          </h1>
          <p className="font-[300] mb-3 ">
            last {selected[0].toUpperCase() + selected.slice(1, selected.length)} - {selectedATimeFrame?.previous}hrs
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full">
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 my-auto gap-x-8 lg:px-32 px-8 ">
        <div className="lg:max-w-[300px]    rounded-2xl  lg:max-h-[540px] main-card">
          <div
            id="inner-div"
            className="rounded-2xl gap-x-4 lg:gap-x-0  flex lg:block  lg:pb-[100px] p-7 "
          >
            <img
              src="/image-jeremy.png"
              className="object-cover mb-8 h-20 border-2 border-white rounded-full"
              alt=""
            />

            <div className="flex flex-col mt-3">
              <h4 className="font-[300]">Report for</h4>
              <h1 className="lg:text-5xl text-3xl font-[300]">Jeremy Robson</h1>
            </div>
          </div>

          <div className="p-7 lg:space-y-2 flex justify-between lg:justify-normal lg:block  lg:max-w-[40px]">
            {onClickValues.map((value) => (
              <HandleInputValue
                selected={selected}
                key={value}
                handleClick={handleClick}
                value={value}
              />
            ))}
          </div>
        </div>
        <div className="flex gap-x-8 flex-wrap lg:w-[1100px]">
          {itemData.map((data, index) => (
            <Card
              dataMatchedToColorAndImage={dataMatchedToColorAndImage}
              selected={selected}
              title={data.title}
              index={index}
              key={index}
              timeframes={data.timeframes}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
