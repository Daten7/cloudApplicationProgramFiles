// components/SquareCalculator.js
import { useState } from 'react';

const SquareCalculator = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const calculateSquare = () => {
    const squaredValue = parseFloat(number) ** 2;
    setResult(squaredValue);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Square Calculator</h2>
      <div>
        <label>Number:</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a number"
          style={{ marginBottom: '10px', width: '100%' }}
        />
      </div>
      <button onClick={calculateSquare} style={{ marginBottom: '10px' }}>Calculate</button>
      {result !== null && (
        <div>
          <h3>Result: {result}</h3>
        </div>
      )}
    </div>
  );
};

export default SquareCalculator;
