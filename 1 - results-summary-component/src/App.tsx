import LeftBar from "./components/LeftBar/LeftBar";
import RightBar from "./components/RightBar/RightBar";

export default function App() {
  return (
    <div className="max-w-[1440px] mx-auto flex justify-center items-center min-h-screen">
      <div className="bg-white flex flex-col md:flex-row shadow-md rounded-3xl">
        <LeftBar />
        <RightBar />
      </div>
    </div>
  );
}
