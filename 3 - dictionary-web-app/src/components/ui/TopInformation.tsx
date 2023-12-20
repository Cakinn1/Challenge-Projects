import React, { useEffect, useRef, useState } from "react";
import { DataProps, MainProps } from "../../typings/interface";

export default function TopInformation({ data }: { data: DataProps | null }) {
  const videoRef = useRef<HTMLAudioElement | null>(null);
  const [audio, setAudio] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  function playAudio() {
    try {
      if (videoRef.current) {
        videoRef?.current?.play();
      }
    } catch (error) {
      console.error("Error while trying to play audio:", error);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  }

  useEffect(() => {
    data?.phonetics.map((item) => {
      return setAudio(item.audio);
    });
  }, []);
  return (
    <>
      <div>
        <audio ref={videoRef} src={audio}></audio>
      </div>
      {error && <p className="text-red-500 pt-4">There is no support audio for {data?.word}</p>}
      <div className="flex justify-between pt-4 items-center">
        <h1 className="text-6xl font-bold">
          {data && data?.word[0]?.toUpperCase() + data?.word?.slice(1)}
        </h1>
        <img
          onClick={() => playAudio()}
          src="/icon-play.svg"
          className="cursor-pointer"
          alt=""
        />
      </div>
      <h4 className="text-2xl mt-2 text-[#A445ED]">{data?.phonetic}</h4>
    </>
  );
}
