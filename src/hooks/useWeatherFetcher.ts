import { useEffect, useCallback } from "react";
import { CapacitorHttp } from "@capacitor/core";

const cacheKey = "weatherDataCache";
const expiresKey = "weatherDataExpires";
const FIFTEEN_MINUTES = 15 * 60 * 1000;

export const useWeatherFetcher = () => {


  const fetchWeather = useCallback(async () => {


    try {
      // 1) Odotetaan sijainti
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    
      // 🔒 VALID TARKISTUS
      if (
        !position ||
        !position.coords ||
        typeof position.coords.latitude !== "number" ||
        typeof position.coords.longitude !== "number"
      ) {
        throw new Error("Invalid location data");
      }
    
      // 🔐 TALLENNA VAIN VALID SIJAINTI
      localStorage.setItem("cachedLocation", JSON.stringify(position));
    
      const latitude = position.coords.latitude.toFixed(4);
      const longitude = position.coords.longitude.toFixed(4);

      // 2) Tarkista välimuisti
      const now = new Date();
      const expiresStr = localStorage.getItem(expiresKey);
      const expires = expiresStr ? new Date(expiresStr) : null;

      if (expires && now < expires) {
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          window.dispatchEvent(new Event("weatherDataReady"));
          return;
        }
      }

      // 3) Hae API:sta
      const response = await CapacitorHttp.get({
        url: `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${latitude}&lon=${longitude}`,
        headers: {
          "User-Agent": "Fisumobi/1.0 (pp2012@live.fi)",
        },
      });

      if (response.status !== 200) {
        throw new Error("API returned non-200 status");
      }

      const weather = response.data;

      // 4) Tallenna välimuistiin
      localStorage.setItem(cacheKey, JSON.stringify(weather));

      const expiresHeader = response.headers?.expires;
      localStorage.setItem(
        expiresKey,
        expiresHeader
          ? new Date(expiresHeader).toISOString()
          : new Date(Date.now() + FIFTEEN_MINUTES).toISOString()
      );

      window.dispatchEvent(new Event("weatherDataReady"));
    } catch (err: any) {
      console.error("Weather fetch failed:", err);

    } 

  }, []);


  useEffect(() => {
    fetchWeather();
  }, []); // ← EI fetchWeather riippuvuudeksi, muuten Strict Mode tuplaa sen

   // Palautetaan fetchWeather-funktio, jotta se voidaan käyttää muissa komponenteissa
   return { fetchWeather };

};
