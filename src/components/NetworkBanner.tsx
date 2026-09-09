import { useState, useEffect } from "react";
import { useDeviceStatus } from "../context/useDeviceStatusContext";
import { NativeSettings, AndroidSettings } from 'capacitor-native-settings';
import "./themeComp/NetworkBanner.css";

export default function NetworkBanner() {
  const { noNetwork, wifiEnabled, wifiConnected, gpsOff, weakSignal, rssi } = useDeviceStatus();
  const [dismissed, setDismissed] = useState<string[]>([]);

  // Poistetaan ID "suljetut"-listalta, jos tila korjaantuu välissä
  useEffect(() => {
    setDismissed(prev => prev.filter(id => 
      (id === 'wifi' && !wifiEnabled) || 
      (id === 'gps' && gpsOff) ||
      (id === 'net' && noNetwork) ||
      (id === 'weak' && weakSignal)
    ));
  }, [wifiEnabled, gpsOff, noNetwork, weakSignal]);

  const handleAction = async (id: string) => {
    // 1. Suljetaan ilmoitus heti, kun painiketta painetaan
    setDismissed(prev => [...prev, id]);

    // 2. Avataan asetukset
    try {
      if (id === 'wifi') await NativeSettings.openAndroid({ option: AndroidSettings.Wifi });
      else if (id === 'gps') await NativeSettings.openAndroid({ option: AndroidSettings.Location });
    } catch { 
      console.warn("Asetusten avaaminen epäonnistui");
    }
  };

  const issues = [];
  
  if (noNetwork && !wifiEnabled && !dismissed.includes('nonet')) {
    issues.push({
      id: 'nonet',
      msg: "Ei ole verkkoyhteyttä",
      sub: "Kaikki toiminnot eivät ole käytettävissä. Laita mobiilidata tai WiFi päälle.",
      type: "error"
    });
  }
  // WiFi OFF
  // if (!wifiEnabled && !dismissed.includes('wifi')) {
  //   issues.push({ id: 'wifi', msg: "WiFi ei ole päällä", sub: "Ota WiFi käyttöön. Kaikki sivut eivät toimi ilman verkkoyhteyttä.", type: "error" });
  // }
  
  // GPS OFF
  if (gpsOff && !dismissed.includes('gps')) {
    issues.push({ id: 'gps', msg: "GPS ei ole päällä", sub: "Paikannus ei toimi. Kaikki sivut eivät ilman paikannusta.", type: "error" });
  }
  
  // Internet OFF (Näytetään vain jos WiFi on päällä, ettei tule tuplailmoitusta)
  if (noNetwork && wifiEnabled && !dismissed.includes('net')) {
    issues.push({ id: 'net', msg: "Ei internet-yhteyttä", sub: "Tarkista yhteys.", type: "error" });
  }
  
  // Ei WiFi-verkkoa (WiFi päällä, mutta ei yhdistetty)
  // if (wifiEnabled && !wifiConnected && !dismissed.includes('wificon')) {
  //   issues.push({ id: 'wificon', msg: "Ei WiFi-verkkoa", sub: "Yhdistä verkkoon.", type: "warning" });
  // }
  
  // Heikko signaali (LISÄTTY EHTO: vain jos WiFi on päällä ja yhdistetty)
  if (wifiEnabled && wifiConnected && weakSignal && !dismissed.includes('weak')) {
    issues.push({ id: 'weak', msg: `Heikko WiFi (${rssi} dBm)`, sub: "Yhteys on hidas.", type: "warning" });
  }

  if (issues.length === 0) return null;

  return (
    <div className="banner-container">
     
        {issues.map((issue) => (
          <div key={issue.id} className={`network-banner ${issue.type}`}>
            <div className="banner-text">
              <strong>{issue.msg}</strong>
              <p>{issue.sub}</p>
            </div>
        
            <div className="banner-buttons">
        
              {/* Näytä Asetukset vain wifi/gps -tiloissa */}
              {(issue.id === 'wifi' || issue.id === 'gps') && (
                <button className="btn-action" onClick={() => handleAction(issue.id)}>
                  Asetukset
                </button>
              )}

              {(issue.id === 'nonet' ) && (
                <button className="btn-action" onClick={() => handleAction('wifi')}>
                  WIFI-asetus
                </button>
              )}
       
              <button className="btn-close" onClick={() => setDismissed([...dismissed, issue.id])}>
                Sulje
              </button>
       
            </div>
          </div>
        ))}
        
    </div>
  );
}
