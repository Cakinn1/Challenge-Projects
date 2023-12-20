import React from "react";

export default function BookmarkNavIcon() {
  return (
    <div className="mx-auto">
      <img
        className="w-5 h-5 cursor-pointer hover:fill-[#FC4747] object-cover"
        src={`./assets/img-bookmark.svg`}
        alt=""
      />
    </div>
  );
}
