import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App.tsx";

import { fetchAllProjects } from "./const/ProjectsData.tsx";

fetchAllProjects();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App></App>
  </StrictMode>
);
