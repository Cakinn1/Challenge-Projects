import React, { useEffect, useState } from "react";
import { fetchQuote } from "../constraints/api";
import { QuoteDataProps } from "../typings/interface";
import QuoteLoading from "./QuoteLoading";
import { IoReload } from "react-icons/io5";
export default function Quotes({ clicked }: { clicked: boolean }) {
  const [quoteData, setQuoteData] = useState<QuoteDataProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchData() {
    try {
      setLoading(true);
      const data = await fetchQuote();
      setQuoteData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      {loading ? (
        <QuoteLoading />
      ) : (
        <div
          className={`flex gap-x-1 ${clicked ? "animate__out" : "animate__in"}`}
        >
          <div className="max-w-[450px] space-y-3 text-lg">
            <h1>"{quoteData?.content}"</h1>
            <h2 className="font-bold">{quoteData?.author}</h2>
          </div>
          <IoReload
            onClick={() => fetchData()}
            className="text-lg cursor-pointer mt-1 duration-100 ease-in-out transition-all hover:scale-105 active:scale-90 "
          />
        </div>
      )}
    </section>
  );
}
