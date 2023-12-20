import data from "./contraints/data.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
export default function App() {
  return (
    <div className="max-w-[1440px] p-8 mx-auto">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
