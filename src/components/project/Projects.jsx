import clsx from 'clsx';
import PropTypes from 'prop-types';

import { ProjectPropType } from '../propTypesDefs';

import { useTheme } from '../../hooks';

import { Project } from './Project';

export const Projects = ({ projects }) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={clsx(
        'container space-y-6',
        isDarkMode ? 'app-dark' : 'app-light'
      )}
    >
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(ProjectPropType).isRequired,
};
