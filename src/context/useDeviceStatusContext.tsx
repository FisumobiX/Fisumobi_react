import { createContext, useContext, useEffect, useState } from "react";
import { Network } from "@capacitor/network";
import { CapacitorWifi } from "@capgo/capacitor-wifi";
import { WifiStatus } from "../plugins/wifistatus";
import { Geolocation } from '@capacitor/geolocation';
import { Capacitor } from "@capacitor/core";


type DeviceStatus = {
  wifiEnabled: boolean;
  wifiConnected: boolean;
  noNetwork: boolean;
  gpsOff: boolean;
  weakSignal: boolean;
  rssi: number | null;
  refresh: () => void;
};

const DeviceStatusContext = createContext<DeviceStatus | null>(null);

export const DeviceStatusProvider = ({ children }: any) => {

  const [wifiEnabled, setWifiEnabled] = useState(true);
  const [wifiConnected, setWifiConnected] = useState(true);
  const [noNetwork, setNoNetwork] = useState(false);
  const [gpsOff, setGpsOff] = useState(false);
  const [weakSignal, setWeakSignal] = useState(false);
  const [rssi, setRssi] = useState<number | null>(null);

  const requestPermissions = async () => {
    try {
      // Tämä avaa Androidin standardin lupakyselyn (Sijainti)
      // Sijaintilupa on pakollinen, jotta Wifi-tila voidaan lukea
      // const status = await Geolocation.requestPermissions();
      // console.log("Lupien tila:", status.location);
      await Geolocation.requestPermissions();
    } catch (err) {
      console.error("Lupien pyyntö epäonnistui", err);
    }
  };

  useEffect(() => {
    // 1. Pyydetään luvat heti käynnistyksessä
    requestPermissions();

    // 2. Aloitetaan seuranta
    refresh();
    const interval = setInterval(refresh, 3000);
    return () => clearInterval(interval);
  }, []);

  const SIGNAL_THRESHOLD = -75;

  const refresh = async () => {
    const isNative = Capacitor.isNativePlatform();
  
    // WiFi-kytkin (vain natiivissa)
    if (isNative) {
      try {
        const wifi = await WifiStatus.isWifiEnabled();
        setWifiEnabled(wifi.enabled);
      } catch (err) {
        console.error("WifiStatus error:", err);
      }
    }
  
    // Tämä toimii myös webissä
    try {
      const net = await Network.getStatus();
      setWifiConnected(net.connectionType === "wifi");
      setNoNetwork(!net.connected);
    } catch {}
  
    // GPS (vain natiivissa)
    if (isNative) {
      try {
        const gps = await WifiStatus.isGpsEnabled();
        setGpsOff(!gps.enabled);
      } catch {
        setGpsOff(true);
      }
    }
  
    // RSSI (vain natiivissa)
    if (isNative) {
      try {
        const r = await CapacitorWifi.getRssi();
        const value = (r as any).rssi;
        setRssi(value);
        setWeakSignal(typeof value === "number" && value < SIGNAL_THRESHOLD);
      } catch {}
    }
  };

  return (
    <DeviceStatusContext.Provider
      value={{
        wifiEnabled,
        wifiConnected,
        noNetwork,
        gpsOff,
        weakSignal,
        rssi,
        refresh,
      }}
    >
      {children}
    </DeviceStatusContext.Provider>
  );
};

export const useDeviceStatus = () => {
  const ctx = useContext(DeviceStatusContext);
  if (!ctx) throw new Error("useDeviceStatus must be inside provider");
  return ctx;
};
