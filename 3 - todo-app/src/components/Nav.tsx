import React, { useEffect, useState } from "react";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { Theme, themeState } from "../redux/themeSlice";
export interface SearchProps {
  setInputValue: (value: string) => void;
  inputValue: string;
  addToDo: () => void;
}

export default function Nav({
  setInputValue,
  inputValue,
  addToDo,
}: SearchProps) {
  const [isTransitionComplete, setIsTransitionComplete] =
    useState<boolean>(false);

  const theme = useSelector((state: Theme) => state.theme.isDarkMode);
  const dispatch = useDispatch();
  function handleThemeChange() {
    setIsTransitionComplete(false);
    dispatch(themeState());
    theme
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }

  function handleTransitionEnd() {
    setIsTransitionComplete(true);
  }
  useEffect(() => {
    handleThemeChange();
  }, []);

  return (
    <section className="space-y-10 px-12 md:px-0">
      <nav className="flex justify-between items-center">
        <div>
          <h1 className="uppercase font-semibold text-white text-5xl tracking-widest">
            todo
          </h1>
        </div>
        <div
          onClick={() => handleThemeChange()}
          className={`transition-opacity duration-300 ease-in-out cursor-pointer ${
            isTransitionComplete ? "opacity-100" : "opacity-100"
          }`}
          onTransitionEnd={handleTransitionEnd}
        >
          <img
            src={theme ? "./images/icon-sun.svg" : "./images/icon-moon.svg"}
            alt=""
          />
        </div>
      </nav>
      <Search
        addToDo={addToDo}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
    </section>
  );
}
