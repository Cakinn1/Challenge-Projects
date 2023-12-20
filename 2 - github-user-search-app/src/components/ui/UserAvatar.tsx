import { GithubProps } from '../../typings/typings'

export default function UserAvatar({githubData}: GithubProps) {
  return (
    <figure>
    <img
      className="rounded-full h-[80px] w-[100px] md:h-[110px] md:w-[130px] object-cover"
      src={githubData?.avatar_url}
      alt=""
    />
  </figure>
  )
}
