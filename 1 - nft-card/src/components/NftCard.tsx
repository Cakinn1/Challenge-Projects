import React from "react";
import { nftData } from "../contraints/data";

export default function NftCard() {
  const result = [];

  for (let word of nftData.author.split(" ")) {
    const words = word.slice(0, 1).toUpperCase() + word.slice(1);
    result.push(words);
  }

  return (
    <section
      style={{ backgroundColor: "hsl(216, 50%, 16%)" }}
      className="max-w-[350px] text-[16px] space-y-4 rounded-2xl p-6 shadow-2xl w-full"
    >
      <figure>
        <img
          src={nftData.image}
          className="h-[300px] rounded-2xl w-full object-cover"
          alt=""
        />
      </figure>

      <div className="flex gap-x-2 text-white">
        <h1 className="text-lg">{nftData.nftName}</h1>
        <span>{"#" + nftData.id}</span>
      </div>
      <div>
        <p style={{ color: "hsl(215, 51%, 70%)" }}>{nftData.description}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-x-2">
          <img src={nftData.ethImage} alt="" />
          <span
            className="font-semibold"
            style={{ color: "hsl(178, 100%, 50%)" }}
          >
            {nftData.cost + " ETH"}
          </span>
        </div>

        <div className="flex gap-x-2">
          <img className="object-cover w-5" src={nftData.clockImage} alt="" />
          <span style={{ color: "hsl(215, 51%, 70%)" }}>
            {nftData.daysLeft + " days left"}
          </span>
        </div>
      </div>

      <hr />

      <div className="flex items-center gap-x-2">
        <figure>
          <img
            className="object-cover border-2 border-white rounded-full w-[30px]"
            src={nftData.authorImage}
            alt=""
          />
        </figure>
        <h3 className="text-sm" style={{ color: "hsl(215, 51%, 70%)" }}>
          Creation of <span className="text-white text-[16px]">{result.join(" ")}</span>
        </h3>
      </div>
    </section>
  );
}
