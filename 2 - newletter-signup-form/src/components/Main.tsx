import React, { FormEvent, useEffect, useState } from "react";
import { TiTickOutline } from "react-icons/ti";
import { TextValueProps } from "../typings/interface";
import Success from "./Success";

export default function Main() {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [resizeBreakpoint, setResizeBreakpoint] = useState<boolean>(false);

  const valueText: string[] = [
    "Product discovery and building what matters.",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  function TextValue({ valueText, index }: TextValueProps) {
    return (
      <div className="flex gap-x-2 items-center">
        <div className=" bg-orange-400 rounded-full text-whie p-1 text-white">
          <TiTickOutline className="text-lgt" />
        </div>
        <p className="text-sm">{valueText[index]}</p>
      </div>
    );
  }

  function handleEmailSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.includes("@") || email.length < 7) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      setSuccess(true);
    }
  }

  useEffect(() => {
    function handleRezie() {
      if (window.innerWidth < 768) {
        setResizeBreakpoint(true);
        console.log(window.innerWidth);
      } else {
        setResizeBreakpoint(false);
        console.log(window.innerWidth);
      }
    }

    window.addEventListener("resize", handleRezie);
    return () => {
      window.removeEventListener("resize", handleRezie);
    };
  }, [window.innerWidth]);
  return (
    <>
      {!success ? (
        <section className="flex justify-center px-10 items-center  h-full">
          <div className=" gap-x-10 flex flex-col md:flex-row rounded-2xl bg-white text-black ">
            {resizeBreakpoint && (
              <div>
                <img
                  src="/illustration-sign-up-mobile.svg"
                  className="  rounded-t-2xl w-full rounded-b-2xl object-cover"
                  alt=""
                />
              </div>
            )}
            <div className="md:w-[50%] flex justify-center items-center md:p-12 md:pr-0">
              <div className="space-y-4 p-8">
                <h1 className="font-bold text-4xl ">Stay updated!</h1>
                <h2 className="text-sm">
                  Join 60,000+ product managers receiving monthly updates on:
                </h2>
                <div className="space-y-2">
                  {valueText.map((_, index) => (
                    <TextValue
                      valueText={valueText}
                      index={index}
                      key={index}
                    />
                  ))}
                </div>
                <form
                  onSubmit={(event) => handleEmailSubmit(event)}
                  className="pt-8"
                >
                  <div className="flex justify-between text-sm items-center">
                    <p className="font-bold">Email address</p>
                    {error && (
                      <p className="text-red-500">Valid email required</p>
                    )}
                  </div>
                  <input
                    type="text"
                    className={`border mb-4 mt-1 py-3 rounded-lg w-full pl-6 focus:outline-none ${
                      error
                        ? "border-red-400 placeholder:text-red-500 text-red-500 bg-red-100"
                        : ""
                    }`}
                    placeholder="email@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    className="text-white text-sm w-full py-3 rounded-lg"
                    style={{ backgroundColor: "hsl(234, 29%, 20%)" }}
                  >
                    Subscribe to monthly newsletter
                  </button>
                </form>
              </div>
            </div>
            {!resizeBreakpoint && (
              <div className="md:w-[50%]  md:p-4">
                <img
                  src="/illustration-sign-up-desktop.svg"
                  className="md:h-full  w-full rounded-2xl object-cover"
                  alt=""
                />
              </div>
            )}
          </div>
        </section>
      ) : (
        <Success email={email} setSuccess={setSuccess} />
      )}
    </>
  );
}
