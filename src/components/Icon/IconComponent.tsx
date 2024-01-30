// src/components/Icon/IconComponent.tsx
import React, { useState, useEffect } from 'react';

const IconComponent = () => {
  const [icons, setIcons] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    // Fetch and parse the CSS file
    fetch(
      'https://dzfa1uifb0sb6.cloudfront.net/gipper_general_styles_v1.1.8.css'
    )
      .then((response) => response.text())
      .then((text) => {
        const iconVariables = text.match(/--.*?_icon: url\(.*?\);/g);
        if (iconVariables) {
          const iconMap: { [key: string]: string } = {};
          iconVariables.forEach((variable) => {
            const [key, value] = variable.split(': ');
            iconMap[key.trim()] = value
              .replace('url(', '')
              .replace(');', '')
              .trim();
          });
          setIcons(iconMap);
        }
      });
  }, []);

  return (
    <div>
      {Object.entries(icons).map(([name, url]) => (
        <div
          key={name}
          style={{
            backgroundImage: `url(${url})`,
            width: '50px',
            height: '50px',
            backgroundSize: 'contain',
          }}
        >
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default IconComponent;
