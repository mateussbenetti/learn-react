import { faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomePageSearch() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-6 items-center">
        <p className="text-lg">{"< "}Back</p>
        <h1 className="font-bold text-4xl">Search results</h1>
      </div>
      <div className="flex bg-slate-600 h-[30px] w-[60px] rounded-lg items-center justify-between p-1 stext-center gap-1">
        <p>Sort</p>
        <FontAwesomeIcon icon={faArrowDownWideShort} />
      </div>
    </div>
  );
}
