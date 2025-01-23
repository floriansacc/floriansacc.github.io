export interface GitLanguageRepo {
  languages: { [key: string]: number };
}

export const gitLanguageRepoFromJson = (json: any): GitLanguageRepo => {
  return { languages: json };
};
