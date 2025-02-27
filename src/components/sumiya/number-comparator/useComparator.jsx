import React, { useState } from 'react'

export function useComparator() {

        const [number1, setNumber1] = useState(0);
        const [number2, setNumber2] = useState(0);
        const [result, setResult] = useState('');
        const [error, setError] = useState('');
        const [input1Error, setInput1Error] = useState(false);
        const [input2Error, setInput2Error] = useState(false)
        const num1 = parseFloat(number1)
        const num2 = parseFloat(number2)
        
        const compareNumbers = ()=>{
        const isInput1Empty = isNaN(num1);
        const isInput2Empty = isNaN(num2);
    
        if (  isInput1Empty || isInput2Empty ) {
            setError('Please enter valid numbers in both fields.');
            setInput1Error(isInput1Empty);
            setInput2Error(isInput2Empty);
            setResult('');
            return;
          }
        
        setError(" ");
        setInput1Error(false);
        setInput2Error(false);
        const comparedResult =  num1 > num2 ? `${number1} is larger` : num1<num2 ? `${number2} is larger` : "Both numbers are equal";
         setResult(comparedResult);
        }
        const resetNumbers =()=>{
            setResult(" ");
            setNumber1(0);
            setNumber2(0);
            setError(" ");
            setInput1Error(false);
            setInput2Error(false);
        }
return {
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
  };

}