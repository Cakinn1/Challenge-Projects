import { GithubProps } from "../../typings/typings";

export default function UserRepo({ githubData }: GithubProps) {
  return (
    <div className="bg-gray-100 dark:bg-[#141D2F]  px-8 flex justify-between  h-24 rounded-md p-4">
      <div>
        <h1 className="text-gray-400">Repos</h1>
        <p className="font-bold">{githubData?.public_repos}</p>
      </div>
      <div>
        <h1 className="text-gray-400">Followers</h1>
        <p className="font-bold">{githubData?.followers}</p>
      </div>
      <div>
        <h1 className="text-gray-400">Following</h1>
        <p className="font-bold">{githubData?.following}</p>
      </div>
    </div>
  );
}
