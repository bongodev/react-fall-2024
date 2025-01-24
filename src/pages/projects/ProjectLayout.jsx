import { useParams, useSearchParams } from 'react-router';

import { useProjects } from '@/hooks';

export const ProjectLayout = () => {
  const { projectId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const { getProject } = useProjects();

  const handleContributorSelection = (contributor) => {
    setSearchParams((prev) => ({
      ...prev,
      contributor: contributor.split(' ').join('-').toLowerCase(),
    }));
  };

  const project = getProject(projectId);

  if (!project) {
    return <div>404 | Project not found</div>;
  }

  return (
    <div className="flex flex-col gap-6 px-4 py-2">
      <div>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
      </div>
      <div className="flex gap-4">
        <div className="w-1/5">
          <h2>Contributors</h2>
          <ul className="list-disc list-inside">
            {project.contributors.map((contributor) => (
              <li
                key={contributor}
                onClick={() => handleContributorSelection(contributor)}
              >
                {contributor}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-4/5 min-h-[400px] border border-gray-300 p-4">
          <h2>Details</h2>
          <p>Details about the project will be shown here.</p>
        </div>
      </div>
    </div>
  );
};
