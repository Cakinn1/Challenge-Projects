import UserTwitter from "../Icons/UserTwitter";
import UserCompany from "../Icons/UserCompany";
import UserWebsite from "../Icons/UserWebsite";
import UsersLocation from "../Icons/UsersLocation";
import { GithubProps } from "../../typings/typings";

export default function UserLocations({ githubData }: GithubProps) {
  return (
    <div className="flex md:justify-between space-y-4 md:space-y-0 md:flex-row flex-col md:items-center ">
      <div className="space-y-4">
        <UsersLocation githubData={githubData}/>
        <UserWebsite githubData={githubData}/>
      </div>
      <div className="space-y-4">
        <UserTwitter githubData={githubData}/>
        <UserCompany githubData={githubData}/>
      </div>
    </div>
  );
}
