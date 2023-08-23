export interface GHRepo {
  full_name: string;
  html_url: string;
  stargazers_count: string;
  language: string;
}

export interface GHUser {
  id: string;
  name: string;
  company: string;
  location: string;
  avatar_url: string;
  login: string;
  followers: string;
}

export interface GHOrgs {
  id: string;
  avatar_url: string;
  url: string;
  login: string;
  repos_url: string;
}
