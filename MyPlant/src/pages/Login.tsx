import React, { useState } from 'react';
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

const Login: React.FC = () => {

  const [text, setText] = useState<string>();

  return (
    <IonPage>
      <IonContent id="login_bg">
        <IonCard class="my-ion-card" id="login_card">
          <IonCardHeader>
            <IonIcon icon={personCircleOutline} class="my-ion-icon" />
            <IonCardTitle>Sign in</IonCardTitle>
            <br />
          </IonCardHeader>
          <IonCardContent>
            <form action="/page/login/" method="get">
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="email" clearInput></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type="password" clearInput></IonInput>
            </IonItem>
            <br />
            <IonButton type="submit" expand="full">Sign In</IonButton>
            </form>
            <Link to="#" id="link_right">Forgot your password?</Link>
            <br />
            <Link to="#" id="link_right">Don't have an account? Sign up now.</Link>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
