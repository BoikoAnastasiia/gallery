// src/components/Colors/ColorsList.tsx
import React from 'react';
import ColorDetails from './ColorDetails';

interface Color {
  id: number;
  color: string; // Hex color code
  varName: string; // CSS variable name
}

interface ColorsListProps {
  colors: Color[];
}

const ColorsList: React.FC<ColorsListProps> = ({ colors }) => {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {colors.map((color) => (
        <li key={color.id}>
          <ColorDetails color={color} />
        </li>
      ))}
    </ul>
  );
};

export default ColorsList;
