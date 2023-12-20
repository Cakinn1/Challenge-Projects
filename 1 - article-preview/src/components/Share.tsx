import React from "react";

export default function Share() {
  return (
    <>
      <div
        className="absolute right-[6px] rotate-45 -top-[20px] w-7 h-7"
        style={{ backgroundColor: "hsl(214, 17%, 51%)" }}
      ></div>
      <div
        className="absolute gap-x-4 -top-16 flex rounded-2xl py-4 px-10 -right-[100px] h-[60px] "
        style={{ backgroundColor: "hsl(214, 17%, 51%)" }}
      >
        <h1 className="uppercase text-white tracking-widest">share</h1>
        <div className="flex  gap-x-4">
          <img className="w-5 h-5" src="./images/icon-facebook.svg" alt="" />
          <img className="w-5 h-5" src="./images/icon-twitter.svg" alt="" />
          <img className="w-5 h-5" src="./images/icon-pinterest.svg" alt="" />
        </div>
      </div>
    </>
  );
}
