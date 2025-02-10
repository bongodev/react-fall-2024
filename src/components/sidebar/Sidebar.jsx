import { NavLink } from 'react-router';

import { projects } from '@/data';

export const Sidebar = () => {
  return (
    <nav className="flex flex-col gap-4">
      <NavLink to="/">Home</NavLink>
      {projects.map((project) => (
        <NavLink key={project.id} to={`projects/${project.id}`}>
          {project.name}
        </NavLink>
      ))}
    </nav>
  );
};
