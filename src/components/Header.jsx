import clsx from 'clsx';

import { useTheme } from '../hooks';

export const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header
      className={clsx(
        'flex justify-between items-center p-4',
        isDarkMode ? 'app-dark' : 'app-light'
      )}
    >
      <h1 className="text-xl font-bold">React JS Fall 2024</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 border rounded-md text-sm font-medium"
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};
