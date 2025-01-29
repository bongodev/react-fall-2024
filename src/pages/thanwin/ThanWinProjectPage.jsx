import { useParams } from 'react-router';
<<<<<<< HEAD
import {
  Counter,
  NumberComparator,
  GradeCalculator,
} from '@/components/thanwin';
=======
import { Counter, Ecommerce } from '@/components/thanwin';
>>>>>>> 93464d1 (Add Ecommerce project)

export const ThanWinProjectPage = () => {
  const { projectId } = useParams();

  const componentMap = {
    'counter-app': <Counter />,
<<<<<<< HEAD
    'grade-calculator': <GradeCalculator />,
    'number-comparator': <NumberComparator />,
=======
    'simple-ecommerce': <Ecommerce />,
>>>>>>> 93464d1 (Add Ecommerce project)
  };

  const selectedProject = componentMap[projectId];

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return <div className="bg-white  w-8/12">{selectedProject}</div>;
};
