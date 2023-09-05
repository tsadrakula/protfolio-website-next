import { getProjects } from "../../lib/projects-bs";

const MapProjects = async () => {
  const { projects } = await getProjects();

  if (!projects) {
    throw new Error("Projects not found!");
  }
  return projects;
};

export default MapProjects;
