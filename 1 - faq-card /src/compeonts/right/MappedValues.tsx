import React from "react";

export default function MappedValues({
  title,
  innerInfo,
  handleFaqChange,
  selectionValue,
}: {
  title: string;
  innerInfo: string;
  handleFaqChange: (value: string) => void;
  selectionValue: string;
}) {
  return (
    <div className="border-b pb-4">
      <div className="flex justify-between items-center gap-x-12">
        <h1 className={title === selectionValue ? "font-bold" : "font-normal"}>
          {title}
        </h1>
          <img
          className="cursor-pointer pr-5"
            onClick={() => handleFaqChange(title)}
            src="/images/icon-arrow-down.svg"
            alt=""
          />
      </div>
      {selectionValue === title && <h1 className="pt-2 text-left">{innerInfo}</h1>}
    </div>
  );
}
