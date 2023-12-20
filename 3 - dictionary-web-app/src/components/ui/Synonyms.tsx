import React from "react";

export default function Synonyms({ synonyms }: { synonyms: string[] }) {
  return (
    <>
      {synonyms.length > 0 && (
        <div className="py-4 flex gap-x-2 ">
          <h1 className="text-2xl text-[#050505] text-opacity-50">Synonyms</h1>
          <p className="text-[#A445ED] pt-[5px]">{synonyms.join(", ")}</p>
        </div>
      )}
    </>
  );
}
