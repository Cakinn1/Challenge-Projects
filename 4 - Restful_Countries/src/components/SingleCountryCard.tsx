import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchSingleCountry } from "../api/api";
import { FaArrowLeft } from "react-icons/fa6";
import LoadingSingleCard from "./LoadingSingleCard";
interface CountryData {
  flags: {
    png: string;
    svg: string;
  };
  name: {
    common: string;
    nativeName: {
      nld: {
        common: string;
      };
    };
  };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: {
    EUR: {
      name: string;
    };
  };
  languages: {
    ara: string;
    bre: string;
    ces: string;
    cym: string;
    deu: string;
    est: string;
    fin: string;
    fra: string;
    hr: string;
    hun: string;
    ita: string;
    jpn: string;
    kor: string;
    nld: string;
    per: string;
    pol: string;
    por: string;
    rus: string;
    slk: string;
    spa: string;
    srp: string;
    swe: string;
    tur: string;
    urd: string;
    zho: string;
    eng: string;
    tir: string;
  };
  borders: string[];
}

export default function SingleCountryCard() {
  const [singleCountryData, setSingleCountryData] =
    useState<CountryData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams();

  async function fetchCountry() {
    if (!id) {
      return;
    }
    try {
      setIsLoading(true);
      const data = await fetchSingleCountry(id);
      setSingleCountryData(data[0]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching country:", error);
    }
  }

  useEffect(() => {
    fetchCountry();
  }, [id]);

  console.log(Object.keys(singleCountryData?.languages || {}));



  return (
    <section className="max-w-[1440px] px-8  lg:px-16 flex flex-col mx-auto pt-6 ">
      <div className="pt-[40px] relative">
        <Link to="/">
          <button className="px-12 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 duration-300 ease-in-out dark:text-white dark:shadow-xl dark:border dark:border-black flex items-center gap-x-2 shadow-md rounded-md">
            <FaArrowLeft />
            Back
          </button>
        </Link>
      </div>
      {isLoading ? (
        <LoadingSingleCard />
      ) : (
        singleCountryData && (
          <div className="py-[70px] dark:text-white flex flex-col lg:flex-row gap-x-32">
            <figure className="lg:w-[40%]">
              <img
                className="w-full object-center mb-10 lg:mb-0 h-[300px] lg:h-[400px] aspect-video object-cover"
                loading="lazy"
                src={singleCountryData.flags.png}
                alt=""
              />
            </figure>
            <div className="space-y-7 lg:w-[50%] my-auto">
              <h1 className="font-bold text-3xl">
                {singleCountryData?.name?.common}
              </h1>
              <div className="flex flex-col lg:flex-row w-full gap-x-[120px]">
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold">Native Name:</span>{" "}
                    {singleCountryData?.name?.nativeName?.nld?.common}
                  </p>

                  <p>
                    <span className="font-semibold">Population:</span>{" "}
                    {singleCountryData.population.toLocaleString()}
                  </p>

                  <p>
                    <span className="font-semibold">Region:</span>{" "}
                    {singleCountryData.region}
                  </p>

                  <p>
                    <span className="font-semibold">Sub Region:</span>{" "}
                    {singleCountryData.subregion}
                  </p>
                  <p>
                    <span className="font-semibold">Capital:</span>{" "}
                    {singleCountryData.capital}
                  </p>
                </div>
                <div className="mt-10 space-y-2 lg:mt-0">
                  <p>
                    <span className="font-semibold">Top Level Domain:</span>{" "}
                    {singleCountryData.tld}
                  </p>
                  <p>
                    <span className="font-semibold">Currencies:</span>{" "}
                    {singleCountryData?.currencies?.EUR?.name}
                  </p>
                  <p>
                    <span className="font-semibold">Languages:</span>{" "}
                    {Object.keys(singleCountryData?.languages || {})?.map(
                      (key) => (
                        <span key={key}>
                          {(singleCountryData?.languages as any)[key]},{" "}
                        </span>
                      )
                    )}
                  </p>
                </div>
              </div>
              <div className="pt-10  gap-x-4   flex-col lg:flex-row lg:items-center ">
                <p className="font-semibold  lg:mb-2">Border Countries:</p>
                <div className="flex flex-wrap gap-x-2">
                  {singleCountryData?.borders?.map((border) => (
                    <p className="shadow-md w-[140px] lg:w-[20%] mb-2 lg:mb-0  px-6 p-1 cursor-pointer dark:border-black justify-center flex border rounded-md">
                      {border}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </section>
  );
}
