import React from 'react'
import { useCounter } from '../Hooks';



export function Counter() {
  const {count, setCount} = useCounter();
  return (
    <>
    <div className="flex justify-center items-center gap-[35px] w-[80%]">
            <button onClick={()=>{
              setCount(count+1);
            }}  className=" w-[10%] bg-gray-900 hover:text-gray-500 px-4 py-2 text-6xl text-white rounded-md ">+</button>
            <button onClick={()=>{
              if (count>0){
              setCount(count-1);
            }}}  className="w-[10%] bg-gray-900 hover:text-gray-500 px-6 py-2 text-6xl text-white rounded-md">-</button>
     </div>
        <button onClick={()=>{
          setCount(0);
        }} className="bg-gray-900 px-4 py-1 text-white rounded-md " >
            <span className="material-symbols-outlined text-4xl hover:text-gray-500">
                refresh
                </span>
        </button>
    </>
  )
}
