// src/components/Icons/IconsList.tsx
import React from 'react';
import IconDetails from './IconDetails';

interface Icon {
  id: number;
  source: string;
  name: string;
}

interface IconsListProps {
  icons: Icon[];
}

const IconsList: React.FC<IconsListProps> = ({ icons }) => {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {icons.map((icon) => (
        <li key={icon.id}>
          <IconDetails icon={icon} />
        </li>
      ))}
    </ul>
  );
};

export default IconsList;
