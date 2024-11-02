// components/SimpleInterestCalculator.js
import { useState } from 'react';

const SimpleInterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [simpleInterest, setSimpleInterest] = useState(null);

  const calculateSimpleInterest = () => {
    const principalValue = parseFloat(principal);
    const rateValue = parseFloat(rate);
    const timeValue = parseFloat(time);

    if (!isNaN(principalValue) && !isNaN(rateValue) && !isNaN(timeValue)) {
      const interest = (principalValue * rateValue * timeValue) / 100;
      setSimpleInterest(interest.toFixed(2));
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Simple Interest Calculator</h2>
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
        <label>Rate (% per year):</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="Enter annual interest rate"
          style={{ marginBottom: '10px', width: '100%' }}
        />
      </div>
      <div>
        <label>Time (years):</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Enter time in years"
          style={{ marginBottom: '10px', width: '100%' }}
        />
      </div>
      <button onClick={calculateSimpleInterest} style={{ marginBottom: '10px' }}>Calculate</button>
      {simpleInterest !== null && (
        <div>
          <h3>Simple Interest: ${simpleInterest}</h3>
        </div>
      )}
    </div>
  );
};

export default SimpleInterestCalculator;
