import { useState } from 'react'

function useMultiplicationTable() {

    const [input, setInput] =useState();
    const [multiplicationTable, setMultiplicationTable] = useState([]);
    const [error, setError] = useState(null)
  
    const generateTable = ()=>{
    const num= Number(input);
  
    if(!num || isNaN(num)){
         setError("Enter a valid input")
         setMultiplicationTable("")
         return
    }else{
       setError("")
    }
    const Table = Array.from({length:10}, (_, i) => ({
      multiplicand: num,
      multiplier: i+1,
      product: num*(i+1)
    }))
    
    setMultiplicationTable(Table)
    }
  
    const resetTable =() =>{
      setError("");
      setInput("");
      setMultiplicationTable([]);
    }
  
  return {
    input,
    setInput,
    generateTable,
    resetTable,
    multiplicationTable,
    error,
  }
}

export default useMultiplicationTable