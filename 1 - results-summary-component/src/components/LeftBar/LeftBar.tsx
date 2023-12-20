import React from "react";

export default function LeftBar() {
  return (
    <div className="border  text-white bg-gradient-to-t from-[#2e2be9] to-[#7857ff]  p-8 px-12 rounded-3xl w-[350px]">
      <div className="flex justify-center items-center">
        <h1 className="text-2xl mb-4">Your Result</h1>
      </div>

      <div className="px-4">
        <div className="my-4 flex flex-col space-y-2 justify-center items-center  bg-gradient-to-t from-[#2421ca] to-[#4e21ca]  h-[220px] p border-black rounded-full">
          <h1 className="text-7xl font-bold">76</h1>
          <p className="text-[#ebf1ff]">of 100</p>
        </div>
      </div>

      <div className="text-center space-y-3">
        <h1 className="font-semibold text-3xl">Great</h1>
        <p className="text-lg">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}
