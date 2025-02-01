import { useParams } from 'react-router';
import { Counter, NumberComparator,GradeCalculator } from '@/components/talha';

export const TalhaProjectPage = () => {
  const { projectId } = useParams();

  const componentMap = {
    'counter-app': <Counter />,
    'number-comparator': <NumberComparator />,
    'grade-calculator': <GradeCalculator />,
  };

  const selectedProject = componentMap[projectId];

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return <div className="w-8/12">{selectedProject}</div>;
};
