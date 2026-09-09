import React, { useEffect, useState } from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router'; 
import { Redirect, Route } from 'react-router-dom';

import { useHistory, useLocation } from 'react-router-dom';
import { useDeviceStatus } from "./context/useDeviceStatusContext";
import { SplashScreen } from '@capacitor/splash-screen';

import Menu from './components/Menu';
import { useDarkMode } from './hooks/useDarkMode';
import {useWeatherFetcher} from './hooks/useWeatherFetcher';
import {DeviceStatusProvider} from "./context/useDeviceStatusContext";
import NetworkBanner from "./components/NetworkBanner";

import Home from './pages/Home';
import Kalastuslaki from './pages/Kalastuslaki';

import Lappi from './pages/Lappi';
import Inarijoki from './kalapaikat/Lappi/Inarijoki';
import Paistunturi from './kalapaikat/Lappi/Paistunturi';

import Kainuu from './pages/Kainuu';
import KitkajoenYlaosa from './kalapaikat/Kainuu/KitkajoenYlaosa';

import KeskiSuomi from './pages/Keski-Suomi';
import Pihtipudas from './kalapaikat/Keski-Suomi/Pihtipudas';
import Kivijarvi from './kalapaikat/Keski-Suomi/Kivijarvi';
import Saarijarvi from './kalapaikat/Keski-Suomi/Saarijarvi';


import Satakunta from './pages/Satakunta';
import Siuronkoski from './kalapaikat/Satakunta/Siuronkoski';

import Hame from './pages/Hame';
import Isomelkutin from './kalapaikat/Hame/Iso-Melkutin';
import Kaartjarvi from './kalapaikat/Hame/Kaartjarvi';
import Paajarvi from './kalapaikat/Hame/Paajarvi';

import Uusimaa from './pages/Uusimaa';
import Hiidenvesi from './kalapaikat/Uusimaa/Hiidenvesi';
import Karkkilankosket from './kalapaikat/Uusimaa/Karkkilankosket';
import LantinenSuomenlahti from './kalapaikat/Uusimaa/LantinenSuomenlahti';
import Nuuksio from './kalapaikat/Uusimaa/Nuuksio';
import Vantaanjoki from './kalapaikat/Uusimaa/Vantaanjoki';

import Ahvenanmaa from './kalapaikat/Ahvenanmaa';

import Weather from './pages/Weather';
import Kalakalenteri from './pages/Kalakalenteri';
import Maastokartta from './pages/Maastokartta';
import Kalakartta from './pages/Kalakartta';
import Merikartta from './pages/Merikartta';

import Orto from './pages/Orto';

import './theme/global.css';
import './theme/ionicStyles.css';
import './theme/variables.css';

import { ScreenOrientation } from "@capacitor/screen-orientation";

/* Ionic core CSS */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';
import './theme/variables.css';

setupIonicReact();

const RouteGuard: React.FC = () => {

  const { wifiEnabled, gpsOff } = useDeviceStatus();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const netRequiredPaths = [
      "/folder/Weather",
      "/map/Merikartta",
      "/map/Maastokartta",
      "/map/Kalakartta"
    ];

    const isRestrictedPath = netRequiredPaths.some(path =>
      location.pathname.toLowerCase().includes(path.toLowerCase())
    );

    const isWeatherPage = location.pathname.toLowerCase().includes("/folder/weather");

    // 🔥 1) WLAN puuttuu → estetään Weather + Map
    if (!wifiEnabled && isRestrictedPath) {
      history.replace("/folder/Home");
      return;
    }

    // 🔥 2) GPS OFF → estetään vain Weather
    if (gpsOff && isWeatherPage) {
      history.replace("/folder/Home");
      return;
    }

  }, [wifiEnabled, gpsOff, location.pathname, history]);

  return null;
};


 const App: React.FC = () => {

  useWeatherFetcher();

  useEffect(() => {
    const prepareApp = async () => {
      // Simuloidaan latausta 2 sekuntia
      await new Promise(resolve => setTimeout(resolve, 2000));
  
      // Piilotetaan splash hitaasti
      await SplashScreen.hide({
        fadeOutDuration: 1000
      });
    };
  
    prepareApp();
  }, []);

  ScreenOrientation.lock({ orientation: "portrait" });

  const { darkMode, toggleDarkMode } = useDarkMode();
  const [hasValidLocation, setHasValidLocation] = useState(false);


  // Tarkista localStorage ja aseta hasValidLocation
  useEffect(() => {
    const loc = localStorage.getItem("cachedLocation");
    setHasValidLocation(!!loc && loc !== 'error');
  }, []);

  return (
    <IonApp>
     <DeviceStatusProvider>
     <IonReactRouter>
     <RouteGuard />
      <NetworkBanner />

        <IonSplitPane contentId="main">
          <Menu
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            contentId="main"
            menuId="main-menu"
            hasValidLocation={hasValidLocation} 
          />

          <IonRouterOutlet id="main">

            <Route path="/" exact>
              <Redirect to="/folder/home" />
            </Route>
            <Route path="/folder/home" exact>
              <Home />
            </Route>
            <Route path="/folder/Weather" exact component={Weather} />
            <Route path="/folder/Kalastuslaki" exact component={Kalastuslaki} />

            <Route path="/place/Lappi" exact component={Lappi} />
            <Route path="/Inarijoki" exact component={Inarijoki} />
            <Route path="/Paistunturi" exact component={Paistunturi} /> 

            <Route path="/place/Kainuu" exact component={Kainuu} />
            <Route path="/KitkajoenYlaosa" exact component={KitkajoenYlaosa} /> 

            <Route path="/place/Keski-Suomi" exact component={KeskiSuomi} />
            <Route path="/Pihtipudas" exact component={Pihtipudas} />
            <Route path="/Kivijarvi" exact component={Kivijarvi} /> 
            <Route path="/Saarijarvi" exact component={Saarijarvi} /> 
            
            <Route path="/place/Satakunta" exact component={Satakunta} />
            <Route path="/Siuronkoski" exact component={Siuronkoski} />  

            <Route path="/place/Hame" exact component={Hame} />
            <Route path="/Isomelkutin" exact component={Isomelkutin} /> 
            <Route path="/Kaartjarvi" exact component={Kaartjarvi} />
            <Route path="/Paajarvi" exact component={Paajarvi} />   

            <Route path="/place/Uusimaa" exact component={Uusimaa} />
            <Route path="/Hiidenvesi" exact component={Hiidenvesi} /> 
            <Route path="/Karkkilankosket" exact component={Karkkilankosket} /> 
            <Route path="/LantinenSuomenlahti" exact component={LantinenSuomenlahti} /> 
            <Route path="/Nuuksio" exact component={Nuuksio} />  
            <Route path="/Vantaanjoki" exact component={Vantaanjoki} /> 

            <Route path="/place/Ahvenanmaa" exact component={Ahvenanmaa} /> 

            <Route path="/map/Merikartta" exact component={Merikartta} />
            <Route path="/map/Maastokartta" exact component={Maastokartta} />
            <Route path="/map/Kalakartta" exact component={Kalakartta} />
            <Route path="/folder/Kalakalenteri" exact component={Kalakalenteri} />
            <Route path="/folder/Orto" exact component={Orto} /> 
          </IonRouterOutlet>
        </IonSplitPane>
        </IonReactRouter>
        </DeviceStatusProvider>
    </IonApp>
  );
};

export default App;
