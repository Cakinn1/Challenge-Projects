import React from "react";
import data from "../contraints/data.json";
import ImageCard from "./ui/ImageCard";

export default function ImageCards() {
  return (
    <section className="pt-8 flex  flex-wrap gap-x-8">
      {data.map((data) => (
        <ImageCard
          artist={data.artist}
          description={data.description}
          images={data.images}
          name={data.name}
          source={data.source}
          year={data.year}
          key={data.name}
        />
      ))}
    </section>
  );
}
