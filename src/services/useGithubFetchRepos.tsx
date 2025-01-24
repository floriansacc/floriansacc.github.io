import { useEffect, useState } from "react";
import { GithubModel, githubModelFromJson } from "../models/GithubModel";

const baseUrl: string = "https://api.github.com";

export default function useGithubFetchRepos() {
  const [githubInfo, setGithubInfo] = useState<GithubModel | null>(null);

  useEffect(() => {
    const getGithubInfos = async (): Promise<void> => {
      const fetchUrl: string = `${baseUrl}/users/floriansacc/repos`;
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
        setGithubInfo(githubModelFromJson(jsonResponse));
      } catch (error) {
        console.log(error);
      }
    };

    getGithubInfos();
  }, []);

  return { githubInfo };
}
