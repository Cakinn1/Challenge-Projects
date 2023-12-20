import { GithubProps } from "../../typings/typings";

export default function UserBio({ githubData }: GithubProps) {
  return (
    <div>
      {githubData?.bio ? (
        <h1 className="text-gray-400 text-[13px] font-sans md:text-[15px] dark:text-[#efefef]">
          {githubData.bio}
        </h1>
      ) : (
        <p className="text-gray-300">This profile has no bio</p>
      )}
    </div>
  );
}
