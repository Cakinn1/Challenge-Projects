import React from "react";

export default function Picking({ text }: { text: string }) {
  return (
    <h1 className={`pb-16 ${text === 'the house picked' ? "pl-2" : "pl-14"} text-3xl tracking-wider uppercase`}>{text}</h1>
  );
}
