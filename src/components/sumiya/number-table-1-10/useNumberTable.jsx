
import { useState } from 'react'

function useNumberTable() {


    const [multiplicationTable, setMultiplicationTable] = useState([]);
    
  
    const generateTable = ()=>{
  
    const tables = Array.from({length:10}, (_, numIndex)=>{
     const num= numIndex+1;
      return {
        multiplicand: num,
        table : Array.from({length:10}, (_, i) => ({
        multiplier: i+1,
        product: num*(i+1)
      }))
    }
  })
    
  console.log("Tables generated:", tables);
    setMultiplicationTable(tables)
    }
  
    const resetTable =() =>{
    
      setMultiplicationTable([]);
    }
  
  return {
   
    generateTable,
    resetTable,
    multiplicationTable,
  
  }
}

export default useNumberTable