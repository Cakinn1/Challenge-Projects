import React from "react";

export default function Header() {
  return (
    <div className="flex gap-x-4 items-center">
      <figure>
        <img src="/images/icon-star.svg" alt="" />
      </figure>
      <div>
        <h1 style={{color: "hsl(292, 42%, 14%)"}} className="text-6xl font-semibold">FAQs</h1>
      </div>
    </div>
  );
}
