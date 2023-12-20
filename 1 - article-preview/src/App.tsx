import { useState } from "react";
import Aritcle from "./components/Aritcle";
import Img from "./components/Img";

export default function App() {
  const [isShareOpen, setIsShareOpen] = useState<boolean>(false)
  return (
    <div className="py-40 min-h-screen flex  justify-center items-center">
      <div className="flex shadow-2xl mx-6 md:px-0 md:flex-row flex-col max-w-[850px] w-full min-h-[300px]  rounded-2xl md:mx-auto">

      <Img />
      <Aritcle isShareOpen={isShareOpen} setIsShareOpen={setIsShareOpen} />
      </div>
    </div>
  )
}