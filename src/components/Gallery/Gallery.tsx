import { useState, useEffect } from 'react';
import AWS from 'aws-sdk';

const s3 = new AWS.S3();
const maxKeys = 50;

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [continuationToken, setContinuationToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (token: string | null) => {
    setLoading(true);
    try {
      const params = {
        Bucket: process.env.REACT_APP_AWS_BUCKET_NAME,
        MaxKeys: maxKeys,
        ContinuationToken: token,
      };

      const response = await s3.listObjectsV2(params).promise();
      // Append new images to the existing list
      setImages((prevImages) => [...prevImages, ...response.Contents]);
      setContinuationToken(response.NextContinuationToken);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(null);
  }, []);

  const handleNextPage = () => {
    if (continuationToken) {
      fetchImages(continuationToken);
    }
  };

  // Render images and pagination controls
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        images.map((image, index) => (
          <div key={index}>
            {/* Render each image, replace this div with your image rendering logic */}
            <img
              src={`https://dzfa1uifb0sb6.cloudfront.net/stock_images/${image.Key}`}
              alt={`image-${image}`}
            />
          </div>
        ))
      )}

      {continuationToken && <button onClick={handleNextPage}>Next Page</button>}
    </div>
  );
};

export default Gallery;
