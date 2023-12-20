import { GithubProps } from "../../typings/typings";

export default function UsersLocation({ githubData }: GithubProps) {
  return (
    <div className="flex gap-x-4">
      <img
        className="object-cover w-[18px]"
        src="/assets/icon-location.svg"
        alt=""
      />
      {githubData && githubData.location ? (
        <p className="text-gray-400 dark:text-white">{githubData.location}</p>
      ) : (
        <p className="text-gray-300">Not Available</p>
      )}
    </div>
  );
}
