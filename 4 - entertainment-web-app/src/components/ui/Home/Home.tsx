import React, { useEffect, useState } from "react";
import MovieCard from "../Card/MovieCard";
import Heading from "../Card/Heading";
import TrendingCard from "../Card/TrendingCard";

export interface HomeProps {
  movieData: any;
  bookmarkCart: any;
  addMovieToBookmark: (value: string) => void;
  trendingData: any;
}
export default function Home({
  movieData,
  addMovieToBookmark,
  bookmarkCart,
  trendingData,
}: HomeProps) {
  return (
    <section className="mt-12">
      <div className="mb-10">
        <Heading value="Trending" />
        <TrendingCard
          bookmarkCart={bookmarkCart}
          addMovieToBookmark={addMovieToBookmark}
          trendingData={trendingData}
        />
      </div>

      {/*  */}
      {/*  leave space for other componet */}

      {/*  */}

      <div>
        <Heading value="Recommended for you" />

        <div className="flex flex-wrap gap-x-6 ">
          {movieData.map((data: any) => (
            <MovieCard
              addMovieToBookmark={addMovieToBookmark}
              key={data.title}
              rating={data.rating}
              title={data.title}
              year={data.year}
              thumbnail={data.thumbnail}
              isTrending={data.isTrending}
              category={data.category}
              bookmarkCart={bookmarkCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
