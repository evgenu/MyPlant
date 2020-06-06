import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
} from "@ionic/react";
import React from "react";
import PlantData from "../components/Plant_data"

const href = window.location.href.split('/')
const plant_id = href[href.length - 1]

const Plant: React.FC = () => {
  
    return (
  
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>{plant_id}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">{plant_id}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <PlantData/>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Plant;
  