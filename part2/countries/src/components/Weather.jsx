import { useEffect, useState } from "react";
import getWeather from "../services/weather.js";

const Weather = ({ coordinates }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const coordinatesAsString = coordinates.join(",");
    getWeather(coordinatesAsString).then((response) => setWeather(response));
  }, [coordinates]);

  return (
    weather && (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <h2>Current weather in {weather.location.name}:</h2>
        <div
          style={{
            paddingInline: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <img
            src={weather.current.condition.icon}
            alt={weather.current.condition.text}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>
              <b>Temp</b>: {weather.current.temp_c} C
            </span>
            <span>
              <b>Feels like</b>: {weather.current.feelslike_c} C
            </span>
            <span>
              <b>Wind</b>: {weather.current.wind_kph} km/h
            </span>
          </div>
        </div>
      </div>
    )
  );
};

export default Weather;
