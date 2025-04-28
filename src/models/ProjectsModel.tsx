export class Project {
  id: string;
  name: string;
  languages: string[];
  created_at: string;
  url: string;

  constructor(id: string, name: string, created_at: string, url: string) {
    this.id = id;
    this.name = name;
    this.languages = getProjectLanguages(this.name);
    this.created_at = created_at;
    this.url = url;
  }
}

function getProjectLanguages(name: string) {
  return [];
}
