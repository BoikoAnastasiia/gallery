// src/components/Colors/ColorDetails.tsx
import React, { useState } from 'react';

interface Color {
  id: number;
  color: string; // Hex color code
  varName: string; // CSS variable name
}

interface ColorDetailsProps {
  color: Color;
}

const ColorDetails: React.FC<ColorDetailsProps> = ({ color }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleMouseEnter = () => {
    setShowDetails(true);
  };

  const handleMouseLeave = () => {
    setShowDetails(false);
  };

  return (
    <div
      style={{
        position: 'relative',
        cursor: 'pointer',
        backgroundColor: color.color,
        width: '100px', // Adjust the width and height as needed
        height: '100px',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showDetails && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            padding: '10px',
            textAlign: 'center',
          }}
        >
          <div style={{ marginBottom: '10px' }}>
            <span style={{ fontWeight: 'bold' }}>Color:</span> {color.color}
          </div>
          <div>
            <span style={{ fontWeight: 'bold' }}>Variable:</span>{' '}
            {color.varName}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorDetails;
