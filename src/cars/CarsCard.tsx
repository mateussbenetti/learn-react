import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CarsCard() {
  return (
    <div className="font-inter p-4">
      <div className="inline-block h-[347px] w-full max-w-screen-lg shadow-lg shadow-gray-500 rounded-md">
        <div className="flex h-[165px] bg-gray-300 rounded-t-lg">
          <img
            src="./assets/images/carro-anuncio.jpg"
            alt="foto ilustrativa do carro"
            className="h-full w-full rounded-t-lg"
          />
        </div>
        <div className="h-[182px]">
          <div className="flex font-inter justify-between text-center items-center p-2">
            <div className="text-blue-600 font-bold text-xl">€ 20 000</div>
            <div className="font-bold text-sm">1.5km away</div>
          </div>
          <div className="px-2">
            <h1 className="font-bold text-base">Ford Focus Active IV</h1>
            <p className="text-gray-400 text-sm">
              2020, 100000 km, Diesel, Manual, 159 hp
            </p>
          </div>
          <div className="flex">
            <button className="bg-blue-600 text-white w-full h-[40px] p-2 m-2 rounded-lg text-base">
              Contact
            </button>
          </div>
          <div className="flex items-center text-center p-2 font-bold text-sm gap-2">
            <div>Dealer Name</div>
            <div className="flex text-blue-600 items-center justify-center text-center text-sm gap-1">
              <FontAwesomeIcon icon={faStar} />
              <div>4.5</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
