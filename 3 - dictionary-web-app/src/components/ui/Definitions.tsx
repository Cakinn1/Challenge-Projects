import React from "react";

export default function Definitions({
  definitions,
}: {
  definitions: {
    definition: string;
    example: string;
  }[];
}) {
  return (
    <>
      {definitions.length > 0 &&
        definitions?.map((item, index) => (
          <div key={index} className="text-opacity-50">
            <li className="marker:text-[#A445ED] text-lg marker:rounded-full">
              {item.definition}
            </li>
            <p className="text-[#757575 text-sm pl-[26px]">{item.example}</p>
          </div>
        ))}
    </>
  );
}
