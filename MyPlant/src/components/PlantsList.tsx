import React from 'react';
import './PlantsList.css';
import { IonList, IonItem, IonLabel, IonNote } from '@ionic/react';

const Plants = [
  {
    name: 'Lotus',
    status: 'OK', 
    id: 'sadasdasd'
  },
  {
    name: 'Cactus',
    status: 'Needs Water',
    id: 'sdsagsd'
  },
  {
    name: 'Flower',
    status: 'It is Dead',
    id: 'doadsng'
  }
];

const PlantsList: React.FC = () => {

  return (
    <IonList>
    <div>
      {Plants.map((List) => (
          <IonItem href={'/page/my_plants/plant/'+List.name} detail={true} key={List.id}>
            <IonLabel>{List.name}</IonLabel>
            <IonNote slot='end'>{List.status}</IonNote>
          </IonItem>
      ))}
    </div>
    </IonList>
  );
};

export default PlantsList;
