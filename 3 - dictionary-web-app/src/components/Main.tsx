import React from "react";
import { DataProps, MainProps } from "../typings/interface";
import Meanings from "./Meanings";
import TopInformation from "./ui/TopInformation";
import SourceUrl from "./ui/SourceUrl";
import License from "./ui/License";

export default function Main({ data }: MainProps) {
  return (
    <>
      <TopInformation data={data} />
      {data?.meanings?.map((item) => (
        <Meanings
          partOfSpeech={item.partOfSpeech}
          definitions={item.definitions}
          synonyms={item.synonyms}
          antonyms={item.antonyms}
        />
      ))}
      {data && data?.sourceUrls.length > 0 && <p>Source</p>}
      {data?.sourceUrls.map((item) => (
        <SourceUrl source={item} />
      ))}
      <License data={data} />

    
    </>
  );
}
