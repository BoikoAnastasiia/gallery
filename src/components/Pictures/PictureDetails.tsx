import React from 'react';

const PictureDetails: React.FC<{ picture: { id: string; url: string } }> = ({
  picture,
}) => {
  return (
    <div>
      <img src={picture.url} alt={picture.id} />
    </div>
  );
};

export default PictureDetails;
