import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonToggle,
  IonItem,
  IonLabel,
  IonButtons,

} from '@ionic/react';
import "../theme/ionicStyles.css";

interface SettingsModalProps {
  darkMode: boolean;
  toggleDarkMode: (shouldEnable: boolean) => Promise<void>;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  darkMode,
  toggleDarkMode,
  onClose,
  
}) => {

  return (
    <>
      <IonHeader>
        <IonToolbar className='custom-IonToolbar'>
          <IonTitle>Asetukset</IonTitle>
          <IonButtons slot="end">
            <button className="custom-close" onClick={onClose}>
              <p style={{fontWeight: '1000', color: 'ButtonHighlight'}}>X</p>
            </button>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem className='custom-IonItem' lines="none">
          <IonLabel>Väriteema</IonLabel>
          <IonToggle
            checked={darkMode}
            onIonChange={(e) => toggleDarkMode(e.detail.checked)}
          />
        </IonItem>
      </IonContent>
    </>
  );
};

export default SettingsModal;
