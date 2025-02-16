import { useParams } from 'react-router';
import  Counter from '../../components/sumiya/counter/src/App';
import { ThemeProvider } from '../../components/sumiya/counter/src/contexts';
import NumberComparator from '../../components/sumiya/number-comparator/src/NumberComparatorProject'
import { ThemeProvider as NumberComparatorTheme } from '../../components/sumiya/number-comparator/src/components/contexts/themeContext/ThemeProvider'

export const SumiyaProjectPage = () => {
  const { projectId } = useParams();

  const componentMap = {
    'counter-app': (
      <ThemeProvider>
        <Counter />
      </ThemeProvider>
    ),
    'number-comparator': (
      <NumberComparatorTheme>
          <NumberComparator />
      </NumberComparatorTheme>
     
    ),
   
  };

  const selectedProject = componentMap[projectId];

  if (!selectedProject) {
    return <div>404|Project not found</div>;
  }

  return <div className="bg-gray-200 w-full">{selectedProject}</div>;
};
