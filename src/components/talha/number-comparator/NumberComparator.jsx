import { useState } from 'react';

export const NumberComparator = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState('');

  const handleCompare = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    
    if (isNaN(num1) || isNaN(num2)) {
      alert('Please enter valid numbers in both fields.');
      return;
    }

    if (num1 === num2) {
      setResult('Both numbers are equal');
    } else if (num1 > num2) {
      setResult('First number is greater');
    } else {
      setResult('Second number is greater');
    }
  };

  const handleReset = () => {
    setFirstNumber('');
    setSecondNumber('');
    setResult('');
  };

  return (
    <div className="text-center drop-shadow-lg p-4 rounded-md max-w-[400px] mx-auto bg-cyan-300 h-[40vh] my-10">
      <h1 className="text-2xl font-bold">Number Comparator App</h1>
      <div className="flex flex-col gap-4 justify-center items-center my-6 text-sm text-left">
        <input
          type="number"
          name="firstNumber"
          className="w-full p-2 rounded-md"
          placeholder="Enter first number"
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value)}
        />
        <input
          type="number"
          name="secondNumber"
          className="w-full p-2 rounded-md"
          placeholder="Enter second number"
          value={secondNumber}
          onChange={(e) => setSecondNumber(e.target.value)}
        />
      </div>
      <div>
        <button
          onClick={handleCompare}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Compare
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Reset
        </button>
      </div>
      <div className={`p-2 text-lg font-semibold text-gray-800 ${result ? '' : 'hidden'}`}>
        {result}
      </div>
    </div>
  );
};
