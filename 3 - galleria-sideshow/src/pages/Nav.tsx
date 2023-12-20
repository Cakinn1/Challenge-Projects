import React from "react";

export default function Nav() {
  return (
    <nav className="flex justify-between border-b pb-8 items-center">
      <figure>
        <img src="/logo-galleria.svg" className="object-cover w-28" alt="" />
      </figure>

      <div>
        <h1 className="uppercase text-[12px] tracking-widest text-[#7d7d7d]">
          Start SlideShow
        </h1>
      </div>
    </nav>
  );
}
