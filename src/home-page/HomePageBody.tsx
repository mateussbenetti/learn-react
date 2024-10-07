import { faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomePageBodyCard, { CardItem } from "./HomePageBodyCard";
import HomePageSearch from "./HomePageSearch";
import mock from "./mock/data.json";

export default function HomePageBody() {
  return (
    <div className="flex bg-gray-900 h-full justify-center">
      <div className="block w-full max-w-6xl px-8 text-white py-8">
        <HomePageSearch />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
          {mock.data.map((cardItem: CardItem, index: number) => {
            return <HomePageBodyCard key={index} cardItem={cardItem} />;
          })}
        </div>
      </div>
    </div>
  );
}
