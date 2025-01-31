import { useCounter, useTheme } from '../Hooks';

export function Display() {
  const { theme, toggleTheme } = useTheme();
  const { count } = useCounter();
  return (
    <div>
      <h1 className="font-bold text-4xl text-center">Counter App</h1>
      <button
        onClick={toggleTheme}
        className={`absolute top-[120px] right-20 rounded p-2 ${
          theme ? 'shadow-sm shadow-gray-300' : 'shadow-sm shadow-black'
        }`}
      >
        {theme ? 'Light Mode' : 'Dark Mode'}
      </button>

      <div className=" w-[80%] relative rounded-md">
        <p className="font-bold text-center px-10 py-6 text-[25vw] leading-[23vw]">
          {count}
        </p>
      </div>
    </div>
  );
}
