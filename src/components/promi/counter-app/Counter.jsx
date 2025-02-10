import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
    const increaseButton=()=>{
        setCount(count+1);

    }
    const decreaseButton=()=>{
        if(count>0){
            setCount(count-1)
        }
        else
        alert(`Counter value can not be less than 0`)
    }
  return (
    <div
    className='bg-black px-4 py-4 text-center'>
        <h1 className='text-black-300 text-3xl text-center font-bold text-white'>Counter App</h1>
        <h2 className='text-xl font-bold text-white m-6'> Counter value : {count}</h2>
        <button className='bg-blue-400 px-4 py-4 rounded-xl m-4' onClick={increaseButton}>Increase</button>
        <button className='bg-red-400 px-4 py-4 rounded-xl' onClick={decreaseButton}>decrease</button>

    </div>
  )
}

export default Counter