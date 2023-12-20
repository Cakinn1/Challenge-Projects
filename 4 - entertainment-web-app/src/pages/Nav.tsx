import { useState } from "react";
import { Link } from "react-router-dom";
import BookmarkNavIcon from "../components/ui/icon/BookmarkNavIcon";
import AvatarIconNav from "../components/ui/icon/AvatarIconNav";
import LogoIconNav from "../components/ui/icon/LogoIconNav";
import HomeIconNav from "../components/ui/icon/HomeIconNav";
import SearchIconNav from "../components/ui/icon/SearchIconNav";
import TvIconNav from "../components/ui/icon/TvIconNav";

export default function Nav() {
  const [isActive, setIsActive] = useState<boolean>(false);

  function ListenToNavIcons(search: string) {
    console.log(search);
  }

  return (
    <div className="mr-[120px]">
      
      <nav className="w-[80px] fixed    bg-[#161D2F] m-6 rounded-2xl  flex  p-6 h-[900px]">
        <div className="mx-auto flex justify-between  flex-col">
          <LogoIconNav />
          <div className="space-y-12  flex flex-col">
            <HomeIconNav />
            <SearchIconNav />
            <TvIconNav />
            <Link className="mx-auto" to="/bookmarks">
              <BookmarkNavIcon />
            </Link>
          </div>
          <div>
            <AvatarIconNav />
          </div>
        </div>
      </nav>
    </div>
  );
}
