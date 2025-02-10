import { useState } from "react";

const NumberComparator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState("");

  const handleCompare = () => {
    if (isNaN(num1) || isNaN(num2)) {
      setResult("Please enter valid numbers.");
      return;
    }

    if (num1 > num2) {
      setResult("First Number is larger than Second Number");
    } else if (num1 === num2) {
      setResult("Two numbers are equal");
    } else {
      setResult("Second Number is larger than First Number");
    }
  };

  const handleReset = () => {
    setNum1(0);
    setNum2(0);
    setResult("");
  };

  return (
    <div className="bg-gray-400 h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Number Comparator App</h1>

        {/* Input Fields */}
        <div className="flex flex-col gap-4">
          <input
            type="number"
            placeholder="Enter first number"
            className="border p-2 rounded"
            value={num1}
            onChange={(e) => setNum1(parseFloat(e.target.value))}
          />
          <input
            type="number"
            placeholder="Enter second number"
            className="border p-2 rounded"
            value={num2}
            onChange={(e) => setNum2(parseFloat(e.target.value))}
          />
        </div>

        {/* Compare Button */}
        <button
          onClick={handleCompare}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Compare
        </button>

      
        <div id="result" className="mt-4 text-xl font-bold">
          {result}
        </div>

        {/* Reset Button */}
        <button
          onClick={handleReset}
          className="mt-4 bg-red-700 text-white py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default NumberComparator;
