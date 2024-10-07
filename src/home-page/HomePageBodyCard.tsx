import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { title } from "process";

export class CardItem {
  title: string;
  description: string;
  name: string;
  totalAmount: number;
  currentAmount: number;
}

interface HomePageBodyCardProps {
  cardItem: CardItem;
}

export default function HomePageBodyCard({ cardItem }: HomePageBodyCardProps) {
  function calculatePorcentage(): number {
    let porcentage = (100 * cardItem.currentAmount) / cardItem.totalAmount;
    return Math.round(porcentage);
  }

  return (
    <div className=" bg-gray-600 w-full h-[220px] rounded-lg">
      <div className="flex justify-between p-2">
        <div className="font-bold text-white text-md">{cardItem.title}</div>
        <div className="text-white text-xl">
          <FontAwesomeIcon icon="ellipsis" />
        </div>
      </div>
      <div className="p-2 flex gap-1">
        <div className="flex-none bg-black rounded-lg w-[70px] h-[70px] "></div>
        <div className="text-white text-[12px]">
          <p>{cardItem.description}</p>
          <div className="flex gap-1 items-center">
            <div>
              <p className="font-bold">by {cardItem.name}</p>
            </div>
            <FontAwesomeIcon className="text-green-400" icon="circle-check" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between  p-2">
        <div className="flex gap-1">
          <p className="font-bold">${cardItem.currentAmount}</p>
          <p>of ${cardItem.totalAmount}</p>
        </div>
        <div className="text-green-400">Contribute now</div>
      </div>
      <div className="flex items-center">
        <div className=" w-full p-2">
          <div
            style={{ width: `${calculatePorcentage()}%` }}
            className="bg-green-400 h-[8px] float-left rounded-md"
          ></div>
          <div className="bg-gray-400 w-full h-[8px] rounded-md"></div>
        </div>
        <div className="p-2">{calculatePorcentage()}%</div>
      </div>
    </div>
  );
}
