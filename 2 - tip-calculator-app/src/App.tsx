import Calculator from "./components/Calculator";

export default function App() {
  return (
    <div className="max-w-[1000px] mx-auto font-mono">
      <div className="flex flex-col justify-center items-center py-12 font-semibold text-3xl uppercase tracking-widest">
        <h1 className="mb-1">spli</h1>
        <h1>Tier</h1>
      </div>
      <Calculator />
    </div>
  );
}

// entered number (142.99) + tip number (15%)
