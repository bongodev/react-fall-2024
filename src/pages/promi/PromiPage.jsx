import { useParams } from 'react-router';
import { Counter, GradeCalculator , NumberComparator} from '@/components/promi';


export const PromiPage = () => {
  const { projectId } = useParams();

  const componentMap = {
    'counter-app': <Counter />,
    'grade-calculator': <GradeCalculator />,
    'number-comparator':<NumberComparator/>
  };

  const selectedProject = componentMap[projectId];

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return <div className="bg-gray px-4 py-2 w-8/12">{selectedProject}</div>;
};
