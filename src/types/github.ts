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
}
