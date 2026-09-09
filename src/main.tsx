import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './components/ThemeProvider';
import { IonReactRouter } from '@ionic/react-router';
//import { SplashScreen } from '@capacitor/splash-screen';


function startApp() {
  const container = document.getElementById('root');
  if (!container) {
    console.error('Ei löytynyt root-elementtiä!');
    return;
  }
 // SplashScreen.show({ autoHide: false });
  
  const root = ReactDOM.createRoot(container);
  root.render(
    <IonReactRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </IonReactRouter>
  );
}

startApp(); 

// (async () => {
//   // Odotetaan sijaintia
//   try {
//     const position = await getLocation();
//    // const coords = position; //`${position.coords.latitude},${position.coords.longitude}`;
//     localStorage.setItem("cachedLocation", JSON.stringify(position));

//   } catch (error) {
//     console.error("Sijainnin haku epäonnistui ennen sovellusta:", error);
//     localStorage.setItem("cachedLocation", "error");
//   }
//   // Käynnistä React vasta kun sijainti on saatu tai epäonnistunut
//   startApp();
// })();

// // Geolocationin promisemainen versio
// function getLocation(): Promise<GeolocationPosition> {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

