// components/BMICalculator.js
import { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [interpretation, setInterpretation] = useState('');

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height);
    const weightInKg = parseFloat(weight);

    if (heightInMeters > 0 && weightInKg > 0) {
      const calculatedBMI = weightInKg / (heightInMeters ** 2);
      setBmi(calculatedBMI.toFixed(2));
      setInterpretation(getInterpretation(calculatedBMI));
    }
  };

  const getInterpretation = (bmiValue) => {
    if (bmiValue < 18.5) return 'Underweight';
    if (bmiValue >= 18.5 && bmiValue < 24.9) return 'Normal weight';
    if (bmiValue >= 25 && bmiValue < 29.9) return 'Overweight';
    return 'Obesity';
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h2>BMI Calculator</h2>
      <div>
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight in kg"
          style={{ marginBottom: '10px', width: '100%' }}
        />
      </div>
      <div>
        <label>Height (m):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter height in meters"
          style={{ marginBottom: '10px', width: '100%' }}
        />
      </div>
      <button onClick={calculateBMI} style={{ marginBottom: '10px' }}>Calculate BMI</button>
      {bmi && (
        <div>
          <h3>BMI: {bmi}</h3>
          <p>Interpretation: {interpretation}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
