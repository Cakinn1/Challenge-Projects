import React, { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { fetchTimer } from "../constraints/api";
import { TimerProps } from "../typings/interface";
import { IoChevronDownSharp } from "react-icons/io5";
import BottomInfo from "./BottomInfo";
export default function Timer({
  setTimerData,
  timerData,
  timerText,
  setTimeText,
  clicked,
  setClicked,
}: {
  setTimerData: (value: TimerProps) => void;
  timerData: TimerProps | null;
  timerText: string;
  setTimeText: (value: string) => void;
  clicked: boolean;
  setClicked: (value: boolean) => void;
}) {
  const [currentTime, setCurrentTime] = useState<string>("");

  function handleTimeData() {
    const currentDate = timerData?.datetime;
    if (timerData?.datetime) {
      const hoursMinutesSeconds = currentDate
        ?.split(".")[0]
        .split("T")[1]
        .split(":")
        .join("");
      if (hoursMinutesSeconds) {
        if (hoursMinutesSeconds[0] === "0") {
          const hours = hoursMinutesSeconds?.slice(1, 2);
          const minutes = hoursMinutesSeconds?.slice(hours.length + 1, 4);
          setCurrentTime(hours + ":" + minutes);
          if (parseInt(hours) >= 5 && parseInt(hours) <= 11) {
            setTimeText("Morning");
          } else if (parseInt(hours) >= 12 && parseInt(hours) <= 16) {
            setTimeText("Afternoon");
          } else if (parseInt(hours) >= 17 && parseInt(hours) <= 21) {
            setTimeText("Evening");
          } else if (parseInt(hours) >= 22 || parseInt(hours) <= 4) {
            setTimeText("Night");
          }
        } else if (
          hoursMinutesSeconds[0] === "1" ||
          hoursMinutesSeconds[0] === "2"
        ) {
          const hours = "0" + hoursMinutesSeconds?.slice(0, 1);
          const minutes = hoursMinutesSeconds?.slice(hours.length, 4);
          setCurrentTime(hours + ":" + minutes);

          if (parseInt(hours) >= 5 && parseInt(hours) <= 11) {
            setTimeText("Morning");
          } else if (parseInt(hours) >= 12 && parseInt(hours) <= 16) {
            setTimeText("Afternoon");
          } else if (parseInt(hours) >= 17 && parseInt(hours) <= 21) {
            setTimeText("Evening");
          } else if (parseInt(hours) >= 22 || parseInt(hours) <= 4) {
            setTimeText("Night");
          }
        }
      }
    }
  }
  useEffect(() => {
    if (timerData) {
      handleTimeData();
    }
  }, [timerData]);

  return (
    <>
      <section
        className={` relative max-w-[500px] mt-[300px] ${
          clicked ? "animate__out" : "animate__in"
        } `}
      >
        <div className="flex items-center gap-x-2">
          {(timerText === "Morning" || timerText === "Afternoon") && (
            <IoSunny />
          )}
          {(timerText === "Evening" || timerText === "Night") && <IoMoon />}
          <p className="uppercase text-2xl  tracking-widest ">
            Good {timerText}, It's currently{" "}
          </p>
        </div>
        <div className="flex  items-center gap-x-3">
          <h1 className=" text-[12rem] font-bold">{currentTime}</h1>
          <p className="text-3xl tracking-widest">
            AM {timerData?.abbreviation}
          </p>
          <p></p>
        </div>
      </section>
      <div
        className={`flex justify-between items-center cursor-pointer  ${
          clicked ? "animate__out" : "animate__in"
        }`}
      >
        <h1 className="uppercase text-3xl tracking-widest">in</h1>
        <div
          className="flex  bg-white items-center p-3 rounded-full gap-x-2"
          onClick={() => setClicked(!clicked)}
        >
          <button className="text-2xl tracking-widest text-black">More</button>
          <div className="p-3 bg-black rounded-full">
            <IoChevronDownSharp />
          </div>
        </div>
      </div>
    </>
  );
}
