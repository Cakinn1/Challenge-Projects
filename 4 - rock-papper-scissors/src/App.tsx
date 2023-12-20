import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import HomePage from "./pages/HomePage";
import { useState } from "react";
export default function App() {
  const [counter, setCounter] = useState<number>(0)

  return (
      <section className="max-w-[1366px] mx-auto min-h-screen py-10">
        <Nav counter={counter} />
        <HomePage counter={counter} setCounter={setCounter} />
      </section>
  );
}
