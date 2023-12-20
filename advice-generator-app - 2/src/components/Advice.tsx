import React, { useEffect, useState } from "react";
import { fetchApi } from "../api";
import Loading from "./Loading";

interface AdviceProps {
  slip: {
    advice: string;
    id: number;
  };
}
export default function Advice() {
  const [quoteData, setQuoteData] = useState<AdviceProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  async function fetchData() {
    try {
      setIsLoading(true);
      const data = await fetchApi();
      setQuoteData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{ backgroundColor: "hsl(217, 19%, 24%)" }}
      className="max-w-[450px] w-full p-6 relative rounded-2xl min-h-[300px]"
    >
      <div>
        <h1
          style={{ color: "hsl(150, 100%, 66%)" }}
          className="tracking-widest font-semibold uppercase flex justify-center items-center"
        >
          Advice #117
        </h1>

        {isLoading ? (
          <Loading />
        ) : (
          <>
            <p className="text-center text-white text-[28px] mt-6 font-semibold">
              "{quoteData?.slip?.advice}"
            </p>
            <div className="flex items-center gap-x-2 mt-6 text-white">
              {/* <hr className="w-full" /> */}
              <img
                src="./images/pattern-divider-mobile.svg"
                className="w-full object-cover"
                alt=""
              />
              {/* <hr className="w-full" /> */}
            </div>
            <div className="pt-7"></div>
          </>
        )}
        <div className="absolute  -bottom-10 left-[190px]">
          <div
            onClick={() => fetchData()}
            className="p-6 h-[76px] w-[76px] rounded-full button active:scale-75 duration-100 hover:scale-105 cursor-pointer"
            style={{ backgroundColor: "hsl(150, 100%, 66%)" }}
          >
            <img src="/images/icon-dice.svg" className="h-7" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
