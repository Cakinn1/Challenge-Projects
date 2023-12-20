import React from "react";

export default function CardInfo({ value }: { value: string }) {
  return (
    <div className="flex items-center mt-2 gap-x-2">
      <h1 className="text-sm text-gray-500">{value}</h1>
      {value === "PG" || value === "18+" || value === "E" ? (
        ""
      ) : (
        <div className={`bg-gray-300 w-1 h-1 rounded-full`}></div>
      )}
    </div>
  );
}
