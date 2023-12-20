import { useState } from "react";
import Card from "./pages/Card";
import ThankYouCard from "./pages/ThankYouCard";

export default function App() {
  const [isThankYouOpen, setIsThankYouOpen] = useState<boolean>(false);
  const [storedValue, setStoredValue] = useState<string>("");

  return (
    <div className="min-h-screen flex justify-center items-center">
      {isThankYouOpen ? (
        <ThankYouCard storedValue={storedValue} />
      ) : (
        <Card
          setStoredValue={setStoredValue}
          storedValue={storedValue}
          isThankYouOpen={isThankYouOpen}
          setIsThankYouOpen={setIsThankYouOpen}
        />
      )}
    </div>
  );
}
