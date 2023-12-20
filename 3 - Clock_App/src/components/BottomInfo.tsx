import React from "react";
import { TimerProps } from "../typings/interface";

export default function BottomInfo({
  clicked,
  timerData,
}: {
  clicked: boolean;
  timerData: TimerProps | null;
}) {
  return (
    <div
      className={`bg-gray-500  p-16 absolute transition-all  duration-300  w-full ${
        clicked
          ? "animate__out opacity-100 h-[400px] -bottom-[300px] "
          : " -z-50 h-[100px] -bottom-[0]  animate__in opacity-0"
      }`}
      style={{ background: "rgba(255, 255, 255, 0.90)" }}
    >
      <div className="max-w-[1100px] mx-auto flex gap-x-12">
        <div>
          <h2 className="tracking-widest uppercase text-lg">
            current timezone
          </h2>
          <h1 className="l font-extrabold text-[4rem] ">
            {timerData?.timezone}
          </h1>
          <h2 className="tracking-widest uppercase text-lg">Day of the year</h2>
          <h1 className="l font-extrabold text-[4rem] ">
            {timerData?.day_of_year}
          </h1>
        </div>
        <div>
          <h2 className="tracking-widest uppercase text-lg">Day of the week</h2>
          <h1 className="l font-extrabold text-[4rem] ">
            {timerData?.day_of_week}
          </h1>
          <h2 className="tracking-widest uppercase text-lg">week number</h2>
          <h1 className="l font-extrabold text-[4rem] ">
            {timerData?.week_number}
          </h1>
        </div>
      </div>
    </div>
  );
}
