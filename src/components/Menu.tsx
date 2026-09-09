import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonModal,
  IonAccordionGroup,
  IonAccordion

} from '@ionic/react';
//import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { menuController } from '@ionic/core';
import { FaHouse, FaCalendarDays, FaMap, FaCloudSun, FaBookOpen, FaGear}  from 'react-icons/fa6';
import './themeComp/Menu.css';
import SettingsModal from '../pages/SettingsModal';
import { useDeviceStatus } from "../context/useDeviceStatusContext";

interface AppPage {
  url: string;
  mdIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  requiresLocation?: boolean;
}

const appPages: AppPage[] = [
  { title: 'Etusivu', url: '/folder/Home', mdIcon: FaHouse },
  { title: 'Säätiedot', url: '/folder/Weather', mdIcon: FaCloudSun},
  { title: 'Kalastuslaki', url: '/folder/Kalastuslaki', mdIcon: FaCalendarDays },
  { title: 'Kalakalenteri', url: '/folder/Kalakalenteri', mdIcon: FaCalendarDays },
  { title: 'Orto', url: '/folder/Orto', mdIcon: FaCalendarDays }
];

interface MenuProps {
  darkMode: boolean;
  toggleDarkMode: (shouldEnable: boolean) => Promise<void>;
  contentId: string;
  menuId: string;
  hasValidLocation?: boolean;
}

const Menu: React.FC<MenuProps> = ({ darkMode: darkModeProp, toggleDarkMode, hasValidLocation = false }) => {

  const { noNetwork, gpsOff  } = useDeviceStatus();
  const location = useLocation();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const isMapSelected = location.pathname.startsWith('/map');
  const isPlaceSelected = location.pathname.startsWith('/place');

  return (
    <IonMenu contentId="main" side="start" menuId="main-menu" type="overlay" className='bg-transparent'>
      <IonContent style={{ '--background': darkModeProp ? '#333c4d' : '#d1d5db', margin: 0, padding: 0 }}>
      <img src="../images/drops.png" style={{margin:'-10px'}} alt="hauki" />
        <IonList id="inbox-list">
          <IonListHeader>
            Fisumobi<span style={{letterSpacing: '2px', fontStyle: 'italic', fontSize: '0.6em', marginLeft: '5px', whiteSpace: 'nowrap',
                      overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '150px'}}> - kalastajan appi</span>
            <span style={{ display: 'flex', marginLeft: 'auto', marginRight: '0'}}>
              <img src={`${import.meta.env.BASE_URL}icons/icon.png`} style={{ maxWidth: '30px', maxHeight: '30px' }} />
            </span>
          </IonListHeader>
          
          {appPages.map((appPage, index) => {

              const isWeather = appPage.url.includes("Weather");
              const isMap = appPage.url.includes("map");

              const weatherDisabled = isWeather && (noNetwork || gpsOff);
              const mapDisabled = isMap && noNetwork;

              const disabled =
                (!!appPage.requiresLocation && !hasValidLocation) ||
                weatherDisabled ||
                mapDisabled;

              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem
                    routerLink={disabled ? undefined : appPage.url}
                    className={`menu-item ${disabled ? "is-disabled" : ""} ${location.pathname === appPage.url ? "selected" : ""}`}
                    lines="none"
                    detail={false}
                  >
                    <div slot="start" className="menu-item-icon">
                      <appPage.mdIcon color='#8585ad'/>
                    </div>

                    <IonLabel>
                      {appPage.title}
                      {disabled && (
                        <span className="requires-net">
                          {noNetwork
                            ? "(Vaatii netin)"
                            : gpsOff
                            ? "(Vaatii GPS:n)"
                            : ""}
                        </span>
                      )}

                    </IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}


          {/* Map submenu */}
          <IonAccordionGroup multiple={false}> 
              <IonAccordion value="place" className='custom-SubIonAccordion'>
                <IonItem slot="header" lines="none" className={isPlaceSelected ? 'selected' : ''}>
                <FaBookOpen color='#8585ad'/>
                  <IonLabel style={{marginLeft: '15px'}}>Kalastuspaikat</IonLabel>
                </IonItem>
                  <IonList slot="content" lines="none" className='custom-SubmenuList'>
                    {["Lappi", "Kainuu", "Pohjanmaa", "Keski-Suomi", 
                      "Häme", "Savo", "Satakunta, Pirkanmaa", "Etelä-Karjala, Kymeenlaakso", "Varsinais-Suomi", 
                       "Uusimaa", "Ahvenanmaa", "Pohjois-Ruotsi", "Pohjois-Norja"].map((placeName) => {
                      const path = `/place/${placeName.toLowerCase().replace('ä','a')}`;                     
                      return (
                        <IonMenuToggle key={placeName} autoHide>
                          <IonItem
                            style={{ marginLeft: '28px', border: 'none', marginBottom: placeName === 'Kalapaikat' ? '1px' : undefined }}
                            routerLink={path}
                            className={location.pathname === path ? 'selected' : ''}
                          >
                            <IonLabel>{placeName}</IonLabel>
                          </IonItem>
                        </IonMenuToggle>
                      );
                    })}
                  </IonList>
                </IonAccordion>
                <IonAccordion value="map" className='custom-SubIonAccordion'>
                  <IonItem
                    slot="header"
                    lines="none"
                    className={`map-item ${noNetwork ? "is-disabled" : ""} ${isMapSelected ? "selected" : ""}`}
                  >
                    <div slot="start" className="map-item-icon">
                      <FaMap color='#8585ad'/>
                    </div>

                    <IonLabel>
                      Kartat
                      {noNetwork && <span className="requires-net">(Vaatii netin)</span>}
                    </IonLabel>
                  </IonItem>
                  <IonList slot="content" lines="none" className='custom-SubmenuList'>
                    {['Maastokartta', 'Kalakartta', 'Merikartta'].map((mapName) => {
                      const path = `/map/${mapName.toLowerCase().replace('ä','a')}`;
                      return (
                        <IonMenuToggle key={mapName} autoHide>
                          <IonItem
                            style={{ marginLeft: '28px', border: 'none', marginBottom: mapName === 'Maastokartta' ? '1px' : undefined }}
                            routerLink={path}
                            className={location.pathname === path ? 'selected' : ''}
                          >
                            <IonLabel>{mapName}</IonLabel>
                          </IonItem>
                        </IonMenuToggle>
                      );
                    })}
                  </IonList>
              </IonAccordion>
            </IonAccordionGroup>

          {/* Settings */}
          <IonMenuToggle onClick={async () => { await menuController.close(); setIsSettingsOpen(true); }}>
            <IonItem lines="none">
              <FaGear color='#8585ad'/>
              <IonLabel style={{marginLeft: '17px'}}>Asetukset</IonLabel>
            </IonItem>
          </IonMenuToggle>

        </IonList>

        {/* Settings Modal */}
        <IonModal isOpen={isSettingsOpen} onDidDismiss={() => setIsSettingsOpen(false)}>
          <SettingsModal
            darkMode={darkModeProp}
            toggleDarkMode={toggleDarkMode}
            onClose={() => setIsSettingsOpen(false)}
          />
        </IonModal>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
