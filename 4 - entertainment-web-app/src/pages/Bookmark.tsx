import React from "react";
import MovieCard from "../components/ui/Card/MovieCard";
import { FaHeading } from "react-icons/fa6";
import Heading from "../components/ui/Card/Heading";
import { MainProps } from "./App";
import CategoryMoives from "../components/ui/Category/CategoryMoives";
import CategoryTvshow from "../components/ui/Category/CategoryTvshow";

export default function Bookmark({
  bookmarkCart,
  setBookmarkCart,
  addMovieToBookmark,
  movieData,
  setMovieData,
  bookmarked,
  setBookmarked,
}: MainProps) {
  const categoryMovie = bookmarkCart.filter(
    (item: any) => item.category === "Movie"
  );
  const categoryTvShows = bookmarkCart.filter(
    (item: any) => item.category === "TV Series"
  );


  return (
    <div className="flex flex-col ml-4 mt-20 text-white">
      <div>
        <Heading value="Bookmarked Movies" />
        <div className="flex flex-wrap gap-x-6 ">
          {bookmarkCart?.map((data: any) => (
            <>
              {data.category === "Movie" && data.category.length > 0 && (
                <MovieCard
                  bookmarked={true}
                  setBookmarked={setBookmarked}
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
              )}
            </>
          ))}
          {categoryMovie.length < 1 && <CategoryMoives />}
        </div>
      </div>

      <div>
        <Heading value="Bookmarked Tv Series" />
        <div className="flex flex-wrap gap-x-6 ">
          {bookmarkCart?.map(
            (data: any) =>
              data.category === "TV Series" && (
                <MovieCard
                bookmarked={true}
                setBookmarked={setBookmarked}
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
              )
          )}
          {categoryTvShows.length < 1 && <CategoryTvshow />}
        </div>
      </div>
    </div>
  );
}
