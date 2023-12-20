import React from "react";
import { MainProps } from "./Main";
import IncreamentDecreament from "./ui/IncreamentDecreament";

export default function RightMain({
  counter,
  setCounter,
  itemFullscreened,
  setItemFullscreened,
}: MainProps) {
  function decreament() {
    if (counter < 1) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  }

  console.log(counter)

  return (
    <section className="md:w-[50%] lg:pr-12  ">
      <div className="lg:pt-16 flex flex-col space-y-2 lg:space-y-8">
        <div className=" space-y-2 lg:space-y-4">
          <h1 className="uppercase text-sm lg:text-lg text-[#ff7d1a] font-semibold">
            sneaker company
          </h1>
          <h1 className="font-semibold text-lg lg:text-5xl">
            Fall Limited Edition Sneakers
          </h1>
        </div>
        <div>
          <p className="text-sm lg:text-[16px] lg:pr-12">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outter sole, they'll withstand everything
            the weather can offer.
          </p>
        </div>

        <div className="space-y-2 font-semibold">
          <div className="flex items-center gap-x-4">
            <h1 className="text-3xl">$125.00</h1>
            <h1 className="text-[#ff7d1a] tracking-normal bg-[#ffede0] p-1 rounded-lg px-2">
              50%
            </h1>
          </div>
          <div>
            <p className="line-through text-[#b6bcc8]">$250.00</p>
          </div>
        </div>

        <div className="flex gap-x-4">

          <div className="flex  w-[180px] items-center justify-between p-4  bg-gray-100 rounded-lg">
              <IncreamentDecreament
                imgValue={"icon-minus"}
                counter={counter}
                setValue={setCounter}
              />
              <span className="font-bold">{counter}</span>
            <IncreamentDecreament
              imgValue={"icon-plus"}
              counter={counter}
              setValue={setCounter}
            />
          </div>

          <button className="bg-[#ff7d1a] duration-300 hover:opacity-60 px-20 rounded-md cart-button font-semibold flex items-center gap-x-4 text-white">
            <img
              src="/images/icon-cart.svg"
              className="text-white white-icon"
              alt=""
            />
          Cart
          </button>
        </div>
      </div>
    </section>
  );
}
