import { useState } from "react";
import { data } from "../api/constraints";
import Main from "../components/Main";
import SearchTop from "../components/SearchTop";
import { CharacterCardProps } from "../typings/typings";
import { SingleCarddProps } from "../components/SingleCard";

export default function Home() {
  const [selectedData, setSelectedData] = useState<SingleCarddProps[]>(data)

  return (
    <>
      <SearchTop setSelectedData={setSelectedData} selectedData={selectedData} />
      <Main selectedData={selectedData} />
    </>
  );
}
