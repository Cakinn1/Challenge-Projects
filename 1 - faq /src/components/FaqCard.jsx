import React, { useState } from "react";
import Header from "./Header";

export default function FaqCard() {
  const [selection, setSelection] = useState(null);
  const [selectionOption, setSelectionOptions] = useState([
    {
      id: 0,
      header: "What is Frontend Mentor, and how will it help me?",
      selectionText:
        "Frontend Mentor offers eralistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      id: 1,
      header: "Is Frontend Mentor free?",
      selectionText:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      id: 2,
      header: "Can I use Frontend Mentor projects in my portfolio?",
      selectionText:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      id: 3,
      header: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      selectionText:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ]);

  function handleSelect(id) {
    if (selection === id) {
      setSelection(null);
    } else {
      setSelection(id);
    }
  }

  function SelectionInputs({ id, header, para }) {
    return (
      <div className={`${
        id === selectionOption.length - 1 ? "" : "border-b"
      }`}>
        <div
          className={`flex justify-between items-center text-black py-4   `}
        >
          <h1 className="font-semibold">{header}</h1>
          {id === selection ? (
            <button
              onClick={() => handleSelect(id)}
              className="text-white bg-black rounded-full px-2"
            >
              -
            </button>
          ) : (
            <button
              onClick={() => handleSelect(id)}
              className="text-white bg-purple-500 rounded-full px-2"
            >
              +
            </button>
          )}
        </div>
        {id === selection && <div className="text-gray-400 mt-4">{para}</div>}
      </div>
    );
  }

  return (
    <div className="max-w-[600px] px-2 md:px-0  py-32 mx-auto ">
      <div className="border p-10 min-h-[500px] rounded-3xl bg-white  shadow-2xl">
        <Header />

        <div className="mt-4">
          {selectionOption.map((item) => (
            <SelectionInputs
              para={item.selectionText}
              key={item.id}
              id={item.id}
              header={item.header}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
