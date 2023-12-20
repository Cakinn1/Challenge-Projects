import React from "react";
import { MdToggleOff, MdToggleOn } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";
import { useSelector } from "react-redux";
import { Theme } from "../../redux/themeSlice";

export default function ThemeToggle() {
  const theme = useSelector((state: Theme) => state.theme.isDarkMode);
  return (
    <>
      {!theme ? (
        <>
          <MdToggleOff className="text-5xl transition-all duration-300 " />
          <img
            src="/icon-moon.svg"
            alt=""
            className="hover:border-purple-500"
          />
        </>
      ) : (
        <>
          <MdToggleOn className="text-5xl " />
          <WiDaySunny className="text-3xl my-auto" />
        </>
      )}
    </>
  );
}
