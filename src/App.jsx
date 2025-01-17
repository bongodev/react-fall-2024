import { Projects } from './components';

import { projects } from './data';

export default function App() {
  return (
    <div className="app">
      <Projects projects={projects} />
    </div>
  );
}
