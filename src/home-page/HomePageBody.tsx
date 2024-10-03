import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomePageBody() {
  return (
    <div className="flex bg-gray-900 h-[500px] justify-center">
      <div className="block w-full max-w-6xl px-8 text-white py-8">
        <div className="flex justify-between">
          <div className="flex gap-6 items-center">
            <p className="text-lg">{"< "}Back</p>
            <h1 className="font-bold text-4xl">Search results</h1>
          </div>
          <div>Sort</div>
        </div>
        <div className="flex gap-4 pt-4">
          <div className=" bg-gray-600 w-[380px] h-[220px] rounded-lg ">
            <div className="flex justify-between p-2">
              <div className="font-bold text-white text-md">
                Creating Content for the Masses
              </div>
              <div className="text-white text-xl">
                <FontAwesomeIcon icon="ellipsis" />
              </div>
            </div>
            <div className="p-2 flex gap-1">
              <div className="flex-none bg-black rounded-lg w-[70px] h-[70px] "></div>
              <div className="text-white text-[12px]">
                <p>
                  I am a content creator and I am excited to bring my ideas to
                  life with your help. With your support, ...
                </p>
                <div className="flex gap-1 items-center">
                  <div>
                    <p className="font-bold">by Jane Smith</p>
                  </div>
                  <FontAwesomeIcon
                    className="text-green-400"
                    icon="circle-check"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between  p-2">
              <div className="flex gap-1">
                <p className="font-bold">$250</p>
                <p>of $500</p>
              </div>
              <div className="text-green-400">Contribute now</div>
            </div>
            <div className="flex items-center">
              <div className="flex p-2">
                <div className="bg-green-400 w-[100px] h-[8px] rounded-md"></div>
                <div className="bg-gray-400 w-[150px] h-[8px] rounded-e-md"></div>
              </div>
              <div className="p-2">40%</div>
            </div>
          </div>
          <div className="bg-gray-600 w-[380px] h-[220px] rounded-lg">
            <div className="flex justify-between p-2">
              <div className="font-bold text-white text-md">
                Kickstart Our Season
              </div>
              <div className="text-white text-xl">
                <FontAwesomeIcon icon="ellipsis" />
              </div>
            </div>
            <div className="p-2 flex gap-1">
              <div className="flex-none bg-white rounded-lg w-[70px] h-[70px] "></div>
              <div className="text-white text-[12px]">
                <p>
                  We are a youth soccer team from XYZ and we need your help to
                  make this season a success. With your support...
                </p>
                <div className="flex gap-1 items-center">
                  <div>
                    <p className="font-bold">by XYZ Youth Soccer</p>
                  </div>
                  <FontAwesomeIcon
                    className="text-green-400"
                    icon="circle-check"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between  p-2">
              <div className="flex gap-1">
                <p className="font-bold">$250</p>
                <p>of $500</p>
              </div>
              <div className="text-green-400">Contribute now</div>
            </div>
            <div className="flex items-center">
              <div className="flex p-2">
                <div className="bg-green-400 w-[100px] h-[8px] rounded-md"></div>
                <div className="bg-gray-400 w-[150px] h-[8px] rounded-e-md"></div>
              </div>
              <div className="p-2">40%</div>
            </div>
          </div>
          <div className="bg-gray-600 w-[380px] h-[220px] rounded-lg">
            <div className="flex justify-between p-2">
              <div className="font-bold text-white text-md">
                Help take my Game to the Next Level!
              </div>
              <div className="text-white text-xl">
                <FontAwesomeIcon icon="ellipsis" />
              </div>
            </div>
            <div className="p-2 flex gap-1">
              <div className="flex-none bg-white rounded-lg w-[70px] h-[70px] "></div>
              <div className="text-white text-[12px]">
                <p>
                  I am a professional athlete and I am excited to bring you
                  along on my journey to success. With your help...
                </p>
                <div className="flex gap-1 items-center">
                  <div>
                    <p className="font-bold">by John Doe</p>
                  </div>
                  <FontAwesomeIcon
                    className="text-green-400"
                    icon="circle-check"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between  p-2">
              <div className="flex gap-1">
                <p className="font-bold">$250</p>
                <p>of $500</p>
              </div>
              <div className="text-green-400">Contribute now</div>
            </div>
            <div className="flex items-center">
              <div className="flex p-2">
                <div className="bg-green-400 w-[100px] h-[8px] rounded-md"></div>
                <div className="bg-gray-400 w-[150px] h-[8px] rounded-e-md"></div>
              </div>
              <div className="p-2">40%</div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
