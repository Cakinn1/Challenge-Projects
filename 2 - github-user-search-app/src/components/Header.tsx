import { useDispatch, useSelector } from "react-redux";
import { Theme, darkMode } from "../redux/feature/themeSlice";
import Search from "./Search";
import { useEffect, useState } from "react";
export default function Header() {
  const dispatch = useDispatch();
  const theme = useSelector((state: Theme) => state.theme.isDarkMode);

  useEffect(() => {
    if (theme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <nav className="flex dark:text-[#fefefe] justify-between items-center">
        <header className="text-2xl">devFinder</header>
        <div
          className="flex items-center gap-x-4 cursor-pointer"
          onClick={() => dispatch(darkMode())}
        >
          {theme ? (
            <>
              <p className="uppercase tracking-widest">Light</p>
              <img src="/assets/icon-sun.svg" className="" alt="" />
            </>
          ) : (
            <>
              <p className="uppercase tracking-widest">Dark</p>
              <img src="/assets/icon-moon.svg" alt="" />
            </>
          )}
        </div>
      </nav>
    </>
  );
}
