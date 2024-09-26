import React from "react";

export default function HomePageHeader() {
  return (
    <div className="flex w-full bg-slate-700 justify-center">
      <div className="w-[70%]">
        <div className="flex justify-between items-center h-[80px]">
          <div className="bg-orange-300">
            <div>LOGO</div>
          </div>
          <div className="flex gap-5">
            <div className="p-4 text-white">
              <a href="#" className="p-4">
                Search
              </a>
              <a href="#" className="p-4">
                About us
              </a>
              <a href="#" className="p-4">
                How it works
              </a>
            </div>
            <div className="flex items-center w-[300px] ">
              <label
                htmlFor="search"
                className="mb-2 text-sm font-medium text-white sr-only"
              >
                Search
              </label>
              <div className="relative w-full">
                <input
                  id="search"
                  className="block w-full outline-none h-[60px] p-4 pe-10 text-sm text-white rounded-lg bg-slate-600 "
                  placeholder="Search"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pe-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className=" bg-red-600 text-white rounded-xl px-2">
                8 actions
              </div>
            </div>
            <div className="bg-blue-600 ">testar</div>
          </div>
        </div>
      </div>
    </div>
  );
}
