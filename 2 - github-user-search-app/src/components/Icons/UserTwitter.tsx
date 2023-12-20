import { GithubProps } from "../../typings/typings";

export default function UserTwitter({ githubData }: GithubProps) {
  return (
    <div className="flex gap-x-4">
      <img
        className="object-cover h-[24px] w-[24px]"
        src="/assets/icon-twitter.svg"
        alt=""
      />
      {githubData && githubData.twitter_username ? (
        <p className="text-gray-400 dark:text-white">
          {githubData.twitter_username}
        </p>
      ) : (
        <p className="text-gray-300">Not Available</p>
      )}
    </div>
  );
}
