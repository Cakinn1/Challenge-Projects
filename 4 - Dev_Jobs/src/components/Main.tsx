import React, { useEffect } from "react";
import { data } from "../api/constraints";
import { Link } from "react-router-dom";
import { CharacterCardProps } from "../typings/typings";

export default function Main({ selectedData }: any) {
  return (
    <section className="max-w-[1250px] px-6 flex flex-wrap  mx-auto  py-[60px]">
      {selectedData.map((data: any) => (
        <CharacterCard {...data} />
      ))}
    </section>
  );
}

function CharacterCard({
  company,
  contract,
  id,
  location,
  logo,
  position,
  postedAt,
  logoBackground,
}: CharacterCardProps) {
  return (
    <Link
      to={`user/${id}`}
      className=" w-full md:w-[50%] lg:w-[33.3%] duration-500 ease-in-out hover:-translate-y-3 relative mb-12 md:mb-8 px-4"
      key={id}
    >
      <div
        className={`w-[52px] -top-6 absolute h-[52px] flex justify-center items-center  left-14  object-cover  rounded-2xl`}
        style={{ backgroundColor: `${logoBackground}` }}
      >
        <img src={logo} alt="^_^ >.< ^_^" />
      </div>
      <div
        className={`border bg-white h-[240px]  space-y-2 p-10 py-12 rounded-md`}
      >
        <div className="flex items-center gap-x-4">
          <h1 className="text-[#6e8098]">{postedAt}</h1>
          <span className="h-1 w-1 bg-[#6e8098] rounded-full"></span>
          <h1 className="text-[#6e8098]">{contract}</h1>
        </div>
        <h1 className="font-bold text-lg">{position}</h1>
        <p className="text-[#6e8098]">{company}</p>
        <p className="text-[#5964e0] pt-8">{location}</p>
      </div>
    </Link>
  );
}
