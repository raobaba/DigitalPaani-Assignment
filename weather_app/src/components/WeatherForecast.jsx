import React from "react";

function WeatherForecast() {
  const forecasts = [
    {
      date: "27/04/2024",
      day: "Saturday",
      highTemp: "41",
      lowTemp: "36",
      description: "Clouds, day",
    },
    {
      date: "28/04/2024",
      day: "Sunday",
      highTemp: "39",
      lowTemp: "34",
      description: "Sunny, clear",
    },
    {
      date: "29/04/2024",
      day: "Monday",
      highTemp: "37",
      lowTemp: "32",
      description: "Partly cloudy",
    },
    {
      date: "30/04/2024",
      day: "Tuesday",
      highTemp: "40",
      lowTemp: "35",
      description: "Scattered sho",
    },
    {
      date: "01/05/2024",
      day: "Wednesday",
      highTemp: "38",
      lowTemp: "33",
      description: "Thunderstorms",
    },
    {
      date: "02/05/2024",
      day: "Thursday",
      highTemp: "36",
      lowTemp: "31",
      description: "Heavy rain",
    },
    {
      date: "03/05/2024",
      day: "Friday",
      highTemp: "34",
      lowTemp: "29",
      description: "Foggy morning",
    },
    {
      date: "04/05/2024",
      day: "Saturday",
      highTemp: "42",
      lowTemp: "37",
      description: "Partly cloudy",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {forecasts.map((forecast, index) => (
        <div
          key={index}
          className="max-w-36 flex-shrink-0 w-4/12 sm:w-1/2 p-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transition-all duration-500 ease-in-out transform hover:scale-105"
        >
          <div className="text-center mb-2">
            <span className="text-lg font-semibold">{forecast.date}</span>
            <br />
            <span className="text-sm font-medium">{forecast.day}</span>
          </div>
          <div className="flex items-center justify-center mb-2">
            <div className="ml-2 flex">
              <svg
                class="w-6 h-6 mt-2 mr-5 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z"
                  clip-rule="evenodd"
                />
              </svg>

              <span className="text-4xl font-bold animate-pulse">
                {forecast.lowTemp}&deg;C
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center mb-2">
            <div className="ml-2 flex">
              <svg
                class="w-6 h-6 mt-2 mr-5 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z"
                  clip-rule="evenodd"
                />
              </svg>

              <span className="text-4xl font-bold animate-pulse">
                {forecast.highTemp}&deg;C
              </span>
            </div>
          </div>
          <div className="text-center mb-4">
            <span className="text-sm font-medium">{forecast.description}</span>
          </div>
          <div className="text-center">
            <a
              href="http://localhost:8000"
              className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors duration-300 ease-in-out"
            >
              View Details
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WeatherForecast;
