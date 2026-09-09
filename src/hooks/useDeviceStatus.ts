import { useEffect, useState, useRef } from "react";
import { Network } from "@capacitor/network";
import { CapacitorWifi } from "@capgo/capacitor-wifi";
import { Geolocation } from "@capacitor/geolocation";
import { App } from "@capacitor/app";
import { Capacitor } from "@capacitor/core";
import type { PluginListenerHandle } from "@capacitor/core";
import { WifiStatus } from "../plugins/wifistatus";

export function useDeviceStatus() {

  const [noNetwork, setNoNetwork] = useState(false);
 // const [wifiOff, setWifiOff] = useState(false);
  const [gpsOff, setGpsOff] = useState(false);
  const [weakSignal, setWeakSignal] = useState(false);
  const [rssi, setRssi] = useState<number | null>(null);

  const [wifiEnabled, setWifiEnabled] = useState(true); 
  const [wifiConnected, setWifiConnected] = useState(true);

  const lastWeakSignalState = useRef(false);
  const SIGNAL_THRESHOLD = -75;
  let appListener: PluginListenerHandle | null = null;

  const checkGps = async () => {
    if (Capacitor.getPlatform() === "web") {
      setGpsOff(false);
      return;
    }
    try {
      await Geolocation.getCurrentPosition({ timeout: 3000 });
      setGpsOff(false);
    } catch {
      setGpsOff(true);
    }
  };

  const checkWifi = async () => {
    try {
      // Käytetään omaa pluginia kytkimen tilaan
      const { enabled } = await WifiStatus.isWifiEnabled();
      setWifiEnabled(enabled);

      // Käytetään Network-pluginia yhteyden tilaan
      const status = await Network.getStatus();
      setWifiConnected(status.connectionType === "wifi");
      setNoNetwork(!status.connected);
    } catch {
      setWifiEnabled(false);
    }
  };
  
  const checkRssi = async () => {
    if (Capacitor.getPlatform() === "web") {
      setRssi(null);
      return;
    }
  
    try {
      const { rssi: value } = await CapacitorWifi.getRssi();
      setRssi(value);
  
      const isWeak = value < SIGNAL_THRESHOLD;
      if (isWeak !== lastWeakSignalState.current) {
        setWeakSignal(isWeak);
        lastWeakSignalState.current = isWeak;
      }
    } catch (err) {
      console.warn("RSSI error:", err);
      setRssi(null);
    }
  };
  

  const checkNetwork = async () => {
    try {
      const status = await Network.getStatus();
      setNoNetwork(!status.connected);
    } catch (err) {
      console.warn("Network status error:", err);
    }
  };

  const refresh = async () => {
    await checkNetwork();
    await checkWifi();
    await checkGps();
    await checkRssi();
  };

  useEffect(() => {
    let interval: any = null;

    const setup = async () => {
      if (Capacitor.getPlatform() !== "web") {
        try {
          await Geolocation.requestPermissions();
        } catch (err) {
          console.warn("Permission error:", err);
        }
      }

      await refresh();

      Network.addListener("networkStatusChange", () => refresh());

      interval = setInterval(refresh, 2000);

      appListener = await App.addListener("appStateChange", (state) => {
        if (state.isActive) refresh();
      });
    };

    setup();

    return () => {
      if (interval) clearInterval(interval);
      if (appListener) appListener.remove();
    };
  }, []);

  return {
    noNetwork,
    wifiEnabled,    // TÄMÄ NIMI NetworkBanneriin
    wifiConnected,  // TÄMÄ NIMI NetworkBanneriin
    gpsOff,
    weakSignal,
    rssi,
    refresh
  };
}
