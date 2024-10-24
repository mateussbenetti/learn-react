import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CarsHeader() {
  return (
    <div>
      <div className="">
        <div className="h-[45px] bg-gray-200 flex items-center justify-between p-6">
          <FontAwesomeIcon className="text-black text-xl" icon="bars" />
          <FontAwesomeIcon className="text-black text-xl" icon="search" />
        </div>
      </div>
    </div>
  );
}
