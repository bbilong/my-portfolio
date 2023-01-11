import {Project} from "../typings";

export const fetchProjects = async (): Promise<Project[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);

  const data = await res.json();

  return data?.projects;
};
