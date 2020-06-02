import { 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonCard,
  IonImg,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonButton,
  IonIcon
} from '@ionic/react';
import { shareSocialOutline, heartOutline } from 'ionicons/icons';
import React from 'react';
//import { useParams } from 'react-router';
import './Home.css';

const Page: React.FC = () => {

  //const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>


        <IonCard>
          <IonImg src={'https://techcrunch.com/wp-content/uploads/2019/08/20190530_Beginner_Plants_0007.jpg?w=730&crop=1'}></IonImg>
          <IonCardHeader>
            <IonCardTitle>AI Farm</IonCardTitle>
            <IonCardSubtitle>The farm you need at home</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              AI Farm is a project, which cares for your plants automaticaly.
            </p>
            <IonItem>
              <IonButton fill="solid">Learn More</IonButton>
              <IonIcon icon={heartOutline} slot='end' />
              <IonIcon icon={shareSocialOutline} slot='end' />
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Page;
