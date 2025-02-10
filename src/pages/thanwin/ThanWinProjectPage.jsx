import { useParams } from 'react-router';
import {
  Counter,
  NumberComparator,
  GradeCalculator,
} from '@/components/thanwin';

export const ThanWinProjectPage = () => {
  const { projectId } = useParams();

  const componentMap = {
    'counter-app': <Counter />,
    'grade-calculator': <GradeCalculator />,
    'number-comparator': <NumberComparator />,
  };

  const selectedProject = componentMap[projectId];

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return <div className="bg-white px-2 py-2 w-8/12">{selectedProject}</div>;
};
