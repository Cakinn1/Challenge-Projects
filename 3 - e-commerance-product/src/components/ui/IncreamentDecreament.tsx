import React from "react";

interface IncreamentDecreamentProps {
  setValue: (value: number) => void;
  counter: number;
  imgValue: string;
}

export default function IncreamentDecreament({
  imgValue,
  setValue,
  counter,
}: IncreamentDecreamentProps) {
  return (
    <img
      onClick={() => setValue(counter + 1)}
      src={`/images/${imgValue}.svg`}
      alt=""
      className={`object-cover cursor-pointer w-4 h-4 ${
        imgValue === "icon-minus" ? "pt-2" : ""
      }`}
    />
  );
}
