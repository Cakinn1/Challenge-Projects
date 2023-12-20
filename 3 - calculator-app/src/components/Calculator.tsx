import React, { FormEvent, useEffect, useState } from "react";
import Header from "./Header";
import Total from "./Total";

export interface TotalProps {
  result: number | null;
  firstNumber: number | null | string;
  secondNumber: number | null | string;
  operation: string;
  equals: boolean;
}

export default function Calculator() {
  const [firstNumber, setFirstNumber] = useState<number | null | string>(null);
  const [secondNumber, setSecondNumber] = useState<number | null | string>(
    null
  );
  const [operation, setOperation] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [equals, setEqauls] = useState<boolean>(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function handleNumberClick(value: number) {
    setEqauls(false);
    if (operation === "") {
      setFirstNumber((prev) => (prev ?? "") + value.toString());
    } else if (!result) {
      setSecondNumber((prev) => (prev ?? "") + value.toString());
    } else {
      setFirstNumber(result);
      console.log(value);
      setSecondNumber(value.toString());
      setResult(null);
    }
  }

  const values: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  function ButtonNumberInputs({ value }: { value: number }) {
    return (
      <button
        className="md:w-[20%] w-[18%] text-[#444b5a] font-bold text-4xl bg-[#EAE3CD] mb-8  shadow-2xl py-4 rounded-lg"
        onClick={() => handleNumberClick(value)}
      >
        {value}
      </button>
    );
  }

  function handleOperations(operationValue: string) {
    setEqauls(false);
    setOperation(operationValue);
  }

  const operationValues: string[] = ["+", "-", "x", "/"];
  function OperationNumberInputs({
    operationValue,
  }: {
    operationValue: string;
  }) {
    return (
      <button
        className="w-[18%] md:w-[20%] mb-8  shadow-2xl py-4 rounded-lg text-[#444b5a] font-bold text-4xl bg-[#EAE3CD]"
        onClick={() => handleOperations(operationValue)}
      >
        {operationValue}
      </button>
    );
  }

  function calculateResult() {
    setEqauls(true);
    if (firstNumber && secondNumber) {
      if (operation === "+") {
        setResult(Number(firstNumber) + Number(secondNumber));
      } else if (operation === "-") {
        setResult(Number(firstNumber) - Number(secondNumber));
      } else if (operation === "x") {
        setResult(Number(firstNumber) * Number(secondNumber));
      } else if (operation === "/") {
        setResult(Number(firstNumber) / Number(secondNumber));
      }
    }
  }

  function clearResult() {
    setFirstNumber(null);
    setSecondNumber(null);
    setOperation("");
    setResult(0);
    setEqauls(false);
  }

  function BottomInputs({
    textValue,
    onClickValue,
  }: {
    textValue: string;
    onClickValue: () => void;
  }) {
    return (
      <button
        className={` w-[45%] md:w-[46%] ${
          textValue === "reset" ? " bg-[#637097]" : "bg-[#d03f2f]"
        } uppercase text-white text-2xl tracking-wider mb-8  shadow-2xl py-4 rounded-lg`}
        onClick={() => onClickValue()}
      >
        {textValue}
      </button>
    );
  }

  function handleDeleteSingleNumbers() {
    if (!firstNumber && !secondNumber) {
      return;
    } else {
      const strResult = String(result).split("").slice(0, -1).join("");
      setResult(Number(strResult));
    }
  }

  return (
    <div className="flex-1 px-6 md:px-0 ">
      <Header />
      <Total
        equals={equals}
        firstNumber={firstNumber}
        operation={operation}
        secondNumber={secondNumber}
        result={result}
        key={result}
      />
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{ backgroundColor: "hsl(223, 31%, 20%)" }}
        className="p-8 font-bold placeholder: rounded-2xl"
      >
        <div className="flex flex-wrap gap-x-8">
          <button
            className="w-[18%] md:w-[20%] text-2xl md:text-4xl uppercase text-white font-bold  mb-8 bg-[#637097]  shadow-2xl py-4 rounded-lg"
            onClick={() => handleDeleteSingleNumbers()}
          >
            Del
          </button>
          {values.map((value) => (
            <ButtonNumberInputs value={value} key={value} />
          ))}

          {operationValues.map((operation) => (
            <OperationNumberInputs operationValue={operation} key={operation} />
          ))}

          <button className="w-[18%] md:w-[20%] text-[#444b5a] font-bold text-4xl bg-[#EAE3CD] mb-8  shadow-2xl py-4 rounded-lg">
            .
          </button>
          <BottomInputs textValue="reset" onClickValue={() => clearResult()} />
          <BottomInputs textValue="=" onClickValue={() => calculateResult()} />
        </div>
      </form>
    </div>
  );
}
