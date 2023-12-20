import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import SingleCountryCard from "./components/SingleCountryCard";
export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<SingleCountryCard />} />
      </Routes>
    </Router>
  );
}
