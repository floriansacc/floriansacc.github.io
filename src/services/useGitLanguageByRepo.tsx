import { useEffect, useState } from "react";
import { GithubModel } from "../models/GithubModel";
import {
  GitLanguageRepo,
  gitLanguageRepoFromJson,
} from "../models/GitLanguageRepo";

export default function useGitLanguageByRepo({ githubInfo }: Props) {
  const [language, setLanguage] = useState<{
    [key: string]: GitLanguageRepo | null;
  }>();

  useEffect(() => {
    const getLanguageByRepo = async (
      repoName: string,
      fetchUrl: string,
    ): Promise<void> => {
      try {
        const response: Response = await fetch(fetchUrl, {
          headers: {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_FINE_GRAINED_TOKEN}`,
            "X-GitHub-Api-Version": "2022-11-28",
          },
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(`${response.statusText}`);
        }

        const jsonResponse = await response.json();

        setLanguage((prev) => {
          let newMap = { ...prev };
          newMap[repoName] = gitLanguageRepoFromJson(jsonResponse);
          return newMap;
        });
      } catch (error) {
        console.log(error);
      }
    };

    githubInfo?.repos.forEach((e) =>
      getLanguageByRepo(e.repoName, e.languagesUrl),
    );
  }, [githubInfo]);

  return { language };
}

interface Props {
  githubInfo: GithubModel | null;
}
