import React from "react";
import { CountrySearchProps } from "../typings/typings";
import { Link } from "react-router-dom";

interface CountryCardsProps {
  countryData: CountrySearchProps[] | null;
}

// if 9 digits every 3 digits add a , 000000000 > 000,000,000

export default function CountryCards({ countryData }: CountryCardsProps) {
  return (
    <section className="py-[80px] gap-x-14 px-4 md:px-12 flex flex-wrap">
      {countryData &&
        countryData?.map((country) => <SingleCountryCard {...country} />)}
    </section>
  );
}

function SingleCountryCard({
  name,
  population,
  region,
  capital,
  flags,
}: CountrySearchProps) {
  return (
    <Link
      to={`/${name.common}`}
      className="w-[260px] h-[340px] dark:bg-[#2b3945] rounded-t-2xl dark:text-white hover:bg-gray-100 cursor-pointer shadow-md mx-auto rounded-b-lg flex flex-col mb-10 ease-in-out duration-300 hover:-translate-y-4"
    >
      <div className="w-full ">
        <img
          className="h-[160px]  rounded-t-lg w-full object-cover"
          src={flags.png}
          alt="flags"
        />
      </div>
      <div className="p-4 px-6 space-y-4">
        <h1 className="font-bold text-lg">{name.common}</h1>
        <div>
          <p>
            <span className="font-semibold">Population:</span>{" "}
            {population.toLocaleString()}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {region}
          </p>
          <p>
            <span className="font-semibold">Capital:</span> {capital}
          </p>
        </div>
      </div>
    </Link>
  );
}
