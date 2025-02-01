import clsx from 'clsx';
import { useGrade } from './useGrade';
import { useTheme } from '../counter/src/Hooks';

export function GradeCalculator() {
  const { resetGrade, calculateGrade, errorText, grade, marks, setMarks } =
    useGrade();

  const inputMarks = (event) => {
    setMarks(event.target.value);
  };

  const { theme, toggleTheme } = useTheme(false);

  return (
    <div className={clsx('p-3', theme ? 'bg-[#121212] text-[#EAEAEA]' : '')}>
      <div
        className={clsx(
          'w-[70%] h-[85vh] m-[auto] flex flex-col items-center py-6 rounded-md shadow-2xl inset-shadow-sm',
          theme ? 'bg-[#222222] text-[#EAEAEA]' : 'bg-gray-200'
        )}
      >
        <h1 className="font-bold text-5xl text-center mb-16 ">
          Grade Calculator
        </h1>
        <button
          onClick={toggleTheme}
          className={clsx(
            'absolute top-[120px] right-[80px] rounded p-2',
            theme
              ? 'shadow-sm shadow-gray-300 bg-[#222222]'
              : 'shadow-sm shadow-black'
          )}
        >
          {theme ? 'Light Mode' : 'Dark Mode'}
        </button>
        <input
          className={clsx(
            'border-2 py-1 px-2 rounded-md bg-zinc-700 text-center text-gray-300 text-[2vw]',
            errorText && 'border-red-500'
          )}
          type="number"
          value={marks}
          placeholder="Input your marks"
          onChange={inputMarks}
        />
        {errorText && (
          <p className="text-red-400 font-bold mt-2">{errorText}</p>
        )}
        <button
          className="mt-4 text-[2vw] bg-slate-700 text-white py-1 px-2 rounded hover:bg-slate-900 transition"
          onClick={() => calculateGrade()}
        >
          Calculate
        </button>

        {grade && (
          <h2
            className={clsx(
              'text-4xl font-semibold text-center mt-6 py-6 px-8 rounded-md shadow-lg',
              grade === 'F' && 'text-red-600'
            )}
          >
            {grade}
          </h2>
        )}
        <button
          className="mt-4 text-[2vw] hover:bg-[#121212] text-white py-1 px-4 rounded-lg bg-[#171717] transition"
          onClick={resetGrade}
        >
          <span className="material-symbols-outlined text-4xl hover:text-gray-500">
            refresh
          </span>
        </button>
      </div>
    </div>
  );
}
