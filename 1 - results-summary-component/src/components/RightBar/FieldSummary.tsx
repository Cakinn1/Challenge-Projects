import React from "react";
import { Props } from "./RightBar";

export default function FieldSummary({
  category,
  score,
  icon,
  colorArray,
  index,
}: Props) {
  console.log(colorArray[index]);

  return (
    <div
      style={{ backgroundColor: `${colorArray[index]}15` }}
      className={`flex items-center  justify-between py-3 rounded-lg px-4`}
    >
      <div className="flex gap-x-2">
        <img src={icon} alt="" />
        <h1 style={{ color: colorArray[index] }} className="font-semibold">
          {category}
        </h1>
      </div>

      <div>
        <h1>{score} / 100</h1>
      </div>
    </div>
  );
}
