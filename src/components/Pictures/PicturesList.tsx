import React, { useEffect, useState } from 'react';
import AWS from 'aws-sdk';
import PictureDetails from './PictureDetails';

const PicturesList: React.FC = () => {
  const [pictures, setPictures] = useState<{ id: string; url: string }[]>([]);

  useEffect(() => {
    const s3 = new AWS.S3();
    const bucketName = process.env.REACT_APP_AWS_BUCKET_NAME;

    if (!bucketName) {
      console.error(
        'REACT_APP_AWS_BUCKET_NAME is not defined in the environment variables.'
      );
      return;
    }
    const params = {
      Bucket: bucketName,
      Prefix: 'gipper-static-assets/stock_images',
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
