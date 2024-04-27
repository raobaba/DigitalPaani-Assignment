import React, { useState } from "react";

function Details() {
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  const handleRefreshClick = () => {
    setRotation(rotation + 360);
  };

  const zoomIn = () => {
    setScale(scale + 0.1);
  };

  const zoomOut = () => {
    if (scale > 0.2) {
      setScale(scale - 0.1);
    }
  };
  return (
    <div className="flex flex-wrap justify-center">
      <div className="relative flex flex-col items-center max-w-sm m-4 p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <button
          className="absolute top-0 right-0 m-2"
          onClick={handleRefreshClick}
        >
          <svg
            class="w-8 h-8 text-gray-800 dark:text-white transform rotate-0 transition-transform duration-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
            />
          </svg>
        </button>

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Patna
        </h5>
        <p className="text-gray-700 dark:text-gray-400 font-bold text-6xl">
          50 ° Cel
        </p>
        <p className="text-gray-700 dark:text-gray-400">Haze</p>
      </div>

      <div class="flex flex-col items-center max-w-sm m-4 p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="grid grid-cols-2 gap-2">
          <p class="font-semibold text-gray-800 dark:text-gray-200">
            Feels Like
          </p>
          <p class="text-right text-gray-600 dark:text-gray-300">39.61°C</p>
          <p class="font-semibold text-gray-800 dark:text-gray-200">Humidity</p>
          <p class="text-right text-gray-600 dark:text-gray-300">16%</p>
          <p class="font-semibold text-gray-800 dark:text-gray-200">
            Wind Speed
          </p>
          <p class="text-right text-gray-600 dark:text-gray-300">20.38 Km/h</p>
          <p class="font-semibold text-gray-800 dark:text-gray-200">
            Visibility
          </p>
          <p class="text-right text-gray-600 dark:text-gray-300">5.00 Km</p>
          <p class="font-semibold text-gray-800 dark:text-gray-200">
            Max Temp.
          </p>
          <p class="text-right text-gray-600 dark:text-gray-300">41.11°C</p>
          <p class="font-semibold text-gray-800 dark:text-gray-200">Min Temp</p>
          <p class="text-right text-gray-600 dark:text-gray-300">41.11°C</p>
        </div>
      </div>

      <div className="w-64 m-4 p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative">
        <div className="absolute top-0 right-0 m-2 z-10">
          <button onClick={zoomIn} className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">+</button>
          <button onClick={zoomOut} className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">-</button>
        </div>
        <div className="relative overflow-hidden">
          <img
            src="./temp_map.png"
            alt="temp-map"
            style={{ transform: `scale(${scale})` }}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Details;
