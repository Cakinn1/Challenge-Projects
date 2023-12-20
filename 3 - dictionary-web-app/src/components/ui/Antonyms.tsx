import React from "react";

export default function Antonyms({ antonyms }: { antonyms: string[] }) {
  return (
    <>
      {antonyms.length > 0 && (
        <div className="py-4 flex gap-x-2 ">
          <h1 className="text-2xl text-[#050505] text-opacity-50">Antonyms</h1>
          <div className="flex flex-wrap">
            <p className="text-[#A445ED]"> {antonyms.join(", ")}</p>
          </div>
        </div>
      )}
    </>
  );
}
