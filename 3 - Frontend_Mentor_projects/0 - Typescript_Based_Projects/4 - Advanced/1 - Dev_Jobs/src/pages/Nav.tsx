import React, { useEffect, useState } from "react";
import { MdOutlineToggleOff, MdOutlineToggleOn } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Theme } from "../redux/themeSlice";
import { toggleTheme } from "../redux/themeSlice";
import { Link } from "react-router-dom";
export default function Nav() {
  const dispatch = useDispatch();
  const theme = useSelector((state: Theme) => state.theme.isDarkMode);
  const [animate, setAnimate] = useState<boolean>(false)

  function handleAnimate() {
    // setTimeout(() => {
      dispatch(toggleTheme());
    // }, 1000);
  }

  return (
    <nav>
      <div
        className="w-full h-[162px] bg-center  md:bg-left-bottom  bg-no-repeat bg-cover"
        style={{
          backgroundImage:`url("/desktop/bg-pattern-header.svg")`,
        }}
      >
        <div className="max-w-[1250px] mx-auto px-12 py-[40px] flex justify-between items-center">
          <Link to="/" className="text-white font-semibold text-3xl">
            devjobs
          </Link>
          <div
            className="flex gap-x-4 items-center cursor-pointer"
            onClick={() => handleAnimate()}
          >
            <img src="/desktop/icon-sun.svg" className="w-4 h-4" alt="" />
            {theme ? (
              <MdOutlineToggleOff className="text-5xl " />
            ) : (
              <MdOutlineToggleOn className="text-5xl " />
            )}
            <img src="/desktop/icon-moon.svg" className="w-4 h-4" alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
}

//162 / 2
