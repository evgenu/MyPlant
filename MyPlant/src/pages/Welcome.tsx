import React from 'react';
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonSlides,
  IonSlide,
  IonImg,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle
} from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import './Welcome.css'
import { Link } from 'react-router-dom';
//import plants_home from 'assets'

const slideOpts = {
  initialSlide: 0,
  speed: 400,
  //padding: true
  //height: window.innerWidth
};

//secondary, tertiary, warning, success
const slide_1_img = 'https://techcrunch.com/wp-content/uploads/2019/08/20190530_Beginner_Plants_0007.jpg?w=730&crop=1'

const Welcome: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Welcome</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonSlides pager={true} options={slideOpts}>
          <IonSlide>
            <IonCard color="tertiary">
              <IonImg src={slide_1_img}/>
              <IonCardHeader>
                <IonCardSubtitle>Keep close to nature</IonCardSubtitle>
                <IonCardTitle>My Plant</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                Keep close to Nature's heart... and break clear away, once in awhile,
                and climb a mountain or spend a week in the woods. Wash your spirit clean.
              </IonCardContent>
            </IonCard>
          </IonSlide>
          <IonSlide>
            <IonCard color="secondary">
              <IonImg src={slide_1_img}/>
              <IonItem>
                <IonIcon icon={pin} slot="start" />
                <IonLabel>ion-item in a card, icon left, button right</IonLabel>
                <IonButton fill="outline" slot="end">View</IonButton>
              </IonItem>

              <IonCardContent>
                This is content, without any paragraph or header tags,
                within an ion-cardContent element.
              </IonCardContent>
            </IonCard>
          </IonSlide>
          <IonSlide>
            <IonCard color="warning">
              <IonImg src={slide_1_img}/>
              <IonItem href="#" className="ion-activated">
                <IonIcon icon={wifi} slot="start" />
                <IonLabel>Card Link Item 1 activated</IonLabel>
              </IonItem>

              <IonItem href="#">
                <IonIcon icon={wine} slot="start" />
                <IonLabel>Card Link Item 2</IonLabel>
              </IonItem>

              <IonItem className="ion-activated">
                <IonIcon icon={warning} slot="start" />
                <IonLabel>Card Button Item 1 activated</IonLabel>
              </IonItem>

              <IonItem>
                <IonIcon icon={walk} slot="start" />
                <IonLabel>Card Button Item 2</IonLabel>
              </IonItem>
              <Link to='/page/login'>Sign in</Link>
            </IonCard>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
