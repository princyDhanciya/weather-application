import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import Loader from "./components/Loader.jsx";
import WeatherCard from "./components/WeatherCard.jsx";
import "./App.css";

const API_KEY = "410c3916a63225eee1add00d3579107d"; // Replace with your OpenWeatherMap API key

export default function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWeather = async (query) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      if (data.cod === 200) setWeather(data);
      else alert("City not found!");
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
          );
          const data = await res.json();
          setWeather(data);
        } catch (err) {
          console.error(err);
        }
        setLoading(false);
      },
      () => fetchWeather("London")
    );
  }, []);

  return (
    <>
      <div id="background-wrap">
        <div className="x1">
          <div className="cloud"></div>
        </div>
        <div className="x2">
          <div className="cloud"></div>
        </div>
        <div className="x3">
          <div className="cloud"></div>
        </div>
        <div className="x4">
          <div className="cloud"></div>
        </div>
        <div className="x5">
          <div className="cloud"></div>
        </div>
      </div>
      <div className="app">
        <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', letterSpacing: '2px' }}>🌍 Weather App</h1>
        <SearchBar onSearch={fetchWeather} />
        {loading ? <Loader /> : weather && <WeatherCard weather={weather} />}
      </div>
    </>
  );
}
