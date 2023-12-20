import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import Nav from "./Nav";
import Bookmark from "./Bookmark";
import { useEffect, useState } from "react";
import data from "../contraints/data.json";
import Search from "../components/ui/SearchBar/Search";

export interface MainProps {
  bookmarkCart: any;
  setBookmarkCart: (value: any) => void;
  addMovieToBookmark: (value: string) => void;
  movieData: any;
  setMovieData: (value: any) => void;
  fetchMovieData?: () => void;
  trendingData?: any;
  bookmarked?: boolean;
  setBookmarked?: (value: boolean) => void;
}
export default function App() {
  const [bookmarkCart, setBookmarkCart] = useState<any>([]);
  const [movieData, setMovieData] = useState<any>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [trendingData, setTrendingData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [bookmarked, setBookmarked] = useState<boolean>(false);

  function addMovieToBookmark(title: string) {
    const findCurrentItem = movieData.find((data: any) => data.title === title);

    if (bookmarkCart.includes(findCurrentItem)) {
      const updateCart = bookmarkCart.filter(
        (item: any) => item.title !== title
      );
      
      setBookmarkCart(updateCart);
    } else {
      setBookmarkCart([...bookmarkCart, findCurrentItem]);
    }
  }

  function fetchMovieData() {
    const filterOutTrendingData = data.filter((item) => !item.isTrending);
    const filterInTrendingData = data.filter((item) => item.isTrending);
    setTrendingData(filterInTrendingData);
    if (inputValue) {
      const filterData = movieData.filter((data: any) =>
        data.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setMovieData(filterData);
    } else {
      setMovieData(filterOutTrendingData);
    }
  }

  useEffect(() => {
    fetchMovieData();
  }, []);

  return (
    <Router>
      <div className="max-w-[1440px] flex mx-auto">
        <Nav />
        <div>
          <Search
            inputValue={inputValue}
            fetchMovieData={fetchMovieData}
            setInputValue={setInputValue}
          />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  trendingData={trendingData}
                  fetchMovieData={fetchMovieData}
                  movieData={movieData}
                  setMovieData={setMovieData}
                  addMovieToBookmark={addMovieToBookmark}
                  bookmarkCart={bookmarkCart}
                  setBookmarkCart={setBookmarkCart}
                />
              }
            />
            <Route
              path="/bookmarks"
              element={
                <Bookmark
                  bookmarked={bookmarked}
                  setBookmarked={setBookmarked}
                  movieData={movieData}
                  setMovieData={setMovieData}
                  addMovieToBookmark={addMovieToBookmark}
                  bookmarkCart={bookmarkCart}
                  setBookmarkCart={setBookmarkCart}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// bg-app-dark-blue;
