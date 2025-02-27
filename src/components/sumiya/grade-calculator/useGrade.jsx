import { useState } from 'react';

export const useGrade = () => {
  const [grade, setGrade] = useState();
  const [errorText, setErrorText] = useState();
  const [marks, setMarks] = useState('');

  const calculateGrade = () => {
    const score = parseFloat(marks);

    if (isNaN(score) || score > 100 || score < 0) {
      setGrade('');
      setErrorText('Please enter a valid input (0-100).');
      return;
    } else {
      setErrorText('');
    }
    if (score >= 80) {
      setGrade('A+');
    } else if (score >= 70) {
      setGrade('A');
    } else if (score >= 60) {
      setGrade('A-');
    } else if (score >= 55) {
      setGrade('B');
    } else if (score >= 50) {
      setGrade('B-');
    } else if (score >= 40) {
      setGrade('C');
    } else {
      setGrade('F');
    }
  };
  const resetGrade = () => {
    setErrorText('');
    setGrade('');
    setMarks('');
  };

  return {
    resetGrade,
    calculateGrade,
    errorText,
    grade,
    marks,
    setMarks,
  };
};
