import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faCloudSun,
  faSun,
  faCloudRain,
  faBolt,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

export default function WeatherCard({ weather }) {
  const { name, sys, main, weather: details, wind } = weather;

  const getIcon = () => {
    const mainWeather = details[0].main.toLowerCase();
    if (mainWeather.includes("cloud")) return faCloud;
    if (mainWeather.includes("rain")) return faCloudRain;
    if (mainWeather.includes("sun") || mainWeather.includes("clear"))
      return faSun;
    if (mainWeather.includes("storm") || mainWeather.includes("thunder"))
      return faBolt;
    if (mainWeather.includes("snow")) return faSnowflake;
    return faCloudSun;
  };

  return (
    <div className="weather-card">
      <FontAwesomeIcon
        icon={getIcon()}
        size="4x"
        style={{
          color: "#424242",
          filter: "drop-shadow(0 2px 8px #888888)",
        }}
      />
      <h2>
        {name}, {sys.country}
      </h2>
      <p>{details[0].description}</p>
      <div className="temp-section">
        <h3>{Math.round(main.temp)}°C</h3>
        <p>Feels like {Math.round(main.feels_like)}°C</p>
      </div>
      <div className="weather-info">
        <div>💧 {main.humidity}%</div>
        <div>🌬 {wind.speed} m/s</div>
        <div>🌡 {main.pressure} hPa</div>
      </div>
    </div>
  );
}
