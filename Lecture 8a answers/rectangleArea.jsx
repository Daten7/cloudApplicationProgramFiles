import { useState } from "react";

const RectangleAreaCalculator = () => {
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [area, setArea] = useState(null);
  
    const calculateArea = () => {
      const calculatedArea = parseFloat(length) * parseFloat(width);
      setArea(calculatedArea);
    };
  
    return (
      <div style={{ padding: '20px', maxWidth: '300px', margin: '0 auto', textAlign: 'center' }}>
        <h2>Rectangle Area Calculator</h2>
        <div>
          <label>Length:</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            placeholder="Enter length"
            style={{ marginBottom: '10px', width: '100%' }}
          />
        </div>
        <div>
          <label>Width:</label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            placeholder="Enter width"
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
  
  export default RectangleAreaCalculator;