import React from "react";

export default function ScoreCard({ counter }: { counter: number }) {
  return (
    <div className="flex items-center justify-center flex-col bg-white rounded-2xl w-[200px] h-[140px]">
      <h4 className="text-[#2A46CO]">Score</h4>
      <h1 className="text-7xl text-[#3b4363]">{counter}</h1>
    </div>
  );
}
