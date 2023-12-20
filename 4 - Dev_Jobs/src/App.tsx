import "./styles/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import SingleCard from "./components/SingleCard";
export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user/:id" element={<SingleCard />} />
      </Routes>
    </Router>
  );
}
