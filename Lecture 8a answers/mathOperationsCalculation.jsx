// components/Calculator.js
import { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [results, setResults] = useState(null);

  const calculateResults = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (!isNaN(number1) && !isNaN(number2)) {
      setResults({
        addition: number1 + number2,
        subtraction: number1 - number2,
        multiplication: number1 * number2,
        division: number2 !== 0 ? (number1 / number2).toFixed(2) : 'Undefined (Division by zero)'
      });
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Basic Calculator</h2>
      <div>
        <label>Number 1:</label>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
          style={{ marginBottom: '10px', width: '100%' }}
        />
      </div>
      <div>
        <label>Number 2:</label>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
          style={{ marginBottom: '10px', width: '100%' }}
        />
      </div>
      <button onClick={calculateResults} style={{ marginBottom: '10px' }}>Calculate</button>
      {results && (
        <div>
          <h3>Results:</h3>
          <p>Addition: {results.addition}</p>
          <p>Subtraction: {results.subtraction}</p>
          <p>Multiplication: {results.multiplication}</p>
          <p>Division: {results.division}</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
