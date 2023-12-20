import React from "react";

export default function PartOfSpeech({
  partOfSpeech,
}: {
  partOfSpeech: string;
}) {
  return (
    <div className="py-8 flex items-center gap-x-4">
      <h1 className="italic font-extrabold  text-2xl">
        {partOfSpeech && partOfSpeech.length > 0 && partOfSpeech}
      </h1>
      <hr className="w-full" />
    </div>
  );
}
