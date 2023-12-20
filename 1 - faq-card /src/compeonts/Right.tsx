import React, { useState } from "react";
import { DataProps, data } from "../contants/data";
import MappedValues from "./right/MappedValues";

export default function Right() {
  const [faqData, setFaqData] = useState<DataProps[]>(data);
  const [selectionValue, setSelectionValue] = useState<string>("");

  function handleFaqChange(value: string) {
    setSelectionValue(value);
    if(value === selectionValue) {
      setSelectionValue('')
    }
  }

  return (
    <div className="md:w-[50%] text-center md:text-left space-y-6  p-12 pt-0 md:pt-24 md:p-24 md:pl-0">
      <h1 className="font-bold text-4xl text-[#1d1e35] ">FAQ</h1>
      <div className="space-y-6">

      {faqData.map((faq) => (
        <MappedValues
        handleFaqChange={handleFaqChange}
        selectionValue={selectionValue}
        innerInfo={faq.innerInfo}
        title={faq.title}
        key={faq.title}
        />
        ))}
        </div>
    </div>
  );
}
