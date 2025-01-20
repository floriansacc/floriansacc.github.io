export interface GithubModel {
  repos: GithubRepos[];
}

export const githubModelFromJson = (json: any): GithubModel => {
  return { repos: githubReposFromJsonList(json) };
};

interface GithubRepos {
  id: number;
  createdDate: Date;
  lastUpdateDate: Date;
  language: string;
  languagesUrl: string;
  repoName: string;
}

const githubReposFromJsonList = (list: any[]): GithubRepos[] => {
  return list.map((e) => githubReposFromJson(e));
};

const githubReposFromJson = (json: any): GithubRepos => {
  return {
    id: json.id,
    createdDate: new Date(json["created_at"]),
    lastUpdateDate: new Date(json["updated_at"]),
    language: json.language,
    languagesUrl: json.languages_url,
    repoName: json.name,
  };
};
