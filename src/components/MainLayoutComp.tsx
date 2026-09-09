export const globalPosition = localStorage.getItem("initialLocation");
import React, { useState} from 'react';
import { IonPage, IonHeader, IonToolbar, IonMenuButton, IonTitle, IonContent, IonFooter, IonButtons, IonBackButton, IonList, IonPopover,IonItem,IonLabel  } from '@ionic/react';
import { useDarkMode } from '../hooks/useDarkMode';
import { useHistory, useLocation } from 'react-router-dom';

interface Props {
  title?: string;
  pagetitle?: React.ReactNode;
  children: React.ReactNode;
  footer?: (openPopover: (type: "maps" | "fish") => void) => React.ReactNode;
}

const MainLayoutComp: React.FC<Props> =  ({ title, children, footer, pagetitle }) => {

  const { darkMode } = useDarkMode();
  const history = useHistory();
  const [popoverType, setPopoverType] = useState<null | "maps" | "fish">(null);
  const openPopover = (type: "maps" | "fish") => { setPopoverType(type); };
  const closePopover = () => setPopoverType(null);
  const location = useLocation();
  const isHomePage = location.pathname.toLowerCase() === "/folder/home";

  return (
    <IonPage id="main" className={'main-layout'} >
      <IonHeader>
        <IonToolbar className='custom-IonToolbar'>
          <IonButtons slot="start">
            {isHomePage ? (
              <IonMenuButton />
            ) : (
              <IonBackButton defaultHref="/folder/home" />
            )}
          </IonButtons>
          <IonTitle>{title}{pagetitle}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}  style={{ '--background': darkMode ? '#121212' : '#ffffff' }}>
        {children}
      </IonContent>
      {typeof footer === "function" && (
        <IonFooter translucent={true}>
          <IonToolbar className="custom-IonToolbar-bottom">
            {footer(openPopover)}
          </IonToolbar>
        </IonFooter>
      )}

      <IonPopover  
        side="bottom"
        alignment="center"
        arrow={false}         
        style={{
          '--offset-y': '-80px'
        }}
        isOpen={popoverType !== null}
        onDidDismiss={closePopover}
      >
        <IonList
            lines="none"
            style={{
              '--background': 'var(--bg-page-header)',
              'color': 'var(--text-color)',
              '--inner-padding-start': '0',
              '--inner-padding-end': '0',
              '--inner-padding-top': '0',
              '--inner-padding-bottom': '0'
            }}
          >
          {popoverType === "maps" && (
            <>
              <IonItem
                lines="none"
                style={{
                  '--background': 'var(--bg-page-header)',
                  'color': 'var(--text-color)',
                  '--inner-padding-start': '0',
                  '--inner-padding-end': '0',
                  '--inner-padding-top': '0',
                  '--inner-padding-bottom': '0'
                }}
              >
                <div style={{ width: '100%' }}>
                  <h6 style={{ margin: 0 }}>Kartat</h6>
                </div>
              </IonItem>
              {["Maastokartta", "Kalakartta", "Merikartta"].map((mapName) => {
                const path = `/map/${mapName.toLowerCase().replace("ä", "a")}`;
                return (
                  <IonItem
                  style={{
                    '--background': 'var(--bg-background)',
                    'color': 'var(--text-color)'}}
                    key={mapName}
                    button
                    onClick={() => {
                      closePopover();
                      history.replace(path);
                    }}
                  >
                    <IonLabel>{mapName}</IonLabel>
                  </IonItem>
                );
              })}
            </>
          )}
          {popoverType === "fish" && (
            <>
              <IonItem
                lines="none"
                style={{
                  '--background': 'var(--bg-page-header)',
                  'color': 'var(--text-color)',
                  '--inner-padding-start': '0',
                  '--inner-padding-end': '0',
                  '--inner-padding-top': '0',
                  '--inner-padding-bottom': '0'
                }}
              >
                <div style={{ width: '100%' }}>
                  <h6 style={{ margin: 0 }}>Kalastuspaikat</h6>
                </div>
              </IonItem>
              {[
                { label: "Lappi", value: "Lappi" },
                { label: "Kainuu ja Pohjois-Pohjanmaa", value: "Kainuu" },
                { label: "Etelä-Pohjanmaa, Pohjanmaa ja Keski-Pohjanmaa", value: "Pohjanmaa" },
                { label: "Keski-Suomi", value: "Keski-Suomi" },
                { label: "Häme", value: "Häme" },
                { label: "Savo, Pohjois-Karjala", value: "Savo" },
                { label: "Satakunta ja Pirkanmaa", value: "Satakunta" },
                { label: "Etelä-Karjala, Kymeenlaakso", value: "Etelä-Karjala, Kymeenlaakso" },
                { label: "Varsinais-Suomi", value: "Varsinais-Suomi" },
                { label: "Uusimaa", value: "Uusimaa" },
                { label: "Ahvenanmaa", value: "Ahvenanmaa" },
                { label: "Pohjois-Ruotsi", value: "Pohjois-Ruotsi" },
                { label: "Pohjois-Norja", value: "Pohjois-Norja" }
              ].map((place) => {
                const path = `/place/${place.value
                  .toLowerCase()
                  .replace(/ä/g, "a")
                  .replace(/ö/g, "o")
                  .replace(/\s+/g, "-")}`;

                return (
                  <IonItem
                    style={{
                      '--background': 'var(--bg-background)',
                      'color': 'var(--text-color)'
                    }}
                    key={place.label}
                    button
                    onClick={() => {
                      closePopover();
                      history.replace(path);
                    }}
                  >
                    <IonLabel>{place.label}</IonLabel>
                  </IonItem>
                );
              })}
         </> )}
        </IonList>
      </IonPopover>
    </IonPage>
  );
};

export default MainLayoutComp;