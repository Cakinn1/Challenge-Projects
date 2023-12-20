import { useState } from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SneakerImageFullscreen from "./components/SneakerImageFullscreen";
export default function App() {
  const [counter, setCounter] = useState<number>(0);
  const [itemFullscreened, setItemFullscreened] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("1");

  return (
    <div className="max-w-[1440px] min-h-screen mx-auto">
      <Nav counter={counter} setCounter={setCounter} />
      {itemFullscreened && (
        <SneakerImageFullscreen
          setSelectedImage={setSelectedImage}
          selectedImage={selectedImage}
          setItemFullscreened={setItemFullscreened}
          itemFullscreened={itemFullscreened}
        />
      )}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Main
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                itemFullscreened={itemFullscreened}
                setItemFullscreened={setItemFullscreened}
                counter={counter}
                setCounter={setCounter}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
