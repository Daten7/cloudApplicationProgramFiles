// components/CircleAreaCalculator.js
import { useState } from 'react';

const CircleAreaCalculator = () => {
  const [radius, setRadius] = useState('');
  const [area, setArea] = useState(null);

  const calculateArea = () => {
    const radiusValue = parseFloat(radius);
    if (radiusValue > 0) {
      const calculatedArea = Math.PI * radiusValue ** 2;
      setArea(calculatedArea.toFixed(2)); // Rounds to two decimal places
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Circle Area Calculator</h2>
      <div>
        <label>Radius:</label>
        <input
          type="number"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
          placeholder="Enter radius"
          style={{ marginBottom: '10px', width: '100%' }}
        />
      </div>
      <button onClick={calculateArea} style={{ marginBottom: '10px' }}>Calculate Area</button>
      {area !== null && (
        <div>
          <h3>Area: {area} square units</h3>
        </div>
      )}
    </div>
  );
};

export default CircleAreaCalculator;
