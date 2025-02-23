import { useParams } from 'react-router';
import { Counter, NumberComparator, ThemeProvider } from '../../components/sumiya';


export const SumiyaProjectPage = () => {
  const { projectId } = useParams();

  const componentMap = {
    'counter-app':
    <ThemeProvider>
     <Counter/>,
     </ThemeProvider>,
     'number-comparator': <NumberComparator />,
  };

  const selectedProject = componentMap[projectId];

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return <div className="bg-white px-2 py-2 w-full">{selectedProject}</div>;
};
