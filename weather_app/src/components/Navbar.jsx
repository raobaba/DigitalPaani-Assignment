import React, { useState } from "react";
import { useWeather } from "../context/ContextProvider";
function Navbar() {
  const { getLocation, getWeatherByCity, loadingLocation } = useWeather();
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() !== "") {
      getWeatherByCity(city);
      setCity("");
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://github.com/raobaba"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/weather_log.png" className="h-8" alt="Flowbite Logo" />
          <span className="self-center hidden md:inline-block text-2xl font-semibold whitespace-nowrap dark:text-white">
            Weather
          </span>
        </a>
        <div className="flex md:order-2">
          <div className="relative">
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-3 pl-4 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter City Name..."
              value={city}
            onChange={handleInputChange}
            />
            <svg
              id="search-icon"
              className="absolute w-6 h-6 text-gray-400 top-3 right-3 cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              onClick={handleSearch} 
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter City Name..."
            />
          </div>
        </div>
        <button
          type="button"
          className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-1 mt-3 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2"
          onClick={getLocation}
          disabled={loadingLocation}
        >
          {loadingLocation ? (
            <svg className="animate-spin w-5 h-5 mr-3" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.004 8.004 0 014.709 4H2c1.727 3.713 5.002 6.612 9 7.145V17zm9-5.291A8.004 8.004 0 0120.291 16H23c-1.727-3.713-5.002-6.612-9-7.145v3.854z"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-8 h-8 me-1 mt-1 -ms-0.5 text-[#626890]"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="ethereum"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="#000000"
                d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
                c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
                C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
                c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
              ></path>
            </svg>
          )}
          <span className="hidden md:inline-block">
            {loadingLocation ? "Fetching Location..." : "Your Location Weather"}
          </span>
        </button>
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
