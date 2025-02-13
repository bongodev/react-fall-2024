import NumberTable from './NumberTable'
import useNumberTable from './useNumberTable'

function App() {
    const { generateTable, resetTable, multiplicationTable} = useNumberTable()
    
  return (

    <>
         <div className="bg-gray-200 p-4 rounded-lg shadow-lg ">
         <h1 className="text-2xl font-bold mb-4">Number Table Generator</h1>
        
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
           Clear Table
         </button>
         </div>
       
        <NumberTable multiplicationTable={multiplicationTable}/>
        
    </div>
    </>
    
  )
}

export default App