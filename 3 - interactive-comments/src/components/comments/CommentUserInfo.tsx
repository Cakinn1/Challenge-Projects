import React from "react";

export default function CommentUserInfo({
  png,
  username,
  createdAt,
  currentUserName,
}: {
  png: string | undefined;
  username: string | undefined;
  createdAt: string;
  currentUserName?: string;
}) {
  return (
    <div className="flex justify-between flex-1 h-7 items-center">
      <div className="flex gap-x-4 items-center">
        <img className="w-7 h-7 object-cover" src={png} alt="" />
        <h1 className="text-[#324152] font-semibold">{username}</h1>
        <div>
          {username === currentUserName ? (
            <div className="text-white px-2  rounded-md bg-[#5457b6] text-sm">
              you
            </div>
          ) : (
            ""
          )}
        </div>
        <h1 className="text-[#67727e]">{createdAt}</h1>
      </div>

      <div className="flex gap-x-2 items-center">
        {username === currentUserName ? (
          <div className="flex gap-x-4 items-center">
            <div className="flex cursor-pointer items-center gap-x-2">
              <img src="/images/icon-delete.svg" alt="" />
              <h1 className="text-red-500 font-semibold">Delete</h1>
            </div>
            <div className="flex cursor-pointer items-center gap-x-2">
              <img
                className="h-3 object-cover"
                src="/images/icon-reply.svg"
                alt=""
              />
              <h1 className="text-[#5457b6] font-bold">Edit</h1>
            </div>
          </div>
        ) : (
          <>
            <img
              className="h-3 object-cover"
              src="/images/icon-reply.svg"
              alt=""
            />
            <h1 className="text-[#5457b6] font-bold">Reply</h1>
          </>
        )}
      </div>
    </div>
  );
}
