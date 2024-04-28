import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { API_KEY, API_URL } from "../service/API";

const WeatherContext = createContext();

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getWeatherByCity = async (city) => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}`);
      
      const weatherData = response.data;
      console.log("city weather",weatherData)
      setWeatherData(weatherData);
      // const { lon, lat } = weatherData.coord || {}; 
      // console.log(lon,lat)
      // if (!lon || !lat) {
      //   throw new Error("Invalid response format");
      // }
      // const forecastResponse = await axios.get(
      //   `${API_URL}/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${API_KEY}` 
      // );
      // const forecastData = forecastResponse.data.daily;
      
      // setForecastData(forecastData);
       localStorage.setItem(
        "weather",
        JSON.stringify({ weatherData })
       );
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const syncData = async (city) => {
    try {
      const response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}`);
      
      const weatherData = response.data;
      const { lon, lat } = weatherData.coord || {}; 
      if (!lon || !lat) {
        throw new Error("Invalid response format");
      }
      const forecastResponse = await axios.get(
        `${API_URL}/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${API_KEY}` // Fixed forecast API URL
      );
      const forecastData = forecastResponse.data.daily;
      setWeatherData(weatherData);
      setForecastData(forecastData);
      localStorage.setItem(
        "weather",
        JSON.stringify({ weatherData, forecastData })
      );
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        forecastData,
        loading,
        error,
        getWeatherByCity,
        syncData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};