import React from "react";
import Share from "./Share";

export default function Aritcle({
  isShareOpen,
  setIsShareOpen,
}: {
  isShareOpen: boolean;
  setIsShareOpen: (value: boolean) => void;
}) {
  return (
    <div className="w-full md:w-[60%] space-y-4 bg-white md:rounded-r-2xl rounded-b-2xl  p-8">
      <h1>
        Shift the overall look and feel by adding these wonderful touoches to
        furniture in your home.
      </h1>
      <p>
        Ever been in a room and felt like something was missing? Perhaps it felt
        sightly bare and uninviting. I've got some simple tips to help you make
        any room feel complete.
      </p>

      <div className="flex  w-full">
        <figure className="w-[17%]">
          <img
            className="rounded-full h-14 w-14"
            src="/images/avatar-michelle.jpg"
            alt=""
          />
        </figure>
        <div className="flex justify-between items-center w-[75%] relative">
          <div className="">
            <h1>Michelle</h1>
            <p>28 Jun 2020</p>
          </div>
          <div>
            <div
              className="p-1 shadow-md rounded-full cursor-pointer"
              style={{ backgroundColor: "hsl(214, 17%, 51%)" }}
              onClick={() => setIsShareOpen(!isShareOpen)}
            >
              <img
                src="./images/icon-share.svg"
                className="brightness-200 p-2"
                alt=""
              />
            </div>
          </div>
          {isShareOpen && <Share />}
        </div>
      </div>
    </div>
  );
}
