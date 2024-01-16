// src/components/Pictures/PictureDetails.tsx
import React, { useState } from 'react';

interface Picture {
  id: number;
  source: string;
  name: string;
  dimensions: string;
}

interface PictureDetailsProps {
  picture: Picture;
}

const PictureDetails: React.FC<PictureDetailsProps> = ({ picture }) => {
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
        src={picture.source}
        alt={picture.name}
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
          <h3>{picture.name}</h3>
          <p>Dimensions: {picture.dimensions}</p>
          <button onClick={() => alert(`Open ${picture.name}`)}>Open</button>
        </div>
      )}
    </div>
  );
};

export default PictureDetails;
