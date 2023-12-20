import React from "react";
import { TotalProps } from "./Calculator";

export default function Total({
  result,
  firstNumber,
  equals,
  operation,
  secondNumber,
}: TotalProps) {
  return (
    <div
      style={{ backgroundColor: "hsl(224, 36%, 15%)" }}
      className="font-bold text-4xl my-4 min-h-[100px] items-center rounded-2xl px-10 flex justify-end  bg-black text-white"
    >
      {firstNumber} {operation} {secondNumber} {equals && "="} {result}
    </div>
  );
}
