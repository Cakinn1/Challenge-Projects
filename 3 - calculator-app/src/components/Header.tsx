import React, { useEffect, useState } from "react";

export default function Header() {
  const [selectedValue, setSelectedValue] = useState<string>("");

  function handleSelection(value: string) {
    setSelectedValue(value);
  }

  function Buttons({ value }: { value: string }) {
    return (
      <div
        onClick={() => handleSelection(value)}
        className={`w-3 ${
          selectedValue === value ? "bg-red-400" : "bg-none"
        } h-3  rounded-full shadow-lg`}
      ></div>
    );
  }

  useEffect(() => {
    handleSelection("1");
  }, []);
  return (
    <nav className="flex justify-between items-center">
      <div>
        <h1 className="font-bold text-white text-3xl">calc</h1>
      </div>

      <div className="flex gap-x-3 ">
      <h1 className="mt-auto uppercase text-white font-bold text-sm">theme</h1>
      <div>
        <div className="flex gap-x-4 px-2 text-white font-semibold">
          <h1>1</h1>
          <h1>2</h1>
          <h1>3</h1>
        </div>
        <div className="bg-[#232c43] gap-x-2 flex justify-center items-center p-2 rounded-full">
          <Buttons value="1" />
          <Buttons value="2" />
          <Buttons value="3" />
          </div>
        </div>
      </div>
    </nav>
  );
}
