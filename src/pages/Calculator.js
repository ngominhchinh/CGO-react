import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleAddition = () => {
    const sum = parseInt(num1) + parseInt(num2);
    setResult(sum);
  };

  const handleSubtraction = () => {
    const difference = parseInt(num1) - parseInt(num2);
    setResult(difference);
  };

  const handleMultiplication = () => {
    const product = parseInt(num1) * parseInt(num2);
    setResult(product);
  };

  const handleDivision = () => {
    const quotient = parseInt(num1) / parseInt(num2);
    setResult(quotient);
  };

  return (
    <div>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      <br />
      <button onClick={handleAddition}>+</button>
      <button onClick={handleSubtraction}>-</button>
      <button onClick={handleMultiplication}>x</button>
      <button onClick={handleDivision}>/</button>
      <br />
      <span>Result: {result}</span>
    </div>
  );
}

export default Calculator;