import { useState } from 'react';

export const MultiplicationTable = () => {
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');
  const [table, setTable] = useState([]);

  const generateTable = () => {
    setError('');
    if (number.trim() === '') {
      setError('Please enter a number.');
      setTable([]);
      return;
    }

    const num = parseInt(number);

    if (num < 1) {
      setError('Please enter a positive number.');
      setTable([]);
      return;
    }

    let generatedRow = [];

    for (let i = 1; i <= 10; i++) {
      generatedRow.push({
        number: num,
        multiply: 'x',
        multiplier: i,
        equals: '=',
        product: num * i,
      });
    }
    setTable(generatedRow);
  };

  const resetTable = () => {
    setNumber('');
    setError('');
    setTable([]);
  };

  return (
    <div className="text-center drop-shadow-lg p-4 rounded-md max-w-[400px] mx-auto bg-cyan-300 my-10">
      <h1 className="text-2xl font-bold">Multiplication Table Generator</h1>
      <div className="flex flex-col gap-4 justify-center items-center my-6 text-sm text-left">
        <input
          type="number"
          name="number"
          className={`w-full p-2 rounded-md ${
            error ? 'border-2 border-red-500' : 'border'
          }`}
          placeholder="Enter a positive number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
            if (e.target.value.trim() !== '') {
              setError('');
            }
          }}
        />
        {error && <p className="text-red-500 text-md mt-1">{error}</p>}
      </div>
      <div className="flex gap-4 justify-center items-center my-2 text-md">
        <button
          onClick={generateTable}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Generate Table
        </button>
        <button
          onClick={resetTable}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>
      {/* Render table only if data exists */}
      {table.length > 0 && (
        <table className="table-auto border border-slate-700 w-full">
          <tbody>
            {table.map((row, rowIndex) => (
              <tr key={rowIndex} className="border border-amber-500 bg-green-200">
               {Object.values(row).map((value, colIndex) => (
                  <td key={colIndex} className="py-1 px-2">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
