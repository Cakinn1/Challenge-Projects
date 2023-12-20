import React from "react";
import { DataProps, InfoProps } from "../typings/typings";
import CommentsLikeAndDislike from "./comments/CommentsLikeAndDislike";
import CommentUserInfo from "./comments/CommentUserInfo";

export default function CommentCard({ infoData, setInfoData, handleIncreaseDecreaseReplyCounter }: InfoProps) {

  return (
    <>
      {infoData.comments.map((comment, i) => (
        <section key={i} className="bg-[#ffffff] p-6 rounded-lg">
          <div className="flex  gap-x-5">
            <CommentsLikeAndDislike
              handleIncreaseDecreaseReplyCounter={
                handleIncreaseDecreaseReplyCounter
              }
              id={comment.id}
              score={comment.score}
            />
            <div className="flex-1 space-y-2">
              <CommentUserInfo
                createdAt={comment.createdAt}
                png={comment.user?.image.png}
                username={comment.user?.username}
              />
              <div>
                <h1 className="text-[#67727e]">{comment.content}</h1>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
