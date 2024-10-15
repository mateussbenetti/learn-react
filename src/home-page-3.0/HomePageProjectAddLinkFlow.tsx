export default function HomePageProjectAddLinkFlow() {
  return (
    <div>
      <div
        style={{ height: "calc(100vh - 62px - 77px)" }}
        className=" bg-neutral-900 overflow-auto"
      >
        <div className="flex text-left items-center text-white p-4 flex-wrap text-2xl font-bold">
          Add your link details
        </div>
        <div className="flex flex-col justify-between">
          <div className="p-4">
            <input
              type="text"
              placeholder="Display Text"
              className="w-full bg-neutral-700 text-white h-[50px] rounded-sm pl-2"
            />
            <input
              type="text"
              placeholder="Hyperlink"
              className="w-full bg-neutral-700 text-white h-[50px] mt-4 rounded-sm pl-2"
            />
          </div>
        </div>
      </div>
      <div className="flex bg-neutral-800 gap-4 justify-center p-4">
        <button className="flex bg-neutral-800 w-[50%] h-[50px] text-sm text-white justify-center text-center font-bold items-center rounded-sm">
          Back
        </button>
        <button className="flex bg-blue-800 w-[50%] h-[50px] text-sm text-white justify-center text-center font-bold items-center rounded-sm">
          Add
        </button>
      </div>
    </div>
  );
}
