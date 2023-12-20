export default {}


// api props
export interface GithubDataProps {
    message: string
    twitter_username: string;
    blog: string;
    company: string;
    location: string;
    followers: number;
    following: number;
    public_repos: number;
    created_at: string;
    bio: string;
    name: string;
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  }
  
  // search component props
  export interface SearchProps {
    githubData: GithubDataProps | null;
    setInputValue: (value: string) => void;
    fetchGithubApi: () => void;
    inputValue: string;
  }



  // user card props
  export interface GithubProps {
    githubData: GithubDataProps | null;
  }