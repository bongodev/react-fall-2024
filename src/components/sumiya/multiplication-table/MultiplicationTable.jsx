import useMultiplicationTable from './useMultiplicationTable';

function MultiplicationTable() {
 const { input, setInput, generateTable, resetTable, multiplicationTable, error} = useMultiplicationTable()
   return (
     <div className=" h-screen bg-gray-50 flex flex-col items-center justify-start py-4 ">
       <div className="bg-gray-200 p-4 rounded-lg shadow-lg content-center">
         <h1 className="text-2xl font-bold mb-4">Multiplication Table Generator</h1>
         <input
           type="number"
           placeholder="Enter the Multiplicand Number"
           className={`border p-2 text-center rounded w-full ${error && "border-red-500"}`}
           value={input}
           onChange={(e)=>{
            setInput(e.target.value)}
          }
         />
         <div className='flex justify-center gap-4'>
         <button
           className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
           onClick={generateTable}
         >
           Generate Table
         </button>
         <button
           className="mt-4 bg-slate-700 text-white py-2 px-4 rounded"
           onClick={resetTable}
         >
           Reset Table
         </button>
         </div>
        {error && <p className='text-red-400 text-center font-bold mt-2'>{error}</p>}
         </div>
    {multiplicationTable.length>0 && (
       <table className="mt-4 bg-gray-200 w-[40vw] h-[60vh] rounded-lg shadow-2xl text-center">
         <caption className="text-xl font-bold py-2 text-amber-800">Table of {multiplicationTable[0].multiplicand}</caption>
         <thead>
            <tr className="bg-gray-400">
              <th>Multiplicand</th>
              <th></th>
              <th>Multiplier</th>
              <th></th>
              <th>Product</th>
            </tr>
            </thead>
         <tbody>
          {multiplicationTable.map((row, index)=>(
        <tr key={index}>
          <td>{row.multiplicand}</td>
          <td>X</td>
          <td>{row.multiplier}</td>
          <td>=</td>
          <td>{row.product}</td>
          </tr> 
    ))}
    </tbody>
      </table>
    )}
     </div>
   );
 }
 
 

export default MultiplicationTable
