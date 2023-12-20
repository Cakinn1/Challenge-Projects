import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Search from "../components/ui/SearchBar/Search";
import { Movie } from "../types/typings";
import Home from "../components/ui/Home/Home";
import { MainProps } from "./App";


export default function HomePage({
  bookmarkCart,
  addMovieToBookmark,
  movieData,
  trendingData
}: MainProps) {
  return (
    <section className="text-white flex">
      <div className="px-6 pb-12 w-full">
        <Home
        trendingData={trendingData}
          movieData={movieData}
          bookmarkCart={bookmarkCart}
          addMovieToBookmark={addMovieToBookmark}
        />
      </div>
    </section>
  );
}
