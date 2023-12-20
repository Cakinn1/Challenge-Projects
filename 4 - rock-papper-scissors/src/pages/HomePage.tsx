import React, { useEffect, useState } from "react";
import { choicesArray } from "../contants/constants";
import GameBoardPhase3 from "../components/game/GameBoardPhase3";

export default function HomePage({
  counter,
  setCounter,
}: {
  counter: number;
  setCounter: (value: number) => void;
}) {
  const [playerOneChoice, setPlayerOneChoice] = useState<string>("");
  const [computerChoice, setComputerChoice] = useState<string>("");
  const [winningPlayer, setWinningPlayer] = useState<string>("");
  const [isGameBoardOpen, setIsGameBoardOpen] = useState<boolean>(true);
  const [playerOneColor, setPlayerOneColor] = useState<string>("");
  const [computerColor, setComputerColor] = useState<string>("");
  const [housePickingLoading, setHousePickingLoading] = useState<boolean>(true);
  const [phase4, setPhase4] = useState<boolean>(false);
  const [playerIsWinner, setPlayerIsWinner] = useState<boolean>(false);
  const [playerIsLoser, setPlayerIsLoser] = useState<boolean>(false);
  const [draw, setDraw] = useState<boolean>(false);

  function getPlayersOneChoiceAndSetComputersChoice(value: string) {
    const randomNumber: number = Math.floor(
      Math.random() * choicesArray.length
    );
    setPlayerOneChoice(value);
    setComputerChoice(choicesArray[randomNumber]);
    setIsGameBoardOpen(false);
  }


  function handleColorChange() {
    if (playerOneChoice === "scissors") {
      setPlayerOneColor("bg-gradient-to-t from-[#ec9e0e] to-[#eca922]");
    } else if (playerOneChoice === "rock") {
      setPlayerOneColor("bg-gradient-to-t from-[#dc2e4e] to-[#dd405d]");
    } else if (playerOneChoice === "paper") {
      setPlayerOneColor("bg-gradient-to-t from-[#4865f4] to-[#5671f5]");
    }
    if (computerChoice === "scissors") {
      setComputerColor("bg-gradient-to-t from-[#ec9e0e] to-[#eca922]");
    } else if (computerChoice === "rock") {
      setComputerColor("bg-gradient-to-t from-[#dc2e4e] to-[#dd405d]");
    } else if (computerChoice === "paper") {
      setComputerColor("bg-gradient-to-t from-[#4865f4] to-[#5671f5]");
    }
  }
  function game() {
    if (
      (playerOneChoice === "rock" && computerChoice === "scissors") ||
      (playerOneChoice === "paper" && computerChoice === "rock") ||
      (playerOneChoice === "scissors" && computerChoice === "paper")
    ) {
      setPlayerIsWinner(true);
    } else if (
      (computerChoice === "rock" && playerOneChoice === "scissors") ||
      (computerChoice === "paper" && playerOneChoice === "rock") ||
      (computerChoice === "scissors" && playerOneChoice === "paper")
    ) {
      setPlayerIsLoser(true);
    } else if (
      (computerChoice === "rock" && playerOneChoice === "rock") ||
      (computerChoice === "paper" && playerOneChoice === "paper") ||
      (computerChoice === "scissors" && playerOneChoice === "scissors")
    ) {
      setDraw(true);
    }
    setTimeout(() => {
      setHousePickingLoading(false);
    }, 2000);
    setTimeout(() => {
      setPhase4(true);

      if (playerIsWinner) setCounter(counter + 1);
      if (playerIsLoser) setCounter(counter - 1);
    }, 2500);
  }

  function resetGame() {
    setPlayerOneChoice("");
    setComputerChoice("");
    setWinningPlayer("");
    setIsGameBoardOpen(true);
    setHousePickingLoading(true);
    setDraw(false);
    setPhase4(false);
    setPlayerIsWinner(false);
    setPlayerIsLoser(false);
  }

  useEffect(() => {
    game();
    handleColorChange();
    console.log(playerIsWinner, playerIsLoser)
  }, [playerOneChoice, draw,  computerChoice, playerIsWinner, playerIsLoser]);

  function ImageButtonInputs({
    icon,
    gradientBg,
    lineClass,
  }: {
    gradientBg: string;
    lineClass: string;
    icon: string;
  }) {
    return (
      <div
        onClick={() => getPlayersOneChoiceAndSetComputersChoice(icon)}
        className={`flex duration-300 cursor-pointer duration-300 shadow-2xl justify-center items-center w-[160px] h-[160px] bg-gradient-to-t  rounded-full ${gradientBg}`}
      >
        <div className="bg-white w-[120px] duration-300   relative  h-[120px] rounded-full flex justify-center items-center">
          <div className={`${lineClass}`}></div>
          <img src={`/images/icon-${icon}.svg`} alt="" />
        </div>
      </div>
    );
  }

  return (
    <>
      {isGameBoardOpen ? (
        <div className=" flex flex-col max-w-[400px] mx-auto py-32 text-white">
          <div className="flex justify-between">
            <ImageButtonInputs
              gradientBg="bg-gradient-to-t from-[#5671f5] to-[#4865f4]"
              lineClass="absolute  bg-[#000] -z-50 opacity-50 -rotate-[35deg] -right-[10px] -bottom-[100px] w-[15px] h-[120px]"
              icon="paper"
            />
            <ImageButtonInputs
              gradientBg="bg-gradient-to-t from-[#ec9e0e] to-[#eca922]"
              lineClass="absolute -left-[60px] bg-[#000]  opacity-50 rotate-[90deg]  -z-50 w-[15px] h-[120px]"
              icon="scissors"
            />
          </div>
          <ImageButtonInputs
            gradientBg="mx-auto bg-gradient-to-t from-[#dc2e4e] to-[#dd405d]"
            lineClass="bg-[#000] absolute  -right-[10px] bg -top-[100px] -z-50 w-[15px] h-[120px] opacity-50 rotate-[35deg] "
            icon="rock"
          />
        </div>
      ) : (
        <GameBoardPhase3
          draw={draw}
          resetGame={resetGame}
          playerIsLoser={playerIsLoser}
          playerIsWinner={playerIsWinner}
          computerColor={computerColor}
          playerOneColor={playerOneColor}
          computerChoice={computerChoice}
          housePickingLoading={housePickingLoading}
          playerOneChoice={playerOneChoice}
          phase4={phase4}
        />
      )}
    </>
  );
}
