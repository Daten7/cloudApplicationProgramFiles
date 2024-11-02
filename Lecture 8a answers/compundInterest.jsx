// components/CompoundInterestCalculator.js
import { useState } from 'react';

const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [compoundingsPerYear, setCompoundingsPerYear] = useState('');
  const [result, setResult] = useState(null);

  const calculateCompoundInterest = () => {
    const principalValue = parseFloat(principal);
    const rateValue = parseFloat(rate) / 100;
    const timeValue = parseFloat(time);
    const compoundingsValue = parseFloat(compoundingsPerYear);

    if (!isNaN(principalValue) && !isNaN(rateValue) && !isNaN(timeValue) && !isNaN(compoundingsValue)) {
      const amount = principalValue * Math.pow(1 + rateValue / compoundingsValue, compoundingsValue * timeValue);
      const compoundInterest = amount - principalValue;
      setResult(compoundInterest.toFixed(2));
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Compound Interest Calculator</h2>
      <div>
        <label>Principal (P):</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          placeholder="Enter principal amount"
          style={{ marginBottom: '10px', width: '100%' }}
        />
      </div>
      <div>
        <label>Rate (%) per year (r):</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="Enter annual interest rate"
          style={{ marginBottom: '10px', width: '100%' }}
        />
      </div>
      <div>
        <label>Time (t) in years:</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Enter time in years"
          style={{ marginBottom: '10px', width: '100%' }}
        />
      </div>
      <div>
        <label>Compounded times per year (n):</label>
        <input
          type="number"
          value={compoundingsPerYear}
          onChange={(e) => setCompoundingsPerYear(e.target.value)}
          placeholder="Enter compound frequency per year"
          style={{ marginBottom: '10px', width: '100%' }}
        />
      </div>
      <button onClick={calculateCompoundInterest} style={{ marginBottom: '10px' }}>Calculate</button>
      {result !== null && (
        <div>
          <h3>Compound Interest: {result}</h3>
        </div>
      )}
    </div>
  );
};

export default CompoundInterestCalculator;
