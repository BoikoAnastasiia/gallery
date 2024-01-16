// src/components/Icons/IconDetails.tsx
import React, { useState } from 'react';

interface Icon {
  id: number;
  source: string;
  name: string;
}

interface IconDetailsProps {
  icon: Icon;
}

const IconDetails: React.FC<IconDetailsProps> = ({ icon }) => {
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
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={icon.source}
        alt={icon.name}
        style={{ maxWidth: '100%', height: 'auto' }}
      />

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
          <h3>{icon.name}</h3>
          <button onClick={() => alert(`Open ${icon.name}`)}>Open</button>
        </div>
      )}
    </div>
  );
};

export default IconDetails;
