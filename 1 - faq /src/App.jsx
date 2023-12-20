import FaqCard from "./components/FaqCard";
import Header from "./components/Header";

export default function App() {
  return (
    <div
      className=" w-full h-[300px] text-white bg-cover "
      style={{ backgroundImage: "url(/images/background-pattern-desktop.svg)" }}
    >
      <FaqCard />
    </div>
  );
}
