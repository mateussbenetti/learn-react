import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomePageHeader() {
  return (
    <div>
      <div className="lg:hidden">
        <div className="h-[60px] bg-slate-700 flex items-center justify-between p-6">
          <img
            className="w-[45px]"
            src="./assets/images/logo-nextfan.png"
            alt=""
          />
          <div className="flex gap-6 ">
            <FontAwesomeIcon className="text-white text-xl" icon="search" />
            <FontAwesomeIcon className="text-white text-xl" icon="bars" />
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="flex w-full bg-slate-700 justify-center">
          <div className="w-[70%]">
            <div className="flex justify-between items-center h-[80px]">
              <img
                className="flex-none w-[50px]"
                src="./assets/images/logo-nextfan.png"
                alt=""
              />

              <div className="flex gap-5 items-center">
                <div className="p-4 text-white flex gap-5">
                  <div>
                    <a href="#" className="">
                      Search
                    </a>
                  </div>

                  <div>
                    <a href="#" className="">
                      About us
                    </a>
                  </div>

                  <div>
                    <a href="#" className="">
                      How it works
                    </a>
                  </div>
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
                  <div className=" bg-red-600 text-white rounded-xl px-2 text-nowrap">
                    8 actions
                  </div>
                </div>
                <div className="flex-none bg-gradient-to-r from-cyan-600 to-blue-800 rounded-lg w-[60px] h-[60px] "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
