import React from 'react';
import { IonListHeader, IonItem, IonLabel, IonList } from '@ionic/react';

const KeskiSuomiComp: React.FC = () => {
    return (  
      <IonList className='kalastupaikkaLista'>
        <IonListHeader className='kalastupaikkaHeader'>
          <IonLabel><strong>Keski-Suomen kalastuspaikkoja</strong></IonLabel>
        </IonListHeader>
        <IonItem button routerLink="/pihtipudas" detail lines="none">
          <IonLabel>Pihtipudas</IonLabel>
        </IonItem>
        <IonItem button routerLink="/kivijarvi" detail lines="none">
          <IonLabel>Kivijärvi</IonLabel>
        </IonItem>
        <IonItem button routerLink="/saarijarvi" detail lines="none">
          <IonLabel>Saarijärven alue</IonLabel>
        </IonItem>
        <IonItem button routerLink="/konkameno" detail lines="none">
          <IonLabel>Könkämäeno</IonLabel>
        </IonItem>
        <IonItem detail lines="none">
          <IonLabel>Pac-Man</IonLabel>
        </IonItem>
        <IonItem detail lines="none">
          <IonLabel>Super Mario World</IonLabel>
        </IonItem>
      </IonList>      
    );
}

export default KeskiSuomiComp;