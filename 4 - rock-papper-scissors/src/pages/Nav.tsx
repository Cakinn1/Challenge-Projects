import React from "react";
import { navList } from "../contants/constants";
import ScoreCard from "../components/nav/ScoreCard";
import NavList from "../components/nav/NavList";

export default function Nav({ counter }: { counter: number }) {
  return (
    <nav
      className="max-w-[850px] min-h-[200px] h-full flex justify-between items-center mx-auto border-4  rounded-2xl p-6"
      style={{ borderColor: "hsl(217, 16%, 45%)" }}
    >
      <ul>
        {navList.map((navItem) => {
          return <NavList navItem={navItem} />;
        })}
      </ul>
      <ScoreCard counter={counter} />
    </nav>
  );
}
