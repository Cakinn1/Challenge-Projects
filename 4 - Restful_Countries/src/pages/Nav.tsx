import React from "react";
import { IoMoonOutline } from "react-icons/io5";
import { ThemeSelector, ThemeState, toggleTheme } from "../redux/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoMoon } from "react-icons/io5";
export default function Nav() {
  const dispatch = useDispatch();
  const theme = useSelector((state: ThemeSelector) => state.theme.isDarkTheme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
    if (theme) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  };

  return (
    <nav className="p-4 border-b dark:border-none shadow-md dark:bg-[#2b3945]">
      <div className="max-w-[1440px] px-12 mx-auto flex justify-between items-center">
        <h1 className="font-bold text-[20px] tracking-wide dark:text-white ">
          Where in the world?
        </h1>
        <div
          className="flex cursor-pointer gap-x-2 items-center p-2 duration-300 active:bg-gray-300 rounded-md dark:hover:bg-gray-600 hover:duration-300 ease-in-out hover:bg-gray-100"
          onClick={() => handleToggleTheme()}
        >
          {theme ? (
            <>
              <IoMoon className="text-lg text-white " />
              <p className="text-white tracking-wide">Dark Mode</p>
            </>
          ) : (
            <>
              <IoMoonOutline className="text-lg  " />
              <p>Dark Mode</p>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
