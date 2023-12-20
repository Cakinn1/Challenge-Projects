import React from "react";
import { RxCross2 } from "react-icons/rx";
export default function IsBurgerMenu({
  setBurgerMenu,
  burgerMenu,
}: {
  setBurgerMenu: (value: boolean) => void;
  burgerMenu: boolean;
}) {
  return (
    <div className="absolute w-full flex flex-col h-[400px] rounded-b-2xl p-12  bg-white z-50">
      <div className="ml-auto">
        <RxCross2 className="text-3xl cursor-pointer hover:scale-105 duration-300 active:scale-90" onClick={() => setBurgerMenu(!burgerMenu)} />
      </div>
      <div className="space-y-2">
        <h1 className="font-bold text-lg">collections</h1>
        <h1 className="font-bold text-lg">Men</h1>
        <h1 className="font-bold text-lg">Women</h1>
        <h1 className="font-bold text-lg">About</h1>
        <h1 className="font-bold text-lg">Contact</h1>
      </div>
    </div>
  );
}
