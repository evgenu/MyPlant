import React from 'react';
import {
  IonContent,
  IonPage,
  IonInput,
  IonItem,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonButton
} from '@ionic/react';
import './Login.css';
import { personCircleOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  return (
    <IonPage>
      <IonContent id="login_bg">
        <IonCard class="my-ion-card" id="login_card">
          <IonCardHeader>
            <IonIcon icon={personCircleOutline} class="my-ion-icon" />
            <IonCardTitle>Sign up</IonCardTitle>
            <br />
          </IonCardHeader>
          <IonCardContent>
            <form action="/page/home" method="POST">
            <IonItem>
              <IonLabel position="floating">Name</IonLabel>
              <IonInput type="text" name='name' clearInput required></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="email" name='email' clearInput required></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type="password" name='pass' clearInput minlength={8} required></IonInput>
            </IonItem>
            <br />
            <IonButton type="submit" expand="full">Sign Up</IonButton>
            </form>
            <Link to="/page/login" id="link_right">Already have an account? Sign in now.</Link>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Register;
