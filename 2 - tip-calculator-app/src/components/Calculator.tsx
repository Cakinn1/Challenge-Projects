import React, { FormEvent, ReactElement, useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";

export default function Calculator() {
  const [tip, setTip] = useState<number>(0);
  const [bill, setBill] = useState<string>("");
  const [numberOfPeople, setNumberOfPeople] = useState<string>("");
  const [percent, setPercent] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  function handleMath() {
    setPercent(tip / 100);
    console.log(
      (parseInt(bill) + parseInt(bill) * percent) / parseInt(numberOfPeople)
    );
    const updateTotal =
      (parseInt(bill) + parseInt(bill) * percent) / parseInt(numberOfPeople);
    setTotal(updateTotal);
    console.log(updateTotal / parseInt(numberOfPeople));
  }

  function BottomCard() {
    return (
      <div className="mt-8 bg-[#00494d] space-y-6 rounded-lg p-6 py-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-white">Tip Amount</h1>
            <p className="" style={{ color: "hsl(186, 14%, 43%)" }}>
              / person
            </p>
          </div>
          <div>
            <h1
              style={{ color: "hsl(172, 67%, 45%)" }}
              className="font-bold text-3xl"
            >
              ${tip.toFixed(2)}
            </h1>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-white">Total</h1>
            <p className="" style={{ color: "hsl(186, 14%, 43%)" }}>
              / person
            </p>
          </div>
          <div>
            {Number.isNaN(total) ? (
              <h1
                className="font-bold text-3xl"
                style={{ color: "hsl(172, 67%, 45%)" }}
              >
                $0.00
              </h1>
            ) : (
              <h1
                className="font-bold text-3xl"
                style={{ color: "hsl(172, 67%, 45%)" }}
              >
                ${total.toFixed(2)}
              </h1>
            )}
          </div>
        </div>
        <div>
          <button
            style={{ backgroundColor: "hsl(172, 67%, 45%)" }}
            className="w-full font-bold py-4 uppercase rounded-md"
            onClick={() => {
              setBill("");
              setTip(0);
              setNumberOfPeople("");
              setPercent(0);
              setTotal(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      className="bg-white p-10 rounded-t-3xl tracking-wider"
      style={{ height: "calc(100vh - 17vh)" }}
      onSubmit={(e) => {
        e.preventDefault();
        handleMath();
      }}
    >
      <div className="mt-4">
        <h1>Bill</h1>

        <div className="relative">
          <div className="input-color px-2 mt-1 rounded-md flex justify-between items-center py-3">
            <div>
              <h1 className="text-[#00494d] text-2xl opacity-40">$</h1>
            </div>
            <input
              className="focus:outline-none px-2 w-full x bg-transparent text-lg "
              type="text"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className="mb-2 mt-6">Select Tip %</h1>
        <div className="flex flex-wrap gap-x-6">
          <button
            onClick={() => setTip(5)}
            className="w-[47%] bg-[#00494d] text-white font-bold text-2xl mb-4 px-6 py-3 rounded-md duration-100 hover:bg-[#26c0ab]"
          >
            5%
          </button>
          <button
            className="w-[47%] bg-[#00494d] text-white font-bold text-2xl mb-4 px-6 py-3 rounded-md duration-100 hover:bg-[#26c0ab]"
            onClick={() => setTip(10)}
          >
            10%
          </button>
          <button
            className="w-[47%] bg-[#00494d] text-white font-bold text-2xl mb-4 px-6 py-3 rounded-md duration-100 hover:bg-[#26c0ab]"
            onClick={() => setTip(15)}
          >
            15%
          </button>
          <button
            className="w-[47%] bg-[#00494d] text-white font-bold text-2xl mb-4 px-6 py-3 rounded-md duration-100 hover:bg-[#26c0ab]"
            onClick={() => setTip(30)}
          >
            20%
          </button>
          <button
            className="w-[47%] bg-[#00494d] text-white font-bold text-2xl mb-4 px-6 py-3 rounded-md duration-100 hover:bg-[#26c0ab]"
            onClick={() => setTip(34)}
          >
            25%
          </button>
          <input
            type="text"
            className="input-color w-[47%] text-[15px] mb-4 px-[70px]"
            onChange={(e) => setTip(parseInt(e.target.value))}
            placeholder="Custom"
          />
        </div>

        <div className="mt-4">
          <h1>Number of People</h1>

          <div className="relative">
            <div className="input-color px-2 mt-1 rounded-md flex justify-between items-center py-3">
              <div>
                <FaUser className="text-[#00494d] opacity-40" />
              </div>
              <input
                className="focus:outline-none px-4 w-full x bg-transparent text-lg "
                type="text"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(e.target.value)}
              />
            </div>
          </div>
        </div>

        <BottomCard />
      </div>
    </form>
  );
}
