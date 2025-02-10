import { useState } from 'react';
import Input from './Input';

function compareNumbers(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    return 'First Number is greater than second Number';
  } else if (firstNumber === secondNumber) {
    return 'Both numbers are equal';
  } else {
    return 'Second number is greater than first number';
  }
}
const NumberComparator = () => {
  const [numbers, setNumbers] = useState({
    firstNumber: '',
    secondNumber: '',
  });
  const [result, setResult] = useState('');
  const [isReset, setIsReset] = useState(false);
  const isEmpty = numbers.firstNumber === '' || numbers.secondNumber === '';

  function handleChange(e) {
    setNumbers((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setIsReset(false);
    setResult('');
  }
  function handleSubmit(e) {
    e.preventDefault();
    setResult(
      compareNumbers(Number(numbers.firstNumber), Number(numbers.secondNumber))
    );

    setIsReset(true);
  }
  function handleReset() {
    setNumbers({ firstNumber: '', secondNumber: '' });
    setIsReset(false);
    setResult('');
  }

  return (
    <section className="w-full bg-zinc-800 h-[100vh] p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="tracking-wide text-2xl font-bold text-slate-200 text-center">
          Number Comparator
        </h2>
        <div className=" flex gap-4">
          <Input
            type="number"
            name="firstNumber"
            onChange={handleChange}
            value={numbers.firstNumber}
            placeholder="Enter first number"
          />
          <Input
            value={numbers.secondNumber}
            type="number"
            name="secondNumber"
            onChange={handleChange}
            placeholder="Enter second number"
          />
        </div>
        {!isReset ? (
          <button
            disabled={isEmpty}
            className={`w-full  rounded-md  px-4 py-2 text-slate-200 ${
              isEmpty
                ? 'bg-slate-500  text-slate-300  cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            Compare
          </button>
        ) : (
          <button
            type="button"
            onClick={handleReset}
            className=" w-full  rounded-md bg-blue-600 cursor-pointer text-slate-200 px-4 py-2"
          >
            Reset
          </button>
        )}
      </form>
      {result !== '' && (
        <p className="mt-6 text-center text-slate-300 text-xl">{result}</p>
      )}
    </section>
  );
};

export default NumberComparator;
