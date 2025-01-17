import { useState } from 'react';

import { ProjectPropType } from '../propTypesDefs';

export const Project = ({ project }) => {
  const [selectedContributor, setSelectedContributor] = useState();

  return (
    <div className="flex flex-col gap-4 border rounded px-4 py-4">
      <h1>{project.name}</h1>
      <div className="flex space-x-2">
        {project.contributors.map((contributor) => (
          <button
            key={contributor}
            className="text-sm font-medium text-gray-500 hover:text-gray-700 border border-gray-200 rounded-md px-4 py-2"
            onClick={() => setSelectedContributor(contributor)}
          >
            {contributor}
          </button>
        ))}
        {project.contributors.length !== 0 && (
          <button
            onClick={() => setSelectedContributor('')}
            className="text-sm font-medium text-red-600 hover:text-red-700 border border-red-600 rounded-md px-4 py-2"
          >
            Clear
          </button>
        )}
      </div>
      {!selectedContributor ? (
        <p className="text-sm">No contributor is selected!</p>
      ) : (
        <p>{selectedContributor}</p>
      )}
    </div>
  );
};

Project.propTypes = {
  project: ProjectPropType,
};
