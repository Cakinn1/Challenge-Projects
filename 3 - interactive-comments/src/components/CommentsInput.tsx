import React, { useEffect } from "react";
import { Props } from "../typings/typings";

export default function CommentsInput({ infoData, setInfoData }: Props) {
  //  check if item.id === id of the user?



  useEffect(() => {
    console.log(infoData.comments.map((item) => item.replies));
  }, [infoData]);
  return (
    <section className="bg-[#ffffff]  p-6 rounded-lg">
      <div className="flex  gap-x-5 ">
        <figure>
          <img src={infoData.currentUser.image.png} alt="" />
        </figure>
        <div className="flex-1 min-h-[100px]">
          <textarea
            placeholder="Add a comment."
            className="resize-none border rounded-2xl p-3 text-sm focus:outline-none w-full h-full"
          />
        </div>
        <div>
          <button
            // onClick={() => handleCommentInput()}
            className="px-8 bg-[#5457b6] rounded-md text-white text-lg py-2"
          >
            Sendd
          </button>
        </div>
      </div>
    </section>
  );
}
