import { ProjectPropType } from './propTypesDefs';

export const Project = ({ project }) => {
  return <div>{project.name}</div>;
};

Project.propTypes = {
  project: ProjectPropType,
};
