import { useState } from 'react';

export const GradeCalculator = () => {
  const [grade, setGrade] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState('');

  const getGradeDetails = (gradeLetter) => {
    switch (gradeLetter) {
      case 'A+':
        return { color: 'text-green-600', message: 'Outstanding - Grade A+' };
      case 'A':
        return { color: 'text-green-800', message: 'Excellent - Grade A' };
      case 'B':
        return { color: 'text-blue-600', message: 'Great job - Grade B' };
      case 'C':
        return { color: 'text-yellow-600', message: 'Good effort - Grade C' };
      case 'D':
        return { color: 'text-orange-600', message: 'Needs improvement - Grade D' };
      case 'F':
        return { color: 'text-red-600', message: 'Failed - Grade F' };
      default:
        return { color: 'text-gray-800', message: '' };
    }
  };

  const calculateGrade = () => {
    setError('');
    setResult('');

    if (grade.trim() === '') {
      setError('Please enter a number.');
      return;
    }

    if (grade < 0 || grade > 100) {
      setError('Please enter a number between 0 and 100.');
      return;
    }

    const num = parseFloat(grade);

    if (num >= 80) {
      setResult('A+');
    } else if (num >= 70) {
      setResult('A');
    } else if (num >= 60) {
      setResult('B');
    } else if (num >= 50) {
      setResult('C');
    } else if (num >= 40) {
      setResult('D');
    } else {
      setResult('F');
    }
  };

  const resetGrade = () => {
    setGrade('');
    setResult('');
    setError('');
  };

  return (
    <div className="text-center drop-shadow-lg p-4 rounded-md max-w-[400px] mx-auto bg-cyan-300 h-[40vh] my-10">
      <h1 className="text-2xl font-bold">Grade Calculator App</h1>
      <div className="flex flex-col gap-4 justify-center items-center my-6 text-sm text-left">
        <input
          type="number"
          name="grade"
          className={`w-full p-2 rounded-md ${error ? 'border-2 border-red-500' : 'border'}`}
          placeholder="Enter your score"
          value={grade}
          onChange={(e) => {
            setGrade(e.target.value);
            if (e.target.value.trim() !== '') {
              setError('');
            }
          }}
        />
        {error && <p className="text-red-500 text-md mt-1">{error}</p>}
      </div>
      <div className="flex gap-4 justify-center items-center my-2 text-md">
        <button
          onClick={calculateGrade}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Calculate
        </button>
        <button
          onClick={resetGrade}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>
      <div
        className={`p-2 text-lg font-semibold ${result ? getGradeDetails(result).color : 'hidden'}`}
      >
        {result && getGradeDetails(result).message}
      </div>
    </div>
  );
};


