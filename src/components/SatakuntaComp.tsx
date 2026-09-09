import React from 'react';
import { IonListHeader, IonItem, IonLabel, IonList } from '@ionic/react';

const SatakuntaComp: React.FC = () => {
    return (  
      <IonList className='kalastupaikkaLista'>
        <IonListHeader className='kalastupaikkaHeader'>
          <IonLabel><strong>Satakunnan ja Pirkanmaan kalastuspaikkoja</strong></IonLabel>
        </IonListHeader>
        <IonItem button routerLink="/siuronkoski" detail lines="none">
          <IonLabel>Siuronkoski</IonLabel>
        </IonItem>
        <IonItem button routerLink="/paistunturi" detail lines="none">
          <IonLabel>Paistunturin erämaa-alue</IonLabel>
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

export default SatakuntaComp;