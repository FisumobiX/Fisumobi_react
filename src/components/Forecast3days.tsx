import React, { useEffect, useState } from "react";
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonList } from "@ionic/react";
import { FaArrowUp, FaTint } from "react-icons/fa";

// Kelloajat säätiedoille ovat 00, 03, 06, 09, 12, 15, 18, 21. 
// Kolmen päivän säätiedot haetaan siten että näytetään ensimmäisen päivän säätila ko. ajankohdasta eteepäin. Eli jos kello on 13.41 niin säätiedot ko. päivälle klo. 15.00 alkaen.
// Toinen päivä näytetään kelloajat 00, 03, 06, 09, 12, 15, 18, 21.
// Kolmas päivä näytetään kelloajat 00, 03, 06, 09, 12, 15 ja 18, koska dataa ei ole klo. 21
// Mutta jos kello on 21 tai enemmän niin ei näytetä ko. päivän säätä vaan aloitetaan seuraavasta päivästä.
// Silloin näytetään ensimmäisenä päivänä kelloaikojen 00, 03, 06, 09, 12, 15, 18 ja 21 kelloaikojen säätiedot 
// Toisena päivänä näytetään 00, 03, 06, 09, 12, 15 ja 18 kelloaikojen säätiedot
// Kolmantena päivänä näytetään 00, 06, 12 ja 18 kelloaikojen säätiedot

interface TimeSeriesEntry {
  time: string;
  data: any;
}

interface WeatherData {
  time: string;
  airTemperature: number;
  windSpeed: number;
  windDirection: number;
  symbolCode: string;
  precipitationAmount: number;
}

interface DayForecast {
  date: string;
  dayName: string;
  dateObj: Date;
  forecasts: WeatherData[];
}

const HOURS_DAY1_2 = [0, 3, 6, 9, 12, 15, 18, 21];
const HOURS_DAY3_LOCAL = [2, 8, 14, 20];
const HOURS_DAY3_DISPLAY: Record<number, number> = {
  2: 0,
  8: 6,
  14: 12,
  20: 18
};

const dayNames = [
  "Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko",
  "Torstai", "Perjantai", "Lauantai"
];

function toLocal(ts: string) {
  const d = new Date(ts);
  return {
    date: d.toLocaleDateString("fi-FI"),
    hour: d.getHours(),
    full: d
  };
}

function createForecast(ts: TimeSeriesEntry): WeatherData {
  return {
    time: ts.time,
    airTemperature: ts.data.instant.details.air_temperature,
    windSpeed: ts.data.instant.details.wind_speed,
    windDirection: ts.data.instant.details.wind_from_direction,
    symbolCode:
      ts.data.next_1_hours?.summary.symbol_code ||
      ts.data.next_6_hours?.summary.symbol_code ||
      "cloudy",
    precipitationAmount: ts.data.next_1_hours?.details.precipitation_amount || 0
  };
}

function getWindArrow(dir: number) {
  return <FaArrowUp style={{ transform: `rotate(${dir}deg)` }} />;
}

const Forecast3days: React.FC = () => {

  const [forecasts, setForecasts] = useState<DayForecast[]>([]);

  useEffect(() => {

    const cached = localStorage.getItem("weatherDataCache");
    if (!cached) return;

    const data = JSON.parse(cached);
    const ts: TimeSeriesEntry[] = data?.properties?.timeseries || [];

    const local = ts.map(entry => {
      const l = toLocal(entry.time);
      return { ...entry, localDate: l.date, localHour: l.hour };
    });

    const now = new Date();
    const startDate = new Date();

    if (now.getHours() >= 21) startDate.setDate(startDate.getDate() + 1);

    const wantedDays = [];
    for (let i = 0; i < 3; i++) {
      const d = new Date(startDate);
      d.setDate(d.getDate() + i);
    
      wantedDays.push({
        dateStr: d.toLocaleDateString("fi-FI"),
        dateObj: d
      });
    }    

    const result: DayForecast[] = wantedDays.map((wd, index) => {

      let targetHours: number[] = [];

      const currentHour = now.getHours();
      
      // Jos kello on 21 tai yli → aloitetaan seuraavasta päivästä
      if (currentHour >= 21) {
        if (index === 0) {
          targetHours = HOURS_DAY1_2; // 00–21
        } else if (index === 1) {
          targetHours = HOURS_DAY1_2.filter(h => h !== 21); // 00–18
        } else if (index === 2) {
          targetHours = HOURS_DAY3_LOCAL; // vain nämä
        }
      }
      
      // Jos kello on alle 21 → normaali logiikka
      else {
        if (index === 2) {
          targetHours = HOURS_DAY3_LOCAL; // 2,8,14,20 → mapataan 0,6,12,18
        } else {
          targetHours = HOURS_DAY1_2; // 00–21
        }
      
        if (index === 0) {
          targetHours = targetHours.filter(h => h > currentHour);
        }
      }
        
      const items = local
        .filter(x => x.localDate === wd.dateStr && targetHours.includes(x.localHour))
        .map(x => {
          const f = createForecast(x);
    
          if (index === 2) {
            const mappedHour = HOURS_DAY3_DISPLAY[x.localHour];
            if (mappedHour !== undefined) {
              const dt = new Date(x.time);
              dt.setHours(mappedHour);
              f.time = dt.toISOString();
            }
          }
    
          return f;
        });

        return {
          date: wd.dateStr,
          dayName: dayNames[wd.dateObj.getDay()],
          dateObj: wd.dateObj,
          forecasts: items
        };
               
    });
    
    setForecasts(result);
  }, []);

  // 🔥 Tässä on alkuperäinen HTML-rakenne — ei muutoksia
  return (
    <>
      {forecasts.length === 0 && <p>Ei ennustetta saatavilla.</p>}

      {forecasts.length > 0 && (
        <IonAccordionGroup>
          <div className='header'>3 päivän ennuste tunneille</div>

          {forecasts.map(day => (
            <IonAccordion key={day.date} value={day.date} className='customAccordionHeaderWeather'>
              <IonItem slot="header">
                <IonLabel>
                  {day.dayName}{" "}
                  {day.dateObj.toLocaleDateString("fi-FI", {
                    day: "numeric",
                    month: "numeric"
                  })}
                </IonLabel>
              </IonItem>

              <div slot="content" className='contentWeather'>
                <IonList className='customIonListWeather'>
                {day.forecasts.map((f, index) => (
                    <IonItem key={f.time} className='customIonItemWeather' lines={index === day.forecasts.length - 1 ? "none" : "full"}>
                      <IonLabel>
                        <table style={{ width: "100%" }}>
                          <tbody>
                            <tr>
                              <td style={{ textAlign: "left" }}>
                                <strong>
                                  {new Date(f.time).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit"
                                  })}
                                </strong>
                                :
                              </td>

                              <td style={{ textAlign: "right", fontSize: "1.1rem" }}>
                                {Math.round(f.airTemperature)} °
                              </td>

                              <td style={{ width: "25%", textAlign: "center", fontSize: "1rem" }}>
                                <img
                                  src={`${import.meta.env.BASE_URL}images/metno/${f.symbolCode}.svg`}
                                  style={{ width: "40px", height: "40px" }}
                                />
                              </td>

                              <td style={{ width: "20%" }}>
                                {Math.round(f.windSpeed)} m/s {getWindArrow(f.windDirection)}
                              </td>

                              <td style={{ textAlign: "right", fontSize: "1.1rem" }}>
                                <FaTint
                                  style={{
                                    fontSize: "1.4rem",
                                    color: "#007aff",
                                    paddingTop: "8px"
                                  }}
                                />{" "}
                                {Math.round(f.precipitationAmount)} mm
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </IonLabel>
                    </IonItem>
                  ))}
                </IonList>
              </div>
            </IonAccordion>
          ))}
        </IonAccordionGroup>
      )}
    </>
  );
};

export default Forecast3days;
