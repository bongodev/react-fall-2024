import { Projects } from './components';

import { projects } from './data';

export default function App() {
  return (
    <div className="container mx-auto w-full flex justify-center py-6">
      <Projects projects={projects} />
    </div>
  );
}
