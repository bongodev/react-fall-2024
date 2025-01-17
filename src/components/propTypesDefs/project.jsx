import PropTypes from 'prop-types';

const ContributorPropType = PropTypes.arrayOf(PropTypes.string);

export const ProjectPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  contributors: ContributorPropType,
});
