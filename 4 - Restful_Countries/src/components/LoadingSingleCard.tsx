import React from "react";

export default function LoadingSingleCard() {
  return (
    <section className="py-[70px] space-y-12 lg:space-y-0 gap-x-32 flex flex-col lg:flex-row">
      <div className="lg:w-[40%]  h-[400px] bg-gray-300"></div>
      <div className="lg:w-[60%] h-[600px] lg:h-[400px] bg-gray-300"></div>
    </section>
  );
}
