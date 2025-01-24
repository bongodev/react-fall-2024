import { projects } from '@/data';

export const useProjects = () => {
  const getProject = (projectId) =>
    projects.find((project) => project.id === projectId);

  return {
    projects,
    getProject,
  };
};
