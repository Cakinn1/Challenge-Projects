import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa6";

export default function TrendingCard({
  trendingData,
  bookmarkCart,
  addMovieToBookmark,
}: {
  trendingData: any;
  bookmarkCart: any;
  addMovieToBookmark: (value: string) => void;
}) {
  console.log(trendingData);

  return (
    <div className="flex w-full   overflow-x-scroll">
      {trendingData.map((item: any) => (
        <>
          <img
            className="w-[400px]    rounded-2xl"
            src={item.thumbnail.regular.large}
            alt=""
          />

          <div className=" relative hover:scale-110 active:scale-90 duration-200  top-4 right-20 cursor-pointer bg-gray-900 bg-opacity-30 rounded-full flex justify-center items-center p-3 h-10">
            {bookmarkCart.find((data: any) => data.title === item.title) ? (
              <FaBookmark />
            ) : (
              <CiBookmark />
            )}
          </div>
        </>
      ))}
    </div>
  );
}
