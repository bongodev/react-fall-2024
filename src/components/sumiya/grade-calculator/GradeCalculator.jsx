import { useTheme } from '../Hooks';
import { useGrade } from './useGrade';

export function GradeCalculator() {
  const { resetGrade, calculateGrade, errorText, grade, marks, setMarks } =
    useGrade();

  const inputMarks = (event) => {
    setMarks(event.target.value);
  };

  const { theme, toggleTheme } = useTheme(false);

  return (
    <div className={`p-3 bg-[#121212] text-[#EAEAEA]`}>
      <div
        className={`w-[70%] h-[85vh] m-[auto] flex flex-col items-center py-6 rounded-md shadow-2xl inset-shadow-sm',
         ${theme ? 'bg-[#222222] text-[#EAEAEA]' : 'bg-gray-300 text-black'}`}
      >
        <h1 className="font-bold text-5xl text-center mb-16 ">
          Grade Calculator
        </h1>
        <button
          onClick={toggleTheme}
          className={`
            absolute top-[120px] right-[80px] rounded p-2 shadow-sm shadow-gray-300 text-white
            ${theme ? ' bg-[#222222]' : ' '}`}
        >
          {theme ? 'Light Mode' : 'Dark Mode'}
        </button>
        <input
          className={`border-2 py-2 px-4 w-[60%] rounded-md bg-zinc-700 text-center text-gray-300 text-[2vw],
            ${errorText ? 'border-red-500' : 'border-zinc-700'} `}
          type="number"
          value={marks}
          placeholder="Input your marks"
          onChange={inputMarks}
        />
        {errorText && (
          <p className="text-red-400 font-bold mt-2">{errorText}</p>
        )}
        <button
          className="mt-4 text-[2vw] bg-slate-800 text-white py-1 px-2 rounded hover:bg-slate-900 transition"
          onClick={() => calculateGrade()}
        >
          Calculate
        </button>

        {grade && (
          <h2
            className={`
              text-4xl font-semibold text-center mt-6 py-6 px-8 rounded-md shadow-lg,
              grade === 'F' && 'text-red-600'
            `}
          >
            {grade}
          </h2>
        )}
        <button
          className="mt-4 text-[2vw] hover:bg-[#121212] text-white py-1 px-4 rounded-lg bg-[#171717] transition"
          onClick={resetGrade}
        >
          <span className="material-symbols-outlined text-4xl hover:text-gray-500">
            &#x21bb;
          </span>
        </button>
      </div>
    </div>
  );
}
