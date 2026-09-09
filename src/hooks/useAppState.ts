import { App } from "@capacitor/app";
import { useEffect } from "react";
import { useWeatherFetcher } from "../hooks/useWeatherFetcher";
import { useDeviceStatus } from "../context/useDeviceStatusContext";
import type { PluginListenerHandle } from "@capacitor/core";


export const useAppState = () => {
  const { refresh } = useDeviceStatus();
  const {fetchWeather}  = useWeatherFetcher();

  useEffect(() => {
    let listenerHandle: PluginListenerHandle | null = null;

    const setup = async () => {
      listenerHandle = await App.addListener("appStateChange", ({ isActive }) => {
        if (isActive) {
          refresh();
          fetchWeather();
        }
      });
    };

    setup();

    return () => {
      // cleanup pitää olla async
      const cleanup = async () => {
        if (listenerHandle) {
          await listenerHandle.remove();
        }
      };
      cleanup();
    };
  }, []);
};
