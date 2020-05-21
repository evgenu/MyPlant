import React from 'react';
import './PlantsList.css';

interface ContainerProps {
  name: string;
}

const PlantsList: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
    </div>
  );
};

export default PlantsList;
