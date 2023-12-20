import React from "react";
import { HomeProps } from "../Home/Home";
import CardInfo from "./CardInfo";
import { CiBookmark } from "react-icons/ci";
import { FaBook, FaBookmark } from "react-icons/fa6";
export default function MovieCard({
  addMovieToBookmark,
  category,
  rating,
  title,
  year,
  thumbnail,
  isTrending,
  bookmarkCart,
  bookmarked,
  setBookmarked
}: any) {

  const values: string[] = [year, category, rating];
  return (
    <div className={` relative mx-aut mb-6 ${bookmarked ? "w-[300px] " : "lg:w-[23%] md:w-[48%] w-full "}`}>
      <figure>
        <img
          className="object-cover w-full   rounded-2xl"
          src={thumbnail.regular.small}
          alt=""
        />
      </figure>
      <div>
        <div className="flex gap-x-3">
          {values.map((card) => (
            <CardInfo value={card} />
          ))}
        </div>
        <h1 className="font-semibold">{title}</h1>

        <div
          onClick={() => addMovieToBookmark(title)}
          className="absolute hover:scale-110 active:scale-90 duration-200  top-8 right-8 cursor-pointer bg-gray-900 bg-opacity-30 rounded-full flex justify-center items-center w-8 h-8"
        >
          {bookmarkCart.find((item: any) => item.title === title) ? (
            <FaBookmark />
          ) : (
            <CiBookmark />
          )}
        </div>
      </div>
    </div>
  );
}
