import { Outlet, useParams } from 'react-router';
import Select from 'react-select';

import { useProjects } from '@/hooks';
import { useContributor } from './useContributor';

const options = [
  { value: 'bongodev', label: 'bongoDev' },
  { value: 'talha', label: 'Talha' },
  { value: 'sumaiya', label: 'Sumaiya' },
  { value: 'thanwin', label: 'Than Win' },
];

export const ProjectLayout = () => {
  const { projectId } = useParams();

  const { getProject } = useProjects();
  const { selectedContributor, handleContributorChange } = useContributor({
    projectId,
  });

  const project = getProject(projectId);

  if (!project) {
    return <div>404 | Project not found</div>;
  }

  return (
    <div className="flex flex-col gap-6 px-4 py-2">
      <div>
        <div className="flex justify-between items-center">
          <h1>{project.name}</h1>
          <Select
            placeholder="Contributors"
            value={selectedContributor}
            options={options}
            onChange={handleContributorChange}
          />
        </div>
        <p>{project.description}</p>
      </div>
      <div className="px-4 py-2 bg-gray-300 flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};
