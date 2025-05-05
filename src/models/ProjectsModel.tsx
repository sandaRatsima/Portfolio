import { GITHUB_TOKEN } from "../const/data";

export class Project {
  id: string;
  name: string;
  languages: string[];
  created_at: string;
  url: string;

  constructor(id: string, name: string, created_at: string, url: string) {
    this.id = id;
    this.name = name;
    this.languages = [];
    this.getProjectLanguages();
    this.created_at = created_at;
    this.url = url;
  }

  async getProjectLanguages() {
    let name = this.name;
    let url = `https://api.github.com/repos/sandaRatsima/${name}/languages`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });
    const json = await response.json();
    for (const language in json) {
      if (json.hasOwnProperty(language)) {
        this.languages.push(language);
      }
    }
  }
}
