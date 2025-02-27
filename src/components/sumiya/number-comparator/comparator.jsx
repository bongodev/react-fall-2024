import React from 'react'
import { useComparator } from './useComparator';


export function NumberComparator() {
    const {
        number1,
        setNumber1,
        number2,
        setNumber2,
        result,
        error,
        input1Error,
        input2Error,
        compareNumbers,
        resetNumbers,
      } = useComparator();
  
  return (
    <div className={`w-[100%] h-[85vh] m-[auto] flex flex-col items-center py-6 rounded-md shadow-lg inset-shadow-sm bg-[#222222] text-[#EAEAEA]`}>
        <h1 className='font-bold text-4xl text-center mb-16 '>Number Comparator</h1>
        <div className='flex flex-col text-black gap-4 items-center'>
        <input
        className={`border-4 p-2 rounded text-[2vw] , input1Error ? 'border-red-500' : 'border-gray-300'`}
        type="number"
        placeholder='First number'
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        />
        <input
        className={`border-4 p-2 rounded text-[2vw] ", input2Error ? 'border-red-500' : 'border-gray-300'`}
        type="number"
        placeholder='Second number'
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
        />
        <p className='text-red-400 font-bold mt-2'>{error}</p>
        </div>
        <div className='flex gap-4 items-center'>
        <button
        className="mt-4 text-[2vw] bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        onClick={compareNumbers}
        >Compare</button>
        <button
        className="mt-4 text-[2vw] bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition"
        onClick={resetNumbers}
        >Reset</button>
        </div>
        <h2 className='text-3xl font-semibold text-center mt-6 '>{result}</h2>
    </div>
  )
}