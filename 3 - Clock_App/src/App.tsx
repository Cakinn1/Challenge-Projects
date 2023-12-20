import { useEffect, useState } from "react";
import Quotes from "./components/Quotes";
import Timer from "./components/Timer";
import { TimerProps } from "./typings/interface";
import { fetchTimer } from "./constraints/api";
import BottomInfo from "./components/BottomInfo";
// https://freegeoip.app/json/  -- get location ap

export default function App() {
  const [timerData, setTimerData] = useState<TimerProps | null>(null);
  const [timerText, setTimeText] = useState<string>("");
  const [image, setImage] = useState<string>("bg-image-nighttime.jpg");
  const [clicked, setClicked] = useState<boolean>(false);

  async function fetchData() {
    const data = await fetchTimer();
    setTimerData(data);
  }

  function handleImageFetch() {
    if (timerText === "Morning" || timerText === "Afternoon") {
      setImage("bg-image-daytime.jpg");
    } else if (timerText === "Evening" || timerText === "Night") {
      setImage("bg-image-nighttime.jpg");
    }
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
    handleImageFetch();
    fetchData();

    setInterval(() => {
      fetchData();
    }, 5000);
  }, []);

  return (
    <>
      <div
        className=" h-full overflow-scroll  absolute -z-50 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="text-white bg-black bg-opacity-50 h-full"></div>
      </div>

      <div
        className={`max-w-[1200px]  text-white mx-auto p-10 ${
          clicked ? "h-[100px]" : ""
        }`}
      >
        <Quotes clicked={clicked} />
        <Timer
          setTimeText={setTimeText}
          timerText={timerText}
          setTimerData={setTimerData}
          timerData={timerData}
          clicked={clicked}
          setClicked={setClicked}
        />
      </div>
      <BottomInfo clicked={clicked} timerData={timerData} />
    </>
  );
}
