import { GithubProps } from "../../typings/typings";

export default function UserCompany({githubData}:GithubProps) {
  return (
    <div className="flex gap-x-4">
    <img
      className="object-cover h-[24px] w-[24px]"
      src="/assets/icon-company.svg"
      alt=""
    />
    {githubData && githubData.company ? (
      <p className="text-gray-400 dark:text-white">
        {githubData.company}
      </p>
    ) : (
      <p className="text-gray-300">Not Available</p>
    )}
  </div>
  )
}
