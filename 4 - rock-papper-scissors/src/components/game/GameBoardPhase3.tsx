import React from "react";
import Picking from "../Picking";

export default function GameBoardPhase3({
  playerOneChoice,
  computerChoice,
  housePickingLoading,
  playerOneColor,
  computerColor,
  phase4,
  draw,
  playerIsLoser,
  playerIsWinner,
  resetGame,
}: {
  playerOneChoice: string;
  housePickingLoading: boolean;
  computerChoice: string;
  playerOneColor: string;
  computerColor: string;
  phase4: boolean;
  draw: boolean;
  playerIsWinner: boolean;
  playerIsLoser: boolean;
  resetGame: () => void;
}) {
  return (
    <div
      className={`${
        phase4 ? "max-w-[900px]" : "max-w-[700px]"
      } duration-300   flex justify-between items-center text-white mx-auto py-32 `}
    >
      <div className="">
        <Picking text="you picked" />
        <div
          className={`flex relative   cursor-pointer ${playerOneColor} duration-300 shadow-2xl justify-center items-center w-[260px] h-[260px] rounded-full `}
        >
          <div className="bg-white w-[200px]  relative  h-[200px] rounded-full flex justify-center items-center">
            <img
              src={`/images/icon-${playerOneChoice}.svg`}
              className="w-[80px]"
              alt=""
            />
          </div>
          {playerIsWinner && phase4 && (
            <>
              <div className="absolute duration-300 bg-gray-400 opacity-10 -top-10 -z-50  w-[360px] h-[360px]  rounded-full "></div>
              <div className="absolute duration-300 bg-gray-400 opacity-10 -top-[80px] -z-50  w-[460px] h-[460px]  rounded-full "></div>
              <div className="absolute duration-300 bg-gray-400 opacity-10 -top-[120px] -z-50  w-[560px] h-[560px]  rounded-full "></div>
            </>
          )}
        </div>
      </div>
      {phase4 && (
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-4xl pb-4" onClick={() => resetGame()}>
            {playerIsWinner && phase4 && "YOU WIN"}{" "}
            {playerIsLoser && phase4 && "YOU LOSE"}
            {draw && phase4 && "DRAW"}
          </h1>
          <button
            onClick={resetGame}
            className="bg-white text-black px-10 py-3 rounded-md"
          >
            Play Again
          </button>
        </div>
      )}
      <div className="">
        <Picking text="the house picked" />
        {housePickingLoading ? (
          <div className="w-[200px] duration-300 h-[200px] bg-black bg-opacity-20 ml-10 rounded-full"></div>
        ) : (
          <div
            className={`flex relative cursor-pointer  duration-300 shadow-2xl justify-center items-center w-[260px] h-[260px] rounded-full ${computerColor}`}
          >
            <div className="bg-white w-[200px]    relative  h-[200px] rounded-full flex justify-center items-center">
              <img
                src={`/images/icon-${computerChoice}.svg`}
                className="w-[80px]"
                alt=""
              />
            </div>
            {playerIsLoser && phase4 && (
              <>
                <div className="absolute duration-300 bg-gray-400 opacity-10 -top-10 -z-50  w-[360px] h-[360px]  rounded-full "></div>
                <div className="absolute duration-300 bg-gray-400 opacity-10 -top-[80px] -z-50  w-[460px] h-[460px]  rounded-full "></div>
                <div className="absolute duration-300 bg-gray-400 opacity-10 -top-[120px] -z-50  w-[560px] h-[560px]  rounded-full "></div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
