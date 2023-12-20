import React, { useState } from "react";
import { MdToggleOff, MdToggleOn } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Theme, isDarkModeTheme } from "../redux/themeSlice";
import { WiDaySunny } from "react-icons/wi";
import ThemeToggle from "./ui/ThemeToggle";
export default function Nav() {
  const [isSelectionOpen, setIsSelectionOpen] = useState<boolean>(false);
  const [valueStored, setValueStored] = useState<string>("Sans-Serif");

  const dispatch = useDispatch();
  const theme = useSelector((state: Theme) => state.theme.isDarkMode);

  function handleFontChange(value: string) {
    document.body.classList.remove("Sans-Serif", "Serif", "Mono");
    document.body.classList.add(value);
    setValueStored(value);
  }

  const fontArray: string[] = ["Sans-Serif", "Serif", "Mono"];

  function FontSelection() {
    return (
      <>
        {isSelectionOpen && (
          <div className="absolute z-50 bg-white  rounded-lg -left-[60px] -bottom-[110px] shadow-md w-[150px]">
            {fontArray.map((font) => (
              <h1
                onClick={() => handleFontChange(font)}
                className={`${
                  valueStored === font ? "text-[#A445ED]" : "text-black"
                } Sans-Serif  cursor-pointer rounded-t-lg px-4 py-1`}
              >
                {font}
              </h1>
            ))}
          </div>
        )}
      </>
    );
  }

  return (
    <nav className="flex py-14  justify-between items-center">
      <figure>
        <img src="/logo.svg" alt="" />
      </figure>

      <div className="flex items-center">
        <div
          className="flex gap-x-4 relative  cursor-pointer"
          onClick={() => setIsSelectionOpen(!isSelectionOpen)}
        >
          <p className="text-[#050505] tracking-wide">{valueStored}</p>
          <img src="/icon-arrow-down.svg" alt="" />
          <FontSelection />
        </div>

        <div
          className="border-r h-14 mx-8"
          style={{ borderColor: "hsl(0deg, 0%, 81%)" }}
        ></div>
        <div
          className="flex gap-x-2 w-[80px] hover:text-purple-300 cursor-pointer"
          onClick={() => dispatch(isDarkModeTheme())}
        >
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
