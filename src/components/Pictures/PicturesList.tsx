import React, { useEffect, useState } from 'react';
import AWS from 'aws-sdk';
import PictureDetails from './PictureDetails';

const PicturesList: React.FC = () => {
  const [pictures, setPictures] = useState<{ id: string; url: string }[]>([]);

  useEffect(() => {
    const s3 = new AWS.S3();
    const params = {
      Bucket: 'YOUR_BUCKET_NAME',
      Prefix: 'YOUR_FOLDER_PATH/',
    };

    s3.listObjectsV2(params, (err, data) => {
      if (err) {
        console.error('Error retrieving pictures from S3:', err);
      } else {
        const pictureList = data.Contents
          ? data.Contents.map((item) => ({
              id: item.Key || '',
              url: `https://${params.Bucket}.s3.amazonaws.com/${item.Key}`,
            }))
          : [];
        setPictures(pictureList);
      }
    });
  }, []);

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {pictures.map((picture) => (
        <li key={picture.id}>
          <PictureDetails picture={picture} />
        </li>
      ))}
    </ul>
  );
};

export default PicturesList;
