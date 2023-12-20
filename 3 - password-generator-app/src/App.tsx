import { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import PasswordCard from "./components/PasswordCard";

export default function App() {
  const [inputValue, setInputValue] = useState<string>("0");
  const [upperCaseTicked, setUpperCaseTicked] = useState<boolean>(false);
  const [lowerCaseTicked, setLowerCaseTicked] = useState<boolean>(false);
  const [numbersTicked, setNumbersTicked] = useState<boolean>(false);
  const [sybmolsTicked, setSybmolsTicked] = useState<boolean>(false);
  const [storedResult, setStoredResult] = useState<string>("");

  function storeRandomCharacters() {
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const sybmols = "TBD";
    const result = [];

  

    for (let i = 0; i < parseInt(inputValue); ++i) {
      if (numbersTicked) {
        const randomNumber = Math.floor(Math.random() * numbers.length);
        result.push(randomNumber);
        console.log(randomNumber);
      }

      if (lowerCaseTicked) {
        const index = Math.floor(Math.random() * lowerCaseLetters.length);
        result.push(lowerCaseLetters.charAt(index));
      }

      if (upperCaseTicked) {
        const index = Math.floor(Math.random() * upperCaseLetters.length);
        result.push(upperCaseLetters.charAt(index));
      }
    }

    setStoredResult(result.join(""));
  }

  return (
    <div className="max-w-[540px] space-y-4 min-h-screen mx-auto py-32">
      <Header />
      <Search
        storedResult={storedResult}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <PasswordCard
        storeRandomCharacters={storeRandomCharacters}
        lowerCaseTicked={lowerCaseTicked}
        numbersTicked={numbersTicked}
        setLowerCaseTicked={setLowerCaseTicked}
        setNumbersTicked={setNumbersTicked}
        setSymbolsTicked={setSybmolsTicked}
        setUpperCaseTicked={setUpperCaseTicked}
        symbolsTicked={sybmolsTicked}
        upperCaseTicked={upperCaseTicked}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
    </div>
  );
}
