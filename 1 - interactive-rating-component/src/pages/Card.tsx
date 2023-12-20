import React, { useState } from "react";
import { ThankYouProps } from "./ThankYouCard";
import Info from "../component/Info";
import Icon from "../component/Icon";

export default function Card({
  isThankYouOpen,
  setIsThankYouOpen,
  setStoredValue,
  storedValue,
}: ThankYouProps) {
  const starArray: string[] = ["1", "2", "3", "4", "5"];
  const [error, setError] = useState<boolean>(false);

  function handleRatingStored(storedValue: string) {
    setStoredValue(storedValue);
  }

  return (
    <section className="text-white">
      <div className="bg-[#19202a] w-[400px] space-y-4 rounded-2xl p-8 h-[400px]">
        <Icon />
        <Info />

        <div className="flex gap-x-4">
          {starArray.map((star) => (
            <Stars
              key={star}
              storedValue={storedValue}
              handleRatingStored={handleRatingStored}
              star={star}
            />
          ))}
        </div>

        <div>
          <button
            onClick={() => {
              if (!storedValue) {
                setError(true);
              } else {
                setIsThankYouOpen(!isThankYouOpen);
              }
            }}
            className="uppercase duration-300 hover:bg-white hover:text-[#fb7413] tracking-widest bg-[#fb7413] w-full py-3 rounded-full text-white"
          >
            submit
          </button>
          {error && !storedValue && (
            <div className="pt-2 text-red-500">Please click a number</div>
          )}
        </div>
      </div>
    </section>
  );
}

function Stars({
  star,
  handleRatingStored,
  storedValue,
}: {
  star: string;
  handleRatingStored: (value: string) => void;
  storedValue: string;
}) {
function handleStoredValue () {
  if(star === storedValue) {
    handleRatingStored('')
  } else {
    handleRatingStored(star)
  }
}

  return (
    <div
    onClick={() => handleStoredValue()}
      className={`p-4 hover:bg-gray-500 cursor-pointer duration-300 rounded-full w-full flex justify-center items-center ${
        star === storedValue ? "bg-[#fb7413]" : "bg-[#252d37]"
      }`}
    >
      {star}
    </div>
  );
}
