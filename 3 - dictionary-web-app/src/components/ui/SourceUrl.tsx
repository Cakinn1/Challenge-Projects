import React from "react";

export default function SourceUrl({ source }: { source: string }) {
  return (
    <div>
        <a
          className="flex gap-x-2 cursor-pointer"
          target="_blank"
          href={`${source}`}
        >
          <p>{source}</p>
          <img src="/icon-new-window.svg" alt="" />
        </a>
    </div>
  );
}
