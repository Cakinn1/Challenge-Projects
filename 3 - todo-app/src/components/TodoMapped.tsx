import React, { useState } from "react";
import { TaskProps } from "../App";

interface ToDoMapped extends TaskProps {
  filterTodos: (value: number) => void;
  deleteTodo: (value: number) => void;
}

export default function TodoMapped({
  id,
  isDone,
  todo,
  filterTodos,
  deleteTodo,
}: ToDoMapped) {
  const [isTransitionComplete, setIsTransitionComplete] = useState(false);

  const handleTransitionEnd = () => {
    setIsTransitionComplete(true);
  };
  function IsDoneFiltering() {
    return isDone ? (
      <div className="p-2 md:max-w-[500px] max-w-[300px] md:mx-0 mx-auto break-words">
      <h1 className="line-through text-[#e4e5f1]">{todo}</h1>
    </div>
    ) : (
      <div className="p-2 md:max-w-[500px] max-w-[300px] md:mx-0 mx-auto break-words">
        <h1 className="  ">{todo}</h1>
      </div>
    );
  }

  return (
    <div
      className={`relative border-b  dark:text-white dark:border-b-gray-500 dark:bg-[#161722] duration-300 bg-white  flex  rounded-b-none ${
        id === 0 ? "rounded-t-2xl" : ""
      }`}
    >
      <div className="px-4 py-5 ">
        {!isDone ? (
          <div
            onClick={() => filterTodos(id)}
            className="border cursor-pointer duration-300   dark:bg-black border-black rounded-full h-6 w-6 dark:border-[#777a92]"
          ></div>
        ) : (
          <div
            onClick={() => filterTodos(id)}
            className={`border cursor-pointer duration-300 bg-gradient-to-r from-[#57ddff] to-[#c058f3] border-black dark:border-[#777a92] flex justify-center items-center rounded-full h-6 w-6 ${
              isTransitionComplete ? "opacity-100" : "opacity-0"
            }`}
            onTransitionEnd={handleTransitionEnd}
          >
            <img
              className="w-3 h-2  transition-all duration-1000 "
              src="/images/icon-check.svg"
              alt=""
            />
          </div>
        )}
      </div>
      <IsDoneFiltering />

      <div className=" mx-4 md:ml-auto  py-5">
        <img
          onClick={() => deleteTodo(id)}
          src="/images/icon-cross.svg"
          className="cursor-pointer"
          alt=""
        />
      </div>
    </div>
  );
}
