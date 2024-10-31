import {
  faBrush,
  faFile,
  faScrewdriverWrench,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CarsOurAdvantages() {
  return (
    <div className="font-inter p-4 gap-6">
      <div className="flex justify-between">
        <div className="font-bold text-lg">Our advantages</div>
        <div className="text-blue-600 font-bold text-sm">Show more</div>
      </div>
      <div className="text-gray-400 text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </div>
      <div className="p-4 mt-2 shadow-sm shadow-gray-500 rounded-md">
        <div className="flex bg-blue-600 h-[48px] w-[48px] rounded-md text-white text-center justify-center items-center">
          <FontAwesomeIcon className="h-[24px] w-[24px]" icon={faFile} />
        </div>
        <div className="font-bold text-lg pt-2">Guarantees</div>
        <div className="text-gray-400 text-sm pt-2">
          Written guarantee that the car is crash-proof, for the engine of the
          car, one year for any problem in the engine of the car, for the
          chassis, possibility of a written guarantee for the brain of the car,
          certificate of cleaning of the car with high standards.
        </div>
      </div>
      <div className="p-4 mt-2 shadow-sm shadow-gray-500 rounded-md ">
        <div className="flex bg-blue-600 h-[48px] w-[48px] rounded-md text-white text-center justify-center items-center">
          <FontAwesomeIcon
            className="h-[24px] w-[24px]"
            icon={faScrewdriverWrench}
          />
        </div>
        <div className="font-bold text-lg pt-2">
          Maintenance, Tires & Road Charges
        </div>
        <div className="text-gray-400 text-sm pt-2">
          Full maintenance and repair at authorized maintainers/repairers
          selected by Ayvens, tire change every 40,000 km and road tax.
        </div>
      </div>
      <div className="p-4 mt-2 shadow-sm shadow-gray-500 rounded-md">
        <div className="flex bg-blue-600 h-[48px] w-[48px] rounded-md text-white text-center justify-center items-center">
          <FontAwesomeIcon className="h-[24px] w-[24px]" icon={faBrush} />
        </div>
        <div className="font-bold text-lg pt-2">Cleaning</div>
        <div className="text-gray-400 text-sm pt-2">
          Upon receipt of your car, we provide you with a Certificate of
          Biological Cleaning which is in accordance with the specifications of
          the European Regulation and with a license from the General Chemistry
          of the state.
        </div>
      </div>
      <div className="p-4 mt-2 shadow-sm shadow-gray-500 rounded-md">
        <div className="flex bg-blue-600 h-[48px] w-[48px] rounded-md text-white text-center justify-center items-center">
          <FontAwesomeIcon className="h-[24px] w-[24px]" icon={faWrench} />
        </div>
        <div className="font-bold text-lg pt-2">Assessment</div>
        <div className="text-gray-400 text-sm pt-2">
          At Autovalue you can bring your car in for us to estimate its sale
          value objectively and based on our many years of experience in the
          used car industry.
        </div>
      </div>
      <button className="w-full p-4 shadow-sm shadow-gray-500 rounded-md">
        Show more
      </button>
    </div>
  );
}
