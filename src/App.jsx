import clsx from 'clsx';
import { Header, Projects } from './components';

import { projects } from './data';
import { useTheme } from './hooks';

export default function App() {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={clsx(
        'container mx-auto w-full flex flex-col gap-8 justify-center py-6',
        isDarkMode && 'bg-gray-800'
      )}
    >
      <Header />
      <Projects projects={projects} />
    </div>
  );
}
