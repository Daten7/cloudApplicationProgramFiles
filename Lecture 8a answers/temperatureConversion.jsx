// components/TemperatureConverter.js
import { useState } from 'react';

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState('');
  const [conversionType, setConversionType] = useState('CtoF');
  const [result, setResult] = useState(null);

  const convertTemperature = () => {
    const tempValue = parseFloat(temperature);
    if (!isNaN(tempValue)) {
      if (conversionType === 'CtoF') {
        // Convert Celsius to Fahrenheit
        const converted = (tempValue * 9/5) + 32;
        setResult(`${converted.toFixed(2)} °F`);
      } else {
        // Convert Fahrenheit to Celsius
        const converted = (tempValue - 32) * 5/9;
        setResult(`${converted.toFixed(2)} °C`);
      }
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Temperature Converter</h2>
      <div>
        <label>Temperature:</label>
        <input
          type="number"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          placeholder="Enter temperature"
          style={{ marginBottom: '10px', width: '100%' }}
        />
      </div>
      <div>
        <label>Convert to:</label>
        <select
          value={conversionType}
          onChange={(e) => setConversionType(e.target.value)}
          style={{ marginBottom: '10px', width: '100%' }}
        >
          <option value="CtoF">Celsius to Fahrenheit</option>
          <option value="FtoC">Fahrenheit to Celsius</option>
        </select>
      </div>
      <button onClick={convertTemperature} style={{ marginBottom: '10px' }}>Convert</button>
      {result !== null && (
        <div>
          <h3>Converted Temperature: {result}</h3>
        </div>
      )}
    </div>
  );
};

export default TemperatureConverter;
