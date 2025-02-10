import { useParams } from 'react-router';
import  Counter from '../../components/sumiya/counter/src/App';
import { ThemeProvider } from '../../components/sumiya/counter/src/contexts';


export const SumiyaProjectPage = () => {
  const { projectId } = useParams();

  const componentMap = {
    'counter-app': (
      <ThemeProvider>
        <Counter />
      </ThemeProvider>
    ),
   
  };

  const selectedProject = componentMap[projectId];

  if (!selectedProject) {
    return <div>404|Project not found</div>;
  }

  return <div className="bg-gray-200 w-full">{selectedProject}</div>;
};
