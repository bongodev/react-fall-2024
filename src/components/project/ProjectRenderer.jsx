import PropTypes from 'prop-types';
import { Counter as BongoDevCounter } from '../bongodev';

const projects = {
  'counter-app': { bongodev: <BongoDevCounter /> },
};

export const ProjectRenderer = ({ projectId, contributorId }) => {
  return (
    <div>
      {projects[projectId]?.[contributorId] || <div>Project not found</div>}
    </div>
  );
};

ProjectRenderer.propTypes = {
  projectId: PropTypes.string.isRequired,
  contributorId: PropTypes.string.isRequired,
};
