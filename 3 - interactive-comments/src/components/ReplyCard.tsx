import React from "react";
import { InfoProps } from "../typings/typings";
import CommentsLikeAndDislike from "./comments/CommentsLikeAndDislike";
import CommentUserInfo from "./comments/CommentUserInfo";

export default function ReplyCard({
  handleIncreaseDecreaseReplyCounter,
  infoData,
  setInfoData,
}: InfoProps) {


  function handleReplyCounter(score: number, operation: string, id: number) {
    if (operation === "+") {
      const updateLikes = infoData.comments.map((comment) => ({
        // need to spread comments before mapping over commmet.replies, this is so
        // within the setinfodata it keeps the comments and we only need to change
        // the replies.
        ...comment,
        replies: comment.replies?.map((reply) => {
          return reply.score === score && reply.id === id
            ? { ...reply, score: reply.score + 1 }
            : reply;
        }),
      }));
      setInfoData({
        ...infoData,
        comments: updateLikes,
      });
    } else if (operation === "-") {
      const updateLikes = infoData.comments.map((comment) => ({
        ...comment,
        replies: comment.replies?.map((reply) => {
          return reply.score === score && reply.id === id
            ? { ...reply, score: reply.score - 1 }
            : reply;
        }),
      }));
      setInfoData({ ...infoData, comments: updateLikes });
    }
  }


  return (
    <>
      <section className="border-l space-y-4 ml-11 pl-11 h">
        {infoData.comments.map((item) =>
          item.replies?.map((reply, i) => (
            <section key={i} className="bg-[#ffffff] p-6 rounded-lg">
              <div className="flex  gap-x-5">
                <CommentsLikeAndDislike
                  handleIncreaseDecreaseReplyCounter={handleReplyCounter}
                  score={reply.score}
                  id={reply.id}
                />
                <div className="flex-1 space-y-2">
                  <CommentUserInfo
                  
                    createdAt={reply.createdAt}
                    png={reply.user?.image.png}
                    username={reply.user?.username}
                    currentUserName={infoData.currentUser.username}
                  />
                  <div>
                    <h1 className="text-[#67727e]">{reply.content}</h1>
                  </div>
                </div>
              </div>
            </section>
          ))
        )}
      </section>
    </>
  );
}
