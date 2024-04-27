import React from "react";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import WeatherForecast from "./components/WeatherForecast";

function App() {
  return (
    <>
      <Navbar />
      <Details />
      <WeatherForecast />
    </>
  );
}

export default App;
