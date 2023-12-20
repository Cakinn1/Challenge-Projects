import React from "react";

export default function Error() {
  return (
    <section className="flex justify-center items-center h-[50vh]">
      <div className="text-center space-y-2">
        <h1 className="font-bold text-3xl">No Definitions Found</h1>
        <p className="text-lg">
          Sorry palm we couldn't find definitions for the word you were looking
          for.
        </p>
      </div>
    </section>
  );
}
