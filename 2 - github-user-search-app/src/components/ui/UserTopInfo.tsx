import { GithubProps } from "../../typings/typings";

export default function UserTopInfo({ githubData }: GithubProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between flex-col lg:flex-row lg:items-center">
        <h1 className="font-bold md:text-lg lg:text-3xl">{githubData?.name}</h1>
        <p className="text-gray-400 dark:text-[#efefef]">
          {githubData?.created_at}
        </p>
      </div>
      <a href={githubData?.url} className="text-blue-500">
        @{githubData?.login}
      </a>
    </div>
  );
}
