import { 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonAvatar, 
  IonList, 
  IonItem,
  IonNote
} from '@ionic/react';
import React from 'react';
import './Profile.css';


const personal_data = {
  name: 'William Hodge',
  age: '39',
  plants: '9',
  favourite_plant: 'Lotus'
}

const Profile: React.FC = () => {
  
  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <br/><br/>
        <IonAvatar class='avatar'>
          <img src='https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y' alt=''/>
        </IonAvatar>
        <p id='name'>William Hodge</p>

        <IonList>
          <IonItem>
          <IonNote>Age: {personal_data.age}</IonNote>
          </IonItem>
          <IonItem>
          <IonNote>Plants: {personal_data.plants}</IonNote>
          </IonItem>
          <IonItem>
          <IonNote>Favourite Plant: {personal_data.favourite_plant}</IonNote>
          </IonItem>
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Profile;
