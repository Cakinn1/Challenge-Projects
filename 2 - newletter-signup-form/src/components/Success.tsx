import React from "react";
import { TiTick } from "react-icons/ti";

export default function Success({
  email,
  setSuccess,
}: {
  email: string;
  setSuccess: (value: boolean) => void;
}) {
  const text = "dismiss message";
  const result = [];
  for (let word of text.split(" ")) {
    const splitText = word[0].toUpperCase() + word.slice(1);
    result.push(splitText);
  }

  return (
    <section className="flex justify-center items-center h-full">
      <div className="border-white bg-white rounded-3xl p-12 border max-w-[450px]">
        <div className="bg-gradient-to-r w-fit from-red-400 to-[#ff6257]  rounded-full  p-4">
          <TiTick className="text-white text-3xl " />
        </div>

        <div className="mt-8 space-y-3">
          <h1 className="text-5xl font-bold">Thanks for subscribing!</h1>
          <p>
            a confirmation has been sent to{" "}
            <span className="font-bold">{email}</span>, Please open it and click
            the button inside to confirm your subscription.
          </p>
        </div>
        <button
          className="mt-6 bg-gradient-to-r bg-[#242742] hover:from-pink-500  hover:to-[#ff6257] duration-300 transition-all ease-in-out     shadow-2xl text-white w-full py-3 rounded-lg"
          onClick={() => setSuccess(false)}
        >
          {result.join(" ")}
        </button>
      </div>
    </section>
  );
}
