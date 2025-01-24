import { NavLink } from 'react-router';

import { projects } from '@/data';

const getPathFromProjectName = (projectName) =>
  projectName.split(' ').join('-').toLowerCase();

export const Sidebar = () => {
  return (
    <nav className="flex flex-col gap-4">
      <NavLink to="/">Home</NavLink>
      {projects.map((project) => (
        <NavLink
          key={project.name}
          to={`/projects/${getPathFromProjectName(project.name)}`}
        >
          {project.name}
        </NavLink>
      ))}
    </nav>
  );
};
