import React from 'react';
import { IonListHeader, IonItem, IonLabel, IonList } from '@ionic/react';

const UusimaaComp: React.FC = () => {
    return (  
      <IonList className='kalastupaikkaLista'>
        <IonListHeader className='kalastupaikkaHeader'>
          <IonLabel><strong>Uudenmaan kalastuspaikkoja</strong></IonLabel>
        </IonListHeader>
        <IonItem button routerLink="/hiidenvesi" detail lines="none">
          <IonLabel>Hiidenvesi</IonLabel>
        </IonItem>
        <IonItem button routerLink="/karkkilankosket" detail lines="none">
          <IonLabel>Karkkilankosket</IonLabel>
        </IonItem>
        <IonItem button routerLink="/nuuksio" detail lines="none">
          <IonLabel>Nuuksio</IonLabel>
        </IonItem>
        <IonItem button routerLink="/lantinensuomenlahti" detail lines="none">
          <IonLabel>Läntinen Suomenlahti</IonLabel>
        </IonItem>
        <IonItem detail lines="none">
          <IonLabel>Pac-Man</IonLabel>
        </IonItem>
        <IonItem detail lines="none" routerLink="/vantaanjoki">
          <IonLabel>Vantaanjoki</IonLabel>
        </IonItem>
      </IonList>      
    );
}

export default UusimaaComp;