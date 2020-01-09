export interface UserProfileVm {
  login: string;
  id: number;
  avatar_url: string; // "https://github.com/images/error/octocat_happy.gif",
  url: string; // "https://api.github.com/users/octocat",
  starred_url: string; // "https://api.github.com/users/octocat/starred{/owner}{/repo}",
  organizations_url: string; // "https://api.github.com/users/octocat/orgs",
  repos_url: string; // "https://api.github.com/users/octocat/repos",
  name: string; // "monalisa octocat",
  blog: string; // "https://github.com/blog",
  location: string; // "San Francisco",
  email: string; // "octocat@github.com",
  bio: string; // "There once was...",
  hireable: boolean;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
}

// https://api.github.com/users/octocat
