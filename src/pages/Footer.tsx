import { FaHouse, FaMap, FaBookOpen, FaChartSimple, FaCloudSunRain } from 'react-icons/fa6';
import { useDeviceStatus } from "../context/useDeviceStatusContext";
import { useHistory, useLocation } from "react-router-dom";

type FooterProps = {
  openPopover: (type: "maps" | "fish") => void;
};

export default function HomeFooter({ openPopover }: FooterProps) {

  const { noNetwork, gpsOff  } = useDeviceStatus();
  const isWeatherDisabled = noNetwork || gpsOff;
  const history = useHistory();
  const location = useLocation();

  const current = location.pathname.toLowerCase();

  return (
    <div className="footer">

      {/* HOME */}
      <FaHouse
        className="footer_icon"
        color={current === "/folder/home" ? "#6f6f6f" : "#007aff"}
        onClick={() => history.replace("/folder/home")}
      />

      {/* MAPS */}
      <FaMap
        className={`footer_icon ${noNetwork ? "footer_icon-disabled" : ""}`}
        color={current.startsWith("/map") ? "#6f6f6f" : "#007aff"}
        onClick={() => openPopover("maps")}
      />

      {/* FISH BOOK */}
      <FaBookOpen
        className="footer_icon"
        color={current.startsWith("/place") ? "#6f6f6f" : "#007aff"}
        onClick={() => openPopover("fish")}
      />

      {/* WEATHER CHART */}
      <FaChartSimple
        className="footer_icon"
        color={current === "/folder/weather" ? "#6f6f6f" : "#007aff"}
        onClick={() => history.replace("/folder/Weather")}
      />

      {/* WEATHER ICON */}
      <FaCloudSunRain
        className={`footer_icon ${isWeatherDisabled ? "footer_icon-disabled" : ""}`}
        color={current === "/folder/weather" ? "#6f6f6f" : "#007aff"}
        onClick={() => history.replace("/folder/Weather")}
      />
    </div>
  );
}
