import { useParams } from 'react-router';
import { Counter } from '@/components/bongodev';

export const BongoDevProjectPage = () => {
  const { projectId } = useParams();

  const componentMap = {
    'counter-app': <Counter />,
  };

  const selectedProject = componentMap[projectId];

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return <div className="bg-white px-2 py-2 w-8/12">{selectedProject}</div>;
};
