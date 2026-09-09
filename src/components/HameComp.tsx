import React from 'react';
import { IonListHeader, IonItem, IonLabel, IonList } from '@ionic/react';

const HameComp: React.FC = () => {
    return (  
      <IonList className='kalastupaikkaLista'>
        {<IonListHeader className='kalastupaikkaHeader'>
          <IonLabel><strong>Kanta- ja Päijät-Hämeen kalastuspaikkoja</strong></IonLabel>
        </IonListHeader> }
        <IonItem button routerLink="/isomelkutin" detail lines="none">
          <IonLabel>Iso-Melkutin</IonLabel>
        </IonItem>
        <IonItem button routerLink="/kaartjarvi" detail lines="none">
          <IonLabel>Kaartjärvi</IonLabel>
        </IonItem>
        <IonItem button routerLink="/paajarvi" detail lines="none">
          <IonLabel>Pääjärvi</IonLabel>
        </IonItem>
        <IonItem button routerLink="/kitkajoen-ylaosa" detail lines="none">
          <IonLabel>Kitkajoen yläosa</IonLabel>
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

export default HameComp;