import React, { useEffect, useState } from "react";
import { DataProps } from "../typings/typings";
import data from "../constants/data.json";
import CommentCard from "./CommentCard";
import ReplyCard from "./ReplyCard";
import CommentsInput from "./CommentsInput";

export default function Main() {
  const [infoData, setInfoData] = useState<DataProps>(data);

  function handleIncreaseDecreaseReplyCounter(
    score: number,
    operation: string,
    id: number
  ) {
    if (operation === "+") {
      const updateLikes = infoData.comments.map((item) =>
        item.score === score && item.id === id
          ? { ...item, score: item.score + 1 }
          : item
      );
      setInfoData({ ...infoData, comments: updateLikes });
    } else if (operation === "-") {
      if (score < 1) {
        return;
      }
      const updateLikes = infoData.comments.map((item) =>
        item.score === score && item.id === id
          ? { ...item, score: item.score - 1 }
          : item
      );
      setInfoData({ ...infoData, comments: updateLikes });
    }
  }

  function handleCommentInput(id: number) {
    const newReply: any = {
      content: "hello",
    };

    infoData.comments[id].replies?.push(newReply);
  }

  return (
    <section id="sec" className="max-w-[750px] px-6 mx-auto py-32 min-h-screen">
      <div className="space-y-4">
        <CommentCard
          handleIncreaseDecreaseReplyCounter={
            handleIncreaseDecreaseReplyCounter
          }
          setInfoData={setInfoData}
          infoData={infoData}
        />
        <ReplyCard
          handleIncreaseDecreaseReplyCounter={
            handleIncreaseDecreaseReplyCounter
          }
          setInfoData={setInfoData}
          infoData={infoData}
        />
        <CommentsInput infoData={infoData} setInfoData={setInfoData} />
      </div>
    </section>
  );
}
