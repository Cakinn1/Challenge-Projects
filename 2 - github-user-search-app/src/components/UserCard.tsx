import ErrorState from "./ErrorState";
import Loading from "./Loading";
import UserTopInfo from "./ui/UserTopInfo";
import UserAvatar from "./ui/UserAvatar";
import UserBio from "./ui/UserBio";
import UserRepo from "./ui/UserRepo";
import UserLocations from "./ui/UserLocations";
import { GithubDataProps } from "../typings/typings";

export default function UserCard({
  githubData,
  error,
  isLoading,
}: {
  githubData: GithubDataProps | null;
  error: boolean;
  isLoading: boolean;
}) {
  return (
    <div className="min-h-[400px] dark:text-[#efefef] dark:bg-[#1e2a47] input-shadow tracking-wider w-full mt-2 md:px-10 p-6 md:py-6 rounded-lg">
      {error ? (
        <ErrorState />
      ) : isLoading ? (
        <Loading />
      ) : (
        <div className="flex gap-x-4 w-full">
          <UserAvatar githubData={githubData} />
          <div className="space-y-8 w-full">
            <UserTopInfo githubData={githubData} />
            <UserBio githubData={githubData} />
            <UserRepo githubData={githubData} />
            <UserLocations githubData={githubData} />
          </div>
        </div>
      )}
    </div>
  );
}
