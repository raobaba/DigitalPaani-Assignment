import React from "react";

function Navbar() {
  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-900 shadow-md ">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://github.com/raobaba"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/weather_log.png" class="h-8" alt="Flowbite Logo" />
          <span class="self-center hidden md:inline-block text-2xl font-semibold whitespace-nowrap dark:text-white">
            Weather
          </span>
        </a>
        <div class="flex md:order-2">
          <div class="">
            <input
              type="text"
              id="search-navbar"
              class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter City Name..."
            />
          </div>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div class="relative mt-3 md:hidden">
            <input
              type="text"
              id="search-navbar"
              class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter City Name..."
            />
          </div>
        </div>
        <button
          type="button"
          class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-1 mt-3 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2"
        >
          <svg
            class="w-8 h-8 me-1 mt-1 -ms-0.5 text-[#626890]"
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
          <span class="hidden md:inline-block">Your location Weather</span>
        </button>
        <label class="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />
          <div class="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
