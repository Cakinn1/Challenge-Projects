import React, { useState } from "react";
import data from "../data.json";
import FieldSummary from "./FieldSummary";

interface IsDataProps {
  category: string;
  score: number;
  icon: string;
}

export interface Props extends IsDataProps {
  colorArray: string[];
  index: number;
}

export default function RightBar() {
  const [isData, setIsData] = useState<IsDataProps[]>(data);

  const colorArray = ["#ff5757", "	#ffb01f", "	#00bd91", "	#1125d4"];

  return (
    <div className="h-[500px] space-y-8 p-6 px-10 w-[350px] ">
      <div>
        <h1>Summary</h1>
      </div>

      <div className="space-y-4">
        {isData.map((data, index) => (
          <FieldSummary
            category={data.category}
            icon={data.icon}
            score={data.score}
            colorArray={colorArray}
            index={index}
          />
        ))}
      </div>
      <div>
        <button
          className="w-full py-3 rounded-full text-white hover:duration-1000 duration-1000 bg-gradient-to-t hover:from-[#2e2be9] hover:to-[#7857ff] "
          style={{ backgroundColor: "hsl(224, 30%, 27%)" }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
