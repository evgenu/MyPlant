import React from 'react';
import './PlantsList.css';
import { IonList, IonItem, IonLabel, IonButton, IonItemDivider, IonNote } from '@ionic/react';

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
          <IonItem href={'/plant/'+List.id} detail={true}>
            <IonLabel>{List.name}</IonLabel>
            <IonNote slot='end'>{List.status}</IonNote>
          </IonItem>
      ))}
    </div>
    </IonList>
  );
};

export default PlantsList;
