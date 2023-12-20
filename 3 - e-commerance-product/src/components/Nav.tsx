import React, { useState } from "react";
import IsBurgerMenu from "./ui/IsBurgerMenu";
interface NavProps {
  counter: number;
  setCounter: (value: number) => void;
}

export default function Nav({ counter, setCounter }: NavProps) {
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false);
  const [cartMenu, setCartMenu] = useState<boolean>(false);

  const navLinkNameArray: string[] = [
    "Collections",
    "Men",
    "Women",
    "About",
    "Contact",
  ];

  return (
    <>
      {burgerMenu && (
        <IsBurgerMenu burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
      )}
      <nav className="max-w-[1440px] mx-auto lg:px-36 px-8 ">
        <section className="border-b flex justify-between items-center py-8">
          <div className="flex items-center lg:gap-x-12 gap-x-6">
            <figure className="lg:hidden flex">
              <img
                onClick={() => setBurgerMenu(!burgerMenu)}
                src="/images/icon-menu.svg"
                className="w-full object-cover cursor-pointer hover:scale-105 duration-300 active:scale-90"
                alt=""
              />
            </figure>

            <figure>
              <img src="/images/logo.svg" alt="" />
            </figure>

            <ul className="lg:flex gap-x-8 hidden">
              {navLinkNameArray.map((name) => (
                <NavLinks text={name} />
              ))}
            </ul>
          </div>

          <div className="flex gap-x-8 items-center">
            <figure className="relative">
              <img
                onClick={() => {
                  setCartMenu(!cartMenu);
                }}
                className="cursor-pointer hover:scale-105 duration-300"
                src="/images/icon-cart.svg"
                alt=""
              />
              <div className="absolute -top-2 -right-3 bg-[#ff7d1a] w-5 rounded-full text-[10px] flex justify-center items-center text-white h-5">
                {counter}
              </div>
              <CartMenu
                setCartMenu={setCartMenu}
                setCounter={setCounter}
                counter={counter}
                cartMenu={cartMenu}
              />
            </figure>
            <figure>
              <img
                className="object-cover cursor-not-allowed h-10 hover:scale-105 duration-300  hover:border-[#ff7d1a] border-2 rounded-full"
                src="/images/image-avatar.png"
                alt=""
              />
            </figure>
          </div>
        </section>
      </nav>
    </>
  );
}

function NavLinks({ text }: { text: string }) {
  return (
    <li>
      <a className="pb-10 duration-200 cursor-not-allowed hover:border-b-[#ff7d1a] hover:border-b-4 inline">
        {text}
      </a>
    </li>
  );
}

function CartMenu({
  cartMenu,
  counter,
  setCounter,
  setCartMenu,
}: {
  cartMenu: boolean;
  counter: number;
  setCounter: (value: number) => void;
  setCartMenu: (value: boolean) => void;
}) {
  return (
    <div
      className={`duration-500   shadow-2xl ${
        cartMenu ? "opacity-100" : "opacity-0"
      } transition-opacity absolute bg-white w-[340px]  h-[240px] rounded-lg -right-[50px] -bottom-[265px] z-50`}
    >
      <div className="px-6 py-3 border-b border-b-gray-300">
        <h1 className="font-semibold">Cart</h1>
      </div>

      <div className="px-6  py-3" style={{ height: "calc(240px - 50px)" }}>
        {/* fix later */}

        {counter > 0 ? (
          <div className="space-y-4">
            <div className="flex gap-x-4">
              <figure>
                <img
                  className="object-cover h-16 rounded-lg"
                  src="/images/image-product-1-thumbnail.jpg"
                  alt=""
                />
              </figure>
              <div className="relative text-[#68707d]">
                <h1 className="text-sm">Fall Limited Edition Sneakers</h1>
                <div>
                  <p>
                    $125.00 x {counter}
                    <span className="font-bold ml-2">
                      ${(125 * counter).toFixed(2)}
                    </span>
                  </p>
                  <div className="absolute -right-5 top-5 cursor-pointer">
                    <img
                      src="/images/icon-delete.svg"
                      onClick={() => setCounter(0)}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setCartMenu(!cartMenu)}
              className="w-full border py-3 rounded-lg bg-[#ff7d1a] duration-300 hover:bg-opacity-70 text-white"
            >
              Checkout
            </button>
          </div>
        ) : (
          <div className="flex h-full justify-center items-center">
            <h1 className="font-semibold text-gray-400 text-sm">
              Your cart is empty.
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
