import React from "react";

export interface ThankYouProps {
  setIsThankYouOpen: (value: boolean) => void;
  isThankYouOpen: boolean;
  storedValue: string;
  setStoredValue: (value: string) => void;
}

export default function ThankYouCard({ storedValue }: { storedValue: string }) {
  return (
    <div
      className={`max-w-[400px] bg-[#19202a] flex flex-col space-y-4 rounded-3xl p-8  `}
    >
      <figure className="mx-auto">
        <img src="/images/illustration-thank-you.svg" alt="" />
      </figure>
      <div className="mx-auto   rounded-full w-fit bg-[#252d37]  py-1 px-3">
        <h1 className="text-[#fb7413] font-bold text-sm ">
          You selected {storedValue} out of 5
        </h1>
      </div>

      <div className="space-y-4">
        <h1 className="flex text-3xl justify-center items-center text-white">Thank You</h1>

        <p className="text-center text-[#959eac]">
          We appreciate you taking the time to give a rating. If you ever need
          more support, dont hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}
