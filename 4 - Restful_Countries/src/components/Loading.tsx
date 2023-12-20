import React from "react";

export default function Loading() {
  const countryCardLoading =
    "w-[260px] mx-auto bg-gray-200 animate-pulse h-[340px] shadow-md  rounded-lg   flex  flex-col mb-10 ";
  return (
    <section className="py-[80px] gap-x-14 px-4 md:px-12 flex flex-wrap">
      {new Array(26).fill(0).map((_, index) => (
        <div key={index} className={countryCardLoading}></div>
      ))}
    </section>
  );
}
