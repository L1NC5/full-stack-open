import axios from "axios";

const baseUrl = "http://api.weatherapi.com/v1/current.json";
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

const getWeather = (coordinates) => {
  const request = axios.get(baseUrl, {
    params: { key: apiKey, q: coordinates },
  });
  return request.then((response) => response.data);
};

export default getWeather;
