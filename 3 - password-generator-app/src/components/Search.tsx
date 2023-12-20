import React, { useEffect } from "react";
export interface SearchProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  upperCaseTicked: boolean;
  setUpperCaseTicked: (value: boolean) => void;
  lowerCaseTicked: boolean;
  setLowerCaseTicked: (value: boolean) => void;
  numbersTicked: boolean;
  setNumbersTicked: (value: boolean) => void;
  symbolsTicked: boolean;
  setSymbolsTicked: (value: boolean) => void;
  storeRandomCharacters: () => void;
}

export default function Search({
  inputValue,
  setInputValue,
  storedResult,
}: {
  inputValue: string;
  setInputValue: (value: string) => void;
  storedResult: string;
}) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="bg-[#23222A]  rounded-t-lg px-10 flex justify-between py-6"
    >
      {storedResult ? (
        <span className="bg-transparent text-2xl tracking-wide  w-full text-[#e7e6eb] font-semibold">
          {storedResult}
        </span>
      ) : (
        <span className="bg-transparent text-2xl tracking-wide opacity-40 uppercase w-full text-[#e7e6eb] font-semibold">
          p4$5w0rd!
        </span>
      )}
      <img
        src="./assets/images/icon-copy.svg"
        className="w-7 cursor-pointer"
        alt=""
      />
    </form>
  );
}
