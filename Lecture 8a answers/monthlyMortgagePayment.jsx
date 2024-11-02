// components/MortgageCalculator.js
import { useState } from 'react';

const MortgageCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [annualRate, setAnnualRate] = useState('');
  const [years, setYears] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMonthlyPayment = () => {
    const principalValue = parseFloat(principal);
    const annualRateValue = parseFloat(annualRate) / 100;
    const yearsValue = parseFloat(years);

    if (!isNaN(principalValue) && !isNaN(annualRateValue) && !isNaN(yearsValue)) {
      const monthlyRate = annualRateValue / 12;
      const numberOfPayments = yearsValue * 12;
      const payment = 
        (principalValue * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      setMonthlyPayment(payment.toFixed(2)); // Rounds to two decimal places
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Mortgage Calculator</h2>
      <div>
        <label>Principal (P):</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          placeholder="Enter loan principal"
          style={{ marginBottom: '10px', width: '100%' }}
        />
      </div>
      <div>
        <label>Annual Interest Rate (%):</label>
        <input
          type="number"
          value={annualRate}
          onChange={(e) => setAnnualRate(e.target.value)}
          placeholder="Enter annual interest rate"
          style={{ marginBottom: '10px', width: '100%' }}
        />
      </div>
      <div>
        <label>Loan Term (years):</label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          placeholder="Enter loan term in years"
          style={{ marginBottom: '10px', width: '100%' }}
        />
      </div>
      <button onClick={calculateMonthlyPayment} style={{ marginBottom: '10px' }}>Calculate</button>
      {monthlyPayment !== null && (
        <div>
          <h3>Monthly Payment: ${monthlyPayment}</h3>
        </div>
      )}
    </div>
  );
};

export default MortgageCalculator;
