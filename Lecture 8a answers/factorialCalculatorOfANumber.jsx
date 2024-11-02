// components/FactorialCalculator.js
import { useState } from 'react';

const FactorialCalculator = () => {
  const [number, setNumber] = useState('');
  const [factorial, setFactorial] = useState(null);

  const calculateFactorial = () => {
    const num = parseInt(number);
    if (!isNaN(num) && num >= 0) {
      let result = 1;
      for (let i = 1; i <= num; i++) {
        result *= i;
      }
      setFactorial(result);
    } else {
      setFactorial('Please enter a non-negative integer.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Factorial Calculator</h2>
      <div>
        <label>Enter a Number:</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a non-negative integer"
          style={{ marginBottom: '10px', width: '100%' }}
        />
      </div>
      <button onClick={calculateFactorial} style={{ marginBottom: '10px' }}>Calculate</button>
      {factorial !== null && (
        <div>
          <h3>Factorial: {factorial}</h3>
        </div>
      )}
    </div>
  );
};

export default FactorialCalculator;
