import { useParams } from 'react-router';
import { Counter, NumberComparator, ThemeProvider } from '../../components/sumiya';
import { GradeCalculator } from '../../components/sumiya/grade-calculator';
import MultiplicationTable from '../../components/sumiya/multiplication-table/MultiplicationTable';
import { App } from '../../components/sumiya/render-products';




export const SumiyaProjectPage = () => {
  const { projectId } = useParams();

  const componentMap = {
    'counter-app':
    <ThemeProvider>
     <Counter/>,
     </ThemeProvider>,
     'number-comparator': <NumberComparator />,
     'grade-calculator' : 
     <ThemeProvider>
     <GradeCalculator />
     </ThemeProvider>,
     'multiplication-table': <MultiplicationTable />,
     'render-products': <App />
  };

  const selectedProject = componentMap[projectId];

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return <div className="bg-white px-2 py-2 w-full">{selectedProject}</div>;
};
