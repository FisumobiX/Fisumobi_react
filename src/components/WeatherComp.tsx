import SunCalc from 'suncalc';
import { Capacitor, CapacitorHttp } from '@capacitor/core';
import { useEffect, useState } from 'react';
import { IonContent } from '@ionic/react';
import { FaArrowUp } from 'react-icons/fa';
import { BsFillSunsetFill, BsSunriseFill, BsSunFill } from 'react-icons/bs';
import Forecast3days from './Forecast3days';
import "./themeComp/weather.css";
import { useCityDisplay } from '../hooks/useCityDisplay';
import { Suspense } from 'react';

interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  condition: string;
  cloud_area_fraction: number;
  precipitation_amount: number;
  air_pressure_at_sea_level: number;
  finCondition: string;
  windIcon: React.JSX.Element;
}

interface ForecastItem {
  time: string;
  data: {
    instant: {
      details: {
        air_temperature: number;
        wind_speed: number;
        wind_from_direction: number;
        cloud_area_fraction: number;
        relative_humidity: number;
        air_pressure_at_sea_level: number;
      };
    };
    next_6_hours?: {
      summary: { symbol_code: string };
      details?: { precipitation_amount: number };
    };
    next_1_hours?: {
      summary?: { symbol_code: string };
      details?: { precipitation_amount: number };
    };
  };
}

type Suntimes = {
  sunrise: Date;
  solarNoon: Date;
  sunset: Date;
};

// --- WeatherComp ---
const WeatherComp: React.FC = () => {

  const [showOverlay, setShowOverlay] = useState(true);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error] = useState<string | null>(null);
  const [suntimes, setSuntimes] = useState<Suntimes | null>(null);
  const [lastData, setLastData] = useState<string | null>(null);
  const [cityNameFromApi, setCityNameFromApi] = useState<string>('Paikka');

  const city = useCityDisplay(cityNameFromApi);

  useEffect(() => {
    const timer = setTimeout(() => setShowOverlay(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {

    let cancelled = false;

    const run = async () => {

      const raw = localStorage.getItem("cachedLocation");
      if (!raw) {
        alert("Ei cachedLocation-arvoa");
        return;
      }

      let pos;

      try {
        pos = JSON.parse(raw);
      } catch (e) {
        alert("Virhe JSON-parsessa: " + e);
        return;
      }

      const nameFromApi = await getReverseGeocode(
        pos.coords.latitude,
        pos.coords.longitude
      );

      if (!cancelled) {
        setCityNameFromApi(nameFromApi);
      }

      const times = SunCalc.getTimes(
        new Date(),
        pos.coords.latitude,
        pos.coords.longitude
      );

      setSuntimes({
        sunrise: times.sunrise,
        solarNoon: times.solarNoon,
        sunset: times.sunset
      });
    };

    run();

    return () => { cancelled = true };

  }, []);


  const loadWeatherFromCache = () => {

    setLoading(true);

    const cached = localStorage.getItem('weatherDataCache');

    if (!cached || cached === 'null' || cached === lastData) {
      setLoading(false);
      return;
    }

    try {

      const data = JSON.parse(cached);
      setLastData(cached);

      const timeseries = data?.properties?.timeseries;

      if (!Array.isArray(timeseries)) {
        console.warn('Timeseries data puuttuu');
        setLoading(false);
        return;
      }

      const forecastData = timeseries
        .filter((item: any) => item.time.includes('T12:00:00Z'))
        .slice(0, 5);

      const current = timeseries[0];
      const next1h = current?.data?.next_1_hours;

      const symbolCode =
        next1h?.summary?.symbol_code || "clearsky_day";

      const precipitation =
        next1h?.details?.precipitation_amount ?? 0;

      setWeatherData({
        temperature: current.data.instant.details.air_temperature,
        humidity: current.data.instant.details.relative_humidity,
        windSpeed: current.data.instant.details.wind_speed,
        windIcon: getWindDirectionIcon(
          Number(current.data.instant.details.wind_from_direction ?? 0)
        ),
        finCondition: getWeatherSymbol(symbolCode),
        condition: symbolCode,
        cloud_area_fraction: current.data.instant.details.cloud_area_fraction,
        precipitation_amount: precipitation,
        air_pressure_at_sea_level:
          current.data.instant.details.air_pressure_at_sea_level
      });

      setForecast(forecastData);

    } catch (e) {

      console.error('Virhe parsittaessa säätietoja:', e);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {

    let interval: any;
  
    const startAutoRefresh = async () => {
  
      const raw = localStorage.getItem("cachedLocation");
      if (!raw) return;
  
      const pos = JSON.parse(raw);
  
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
  
      await fetchWeather(lat, lon);
      loadWeatherFromCache();
  
      interval = setInterval(async () => {
  
        await fetchWeather(lat, lon);
        loadWeatherFromCache();
  
      }, 600000); // 10 min
  
    };
  
    startAutoRefresh();
  
    return () => clearInterval(interval);
  
  }, []);


  return (
  <>
  <div className="weather-page">
    {showOverlay && (
      <div className="page-overlay"></div>
    )}
    {loading && <p>Ladataan...</p>}
    {error && <p className="error">{error}</p>}
    <IonContent fullscreen={true} className='custom-IonContent ion-padding'>
      {weatherData && (
        <table className="weather-table">
          <thead>
            <tr>
              <th colSpan={3}  >              
                <div style={{ paddingTop: '.5rem', paddingLeft: '0.4em', width: '100%', display: 'inline-flex'}}>
                  <div className="city" style={{paddingTop: '4px', width: '30%',  textAlign: 'left'}}>{city}</div>
                  <div style={{width: '5%'}}><BsSunriseFill style={{color: '#EF4444', fontSize:'1.5em'}}/></div>&nbsp;<div style={{width: '15%', textAlign: 'left', paddingLeft: '9px', paddingTop: '8px', fontSize:'.7em'}}>{suntimes?.sunrise.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}</div>
                  <div style={{width: '5%'}}><BsSunFill style={{color: '#FBBF24', fontSize:'1.5em'}}/></div>&nbsp;<div style={{width: '15%',textAlign: 'left', paddingLeft: '9px', paddingTop: '8px',fontSize:'.7em'}}>{suntimes?.solarNoon.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}</div>
                  <div style={{width: '5%'}}><BsFillSunsetFill style={{color: '#EF4444', fontSize:'1.5em'}}/></div>&nbsp;<div style={{width: '15%',textAlign: 'left', paddingLeft: '9px', paddingTop: '8px',fontSize:'.7em'}}>{suntimes?.sunset.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td style={{fontSize: "1.5em", paddingBottom: '15px', paddingLeft: '0.5em'}}>{weatherData.finCondition}</td>
              <td style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingBottom: '1.5em' }}>
                <img
                  src={`${import.meta.env.BASE_URL}images/metno/${weatherData.condition}.svg`}
                  alt={weatherData.condition}
                  style={{ width: "60px", height: "60px" }}
                />
                <p style={{
                  fontWeight: "bold",
                  fontSize: '2rem',
                  margin: 0,
                  lineHeight: '1'
                }}>
                  {Math.round(weatherData.temperature)}°
                </p>
              </td>           
            </tr>

            <tr style={{ verticalAlign: 'text-top'}}>
              <td style={{paddingLeft: '0.5em'}}>Tuulennopeus</td>
              <td>
              <p style={{ margin: '0.2rem 0', display: 'flex', alignItems: 'center', gap: '0.3rem', width: '100%'}}>
                {Math.round(weatherData.windSpeed)} m/s    {weatherData.windIcon}
                </p>
              </td>
            </tr>

            <tr>
              <td style={{paddingLeft: '0.5em'}}>Pilvisyys</td>
              <td>{Math.round(weatherData.cloud_area_fraction)}%</td>
            </tr>

            <tr>
              <td style={{paddingLeft: '0.5em'}}>Sademäärä</td>
              <td>{weatherData.precipitation_amount} mm</td>
            </tr>

            <tr>
              <td style={{paddingLeft: '0.5em'}}>Ilmankosteus</td>
              <td>{Math.round(weatherData.humidity)}%</td>
            </tr>

            <tr>
              <td style={{paddingLeft: '0.5em', paddingBottom: '20px'}}>Ilmanpaine</td>
              <td style={{paddingBottom: '20px'}}>{Math.round(weatherData.air_pressure_at_sea_level)} hPa</td>
            </tr>

            {forecast.length > 0 && (
              <>
                <tr>
                  <td colSpan={3} className="header" style={{ paddingTop: '10px' }}>
                    5-Päivän ennuste
                  </td>
                </tr>

                <tr>
                  <td colSpan={3} style={{ paddingTop: '10px' }}>
                    <table
                      className="forecast-subtable"
                        style={{ width: '100%', borderCollapse: 'collapse' }}
                      >
                      <tbody>
                        <tr>
                          {forecast.map((day, index) => {
                            const icon = day.data.next_6_hours?.summary?.symbol_code;                    
                            return (
                              <td
                                key={index}
                                style={{
                                  textAlign: 'center',
                                  padding: '0.1rem',
                                }}                            
                              >
                                <div>
                                  <p style={{ margin: 0 }}>
                                    {new Date(day.time).toLocaleDateString("fi-FI", {
                                      weekday: "short",
                                      month: "numeric",
                                      day: "numeric",
                                    })}
                                  </p> 
                                  <p style={{ margin: '0.2rem' }}>
                                    {Math.round(day.data.instant.details.air_temperature)}°C
                                  </p>
                                  <p style={{ alignSelf: 'stretch', height: '2em', marginBottom: '0' }}>
                                    {getWeatherSymbol(icon ?? '') || "N/A"}
                                  </p>
                                  {icon && (
                                    <img
                                      src={`${import.meta.env.BASE_URL}images/metno/${icon}.svg`}
                                      alt={icon}
                                      style={{ width: "40px", height: "40px", marginBottom: '-10px' }}
                                    />
                                  )}
                                  <span style={{ display: 'flex', justifyContent: 'center' }}>
                                    <p style={{ display: 'flex', alignItems: 'center', gap: '0.1rem' }}>
                                    {(Math.round(day.data.instant.details.wind_speed))} m/s{" "}
                                    {getWindDirectionIcon( Number(day.data.instant.details.wind_from_direction ?? 0))}
                                  </p>
                                  </span>
                                </div>
                              </td>
                            );
                          })}
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                </>
              )}
          </tbody>
        </table>
        )}
        <Suspense fallback={<div>Ladataan…</div>}>
          <Forecast3days />
        </Suspense>
      </IonContent>
      </div>
  </>
  );
}

async function fetchWeather(lat: number, lon: number) {

  const url = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`;

  const res = await fetch(url);

  const data = await res.json();

  localStorage.setItem("weatherDataCache", JSON.stringify(data));
}

// --- Reverse geocode ---
const getReverseGeocode = async (lat: number, lon: number): Promise<string> => {

  if (Capacitor.isNativePlatform()) {
    try {
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;

      const response = await CapacitorHttp.get({
        url,
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'CapacitorApp Fisumobi/1.0'
        }
      });

      const address = response.data.address;

      return address?.city || address?.town || address?.village || 'Tuntematon';

    } catch (err) {
      console.error('Native reverse geocode epäonnistui:', err);
      return 'Tuntematon';
    }

  } else {

    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
      const res = await fetch(url);
      await res.json();
      return 'Tuntematon';

    } catch (err) {
      console.error('Web reverse geocode epäonnistui:', err);
      return 'Tuntematon';
    }
  }
};

function getWindDirectionIcon(windDirection: number): React.JSX.Element {

  const rotation = Math.floor((windDirection + 22.5) / 45) * 45;

  return (
    <FaArrowUp
      style={{
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 0.3s ease',
        fontSize: '0.7rem'
      }}
    />
  );
}

function getWeatherSymbol(finCondition: string): string {

  const symbol = [
      ['clearsky_day','01d','Selkeää'],
      ['clearsky_night','01n','Selkeää'],
      ['clearsky_polartwilight',"01m",'Selkeää'],
      ['fair_day', "02d",'Poutaa'],
      ['fair_night',"02n",'Poutainen yö'],
      ['fair_polartwilight',"02m",'Poutainen yö'],
      ['partlycloudy_day',"03d", 'Puolipilvistä'],
      ['partlycloudy_night', "03n", 'Puolipilvistä'],
      ['partlycloudy_polartwilight',"03m",'Puolipilvistä'],
      ['cloudy',"04",'Pilvistä'],
      ['rainshowers_day',"05d",'Sadekuuroja'],
      ['rainshowers_night',"05n",'Sadekuuroja'],
      ['rainshowers_polartwilight',"05m",'Sadekuuroja'],
      ['rainshowersandthunder_day', "06d",'Sadekuuroja ja ukkosta'],
      ['rainshowersandthunder_night', "06n",'Sadekuuroja ja ukkosta'],
      ['rainshowersandthunder_polartwilight',"06m",'Sadekuuroja ja ukkosta'],
      ['sleetshowers_day',"07d",'Räntäkuuroja'],
      ['sleetshowers_nigh]t',"07n",'Räntäkuuroja'],
      ['snowshowers_polartwilight',"07m",'Räntäkuuroja'],
      ['snowshowers_day',"08d",'Lumikuuroja'],
      ['snowshowers_night',"08n",'Lumikuuroja'],
      ['snowshowers_polartwilight',"08m", 'Lumikuuroja' ],
      ['rain', "09", 'Sadetta'],
      ['heavyrain', "10", 'Kovaa sadetta'],
      ['heavyrainandthunder', "11", 'Kovaa sadetta ja ukkosta'],
      ['sleet', "12", 'Räntäsadetta'],
      ['snow', "13", 'Lumisadetta'],
      ['snowandthunder',"14", 'Lumisadetta ja ukkosta'],
      ['fog', "15", 'Sumua'],
      ['sleetshowersandthunder_day',"20d", 'Räntäsadekuuroja ja ukkosta'],
      ['sleetshowersandthunder_night',"20n",'Räntäsadekuuroja ja ukkosta'],
      ['sleetshowersandthunder_polartwilight',"20m",'Räntäsadekuuroja ja ukkosta'],
      ['snowshowersandthunder_day',"21d", 'Lumikuuroja ja ukkosta'],
      ['snowshowersandthunder_night',"21n",'Lumikuuroja ja ukkosta'],
      ['snowshowersandthunder_polartwilight',"21m",'Lumikuuroja ja ukkosta'],
      ['rainandthunder',"22",'Sadetta ja ukkosta'],
      ['sleetandthunder',"23",'Räntää ja ukkosta'],
      ['lightrainshowersandthunder_night', "24n", 'Heikkoa vesisadetta ja ukkosta'],
      ['lightrainshowersandthunder_day',"24d",'Heikkoa vesisadetta ja ukkosta'],
      ['lightrainshowersandthunder_polartwilight',"24m",'Heikkoa vesisadetta ja ukkosta'],
      ['heavyrainshowersandthunder_day', "25d", 'Voimakasta vesisadetta ja ukkosta'],
      ['heavyrainshowersandthunder_night', "25n",'Voimakasta vesisadetta ja ukkosta'],
      ['heavyrainshowersandthunder_polartwilight', "25m",'Voimakasta vesisadetta ja ukkosta'],
      ['lightssleetshowersandthunder_day',"26g",'Heikkoa räntäsadetta ja ukkosta'],
      ['lightssleetshowersandthunder_night',"26n",'Heikkoa räntäsadetta ja ukkosta'],
      ['lightssleetshowersandthunder_polartwilight',"26m",'Heikkoa räntäsadetta ja ukkosta'],
      ['heavysleetshowersandthunder_day',"27d",'Rankkoja räntäkuuroja ja ukkosta'],
      ['heavysleetshowersandthunder_night',"27n",'Rankkoja räntäkuuroja ja ukkosta'],
      ['heavysleetshowersandthunder_polartwilight',"27m",''],
      ['lightssnowshowersandthunder_day',"28d",''],
      ['lightssnowshowersandthunder_night',"28n",''],
      ['lightssnowshowersandthunder_polartwilight',"28m",''],
      ['heavysnowshowersandthunder_day',"29d",'Rankkoja räntäkuuroja ja ukkosta'],
      ['heavysnowshowersandthunder_night',"29n",'Rankkoja räntäkuuroja ja ukkosta'],
      ['heavysnowshowersandthunder_polartwilight',"29m",'Rankkoja räntäkuuroja ja ukkosta'],
      ['lightrainandthunder',"30",'Kevyttä sadetta ja ukkosta'],
      ['lightsleetandthunder',"31",'Kevyttä sadetta ja ukkosta'],
      ['heavysleetandthunder',"32",'Rankkaa räntäsadetta ja ukkosta'],
      ['lightsnowandthunder',"33",'Kevyttä lumisadetta ja ukkosta'],
      ['heavysnowandthunder',"34",'Kovaa lumisadetta ja ukkosta'],
      ['lightrainshowers_day',"40d",'Heikkoja sadekuuroja'],
      ['lightrainshowers_night',"40n",'Heikkoja sadekuuroja'],
      ['lightrainshowers_polartwilight',"40m",'Heikkoja sadekuuroja'],
      ['heavyrainshowers_day',"41d",'Rankkoja sadekuuroja'],
      ['heavyrainshowers_night',"41n",'Rankkoja sadekuuroja'],
      ['heavyrainshowers_polartwilight',"41m",'Rankkoja sadekuuroja'],
      ['lightsleetshowers_day',"42d",'Keveitä räntäkuuroja'],
      ['lightsleetshowers_night',"42n",'Keveitä räntäkuuroja'],
      ['lightsleetshowers_polartwilight',"42m",'Keveitä räntäkuuroja'],
      ['heavysleetshowers_day',"43d",'Rankkoja räntäkuuroja'],
      ['heavysleetshowers_night',"43n",'Rankkoja räntäkuuroja'],
      ['heavysleetshowers_polartwilight',"43m",'Rankkoja räntäkuuroja'],
      ['lightsnowshowers_day',"44d",'Keveitä lumikuuroja'],
      ['lightsnowshowers_night',"44n",'Keveitä lumikuuroja'],
      ['lightsnowshowers_polartwilight',"44m",'Keveitä lumikuuroja'],
      ['heavysnowshowers_day',"45d",'Rankkoja lumikuuroja'],
      ['heavysnowshowers_night',"45n",'Rankkoja lumikuuroja'],
      ['heavysnowshowers_polartwilight',"45m",'Rankkoja lumikuuroja'],
      ['lightrain',"46",'Heikkoa vesisadetta'],
      ['lightsleet',"47",'Heikkoa räntäsadetta'],
      ['heavysleet',"48",'Voimakasta räntäsadetta'],
      ['lightsnow',"49",'Heikkoa lumisadetta'],
      ['heavysnow',"50",'Runsasta lumisadetta']  
    ];

    symbol.forEach((x) => {
      if(finCondition == x[0]){
        finCondition = `${x[2]}`     
      } 
    });
    return finCondition ;

  // const match = symbol.find(x => x[0] === finCondition);

  // return match ? match[1] : finCondition;
}

export default WeatherComp;