// src/components/Pictures/PicturesList.tsx
import PictureDetails from './PictureDetails';

interface Picture {
  id: number;
  source: string;
  name: string;
  dimensions: string;
}

interface PicturesListProps {
  pictures: Picture[];
}

const PicturesList: React.FC<PicturesListProps> = ({ pictures }) => {
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
