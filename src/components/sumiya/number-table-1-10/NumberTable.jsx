function NumberTable({multiplicationTable}) {
   return (
     <div className=" flex gap-4 flex-wrap py-4 justify-center ">
      
    
    {multiplicationTable.length>0 && 
      multiplicationTable.map((tableContent)=>(
       <table key={tableContent.multiplicand} className="mt-4 bg-gray-200 w-[15vw]  rounded-lg shadow-2xl text-center">
         <caption className="text-xl font-bold py-2 text-amber-800">Table of {tableContent.multiplicand}</caption>
        
         <tbody>
          {tableContent.table.map((row, index)=>(
        <tr key={index}>
          <td>{tableContent.multiplicand}</td>
          <td>X</td>
          <td>{row.multiplier}</td>
          <td>=</td>
          <td>{row.product}</td>
          </tr> 
    ))}
    </tbody>
      </table>
    ))}
    
     </div>
   );
 }
 
 

export default NumberTable
