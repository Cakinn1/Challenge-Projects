import { GithubProps } from "../../typings/typings";

export default function UserWebsite({githubData}: GithubProps) {
  return (
    <div className="flex gap-x-4">
    <img
      className="object-cover h-[24px] w-[24px]"
      src="/assets/icon-website.svg"
      alt=""
    />
    {githubData && githubData.blog ? (
      <a href={githubData.blog} className="text-gray-400 dark:text-white">
        {githubData?.blog?.split("/")[2]}
      </a>
    ) : (
      <p className="text-gray-300">Not Available</p>
    )}
  </div>
  )
}
