import React from 'react';
import { IonListHeader, IonItem, IonLabel, IonList } from '@ionic/react';

const KainuuComp: React.FC = () => {
    return (  
      <IonList className='kalastupaikkaLista'>
        <IonListHeader className='kalastupaikkaHeader'>
          <IonLabel><strong>Kainuun ja Pohjois-Pohjanmaan kalastuspaikkoja</strong></IonLabel>
        </IonListHeader>
        <IonItem button routerLink="/kitkajoenYlaosa" detail lines="none">
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

export default KainuuComp;