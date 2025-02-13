import { useParams } from 'react-router';
import {
  Counter,
  NumberComparator,
  GradeCalculator,
  Ecommerce,
} from '@/components/thanwin';

export const ThanWinProjectPage = () => {
  const { projectId } = useParams();

  const componentMap = {
    'counter-app': <Counter />,
    'grade-calculator': <GradeCalculator />,
    'number-comparator': <NumberComparator />,
    'simple-ecommerce': <Ecommerce />,
  };

  const selectedProject = componentMap[projectId];

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return <div className="bg-white  w-8/12">{selectedProject}</div>;
};
