import PropTypes from 'prop-types';

import { ProjectPropType } from './propTypesDefs';

import { Project } from './Project';

export const Projects = ({ projects }) => {
  return (
    <div>
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(ProjectPropType).isRequired,
};
