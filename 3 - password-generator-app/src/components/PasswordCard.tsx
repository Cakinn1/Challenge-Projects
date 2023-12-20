import { SearchProps } from "./Search";
import StrengthCalc from "./StrengthCalc";

interface PairsProps {
  value: boolean;
  setValue: (value: boolean) => void;
  textValue: string;
}

export default function PasswordCard({
  inputValue,
  setInputValue,
  lowerCaseTicked,
  numbersTicked,
  setLowerCaseTicked,
  setNumbersTicked,
  setSymbolsTicked,
  setUpperCaseTicked,
  symbolsTicked,
  upperCaseTicked,
  storeRandomCharacters
}: SearchProps) {
  function HandleInputValues({
    value,
    setValue,
    textValue,
  }: {
    value: boolean;
    setValue: (value: boolean) => void;
    textValue: string;
  }) {
    return (
      <div className="flex gap-x-6">
        <input type="checkbox" onClick={() => setValue(!value)} />
        <h1 className="text-lg">Include {textValue}</h1>
      </div>
    );
  }

  const pairs: PairsProps[] = [
    {
      value: upperCaseTicked,
      setValue: setUpperCaseTicked,
      textValue: "Uppercase Letters",
    },
    {
      value: lowerCaseTicked,
      setValue: setLowerCaseTicked,
      textValue: "Lowercase Letters",
    },
    {
      value: numbersTicked,
      setValue: setNumbersTicked,
      textValue: "Numbers",
    },
    {
      value: symbolsTicked,
      setValue: setSymbolsTicked,
      textValue: "Symbols",
    },
  ];

  return (
    <section className="h-[500px] text-white p-10 bg-[#23222A] rounded-b-lg ">
      <div>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg">Character Length</h1>
            <p className="text-3xl text-[#A3FFAE]">{inputValue}</p>
          </div>
          <input
            type="range"
            max="20"
            className="w-full"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          {pairs.map((pair) => (
            <HandleInputValues
              setValue={pair.setValue}
              textValue={pair.textValue}
              value={pair.value}
              key={pair.textValue}
            />
          ))}

          <StrengthCalc />

          <button onClick={() => storeRandomCharacters()} className="w-full rounded-md py-4  shadow-md text-black uppercase bg-[#A3FFAE]">Generate</button>
        </form>
      </div>
    </section>
  );
}
