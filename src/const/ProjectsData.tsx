import { Project } from "../models/ProjectsModel";
import { ProjectsData } from "./data";
import { StatsData } from "./data";
import { GITHUB_TOKEN } from "./data";

//récuperer tout les projets présent sur github, en faire une liste et les stocker
export async function fetchAllProjects() {
  let url = "https://api.github.com/users/sandaRatsima/repos";
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
  });
  const json = await response.json();
  json.map((element: any) => {
    let id = element.id;
    let name = element.name;
    let created_at = element.created_at;
    let url = element.url;

    let project = new Project(id, name, created_at, url);
    ProjectsData.push(project);
  });

  StatsData.forEach((stat) => {
    stat.number = stat.name == "Projects" ? ProjectsData.length : stat.number; //affecte le nombre de projets présents sur guthub, sinon, le nombre en dur
  });

  console.log(ProjectsData);
}
