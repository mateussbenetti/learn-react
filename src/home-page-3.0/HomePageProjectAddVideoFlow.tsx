export default function HomePageProjectAddVideoFlow() {
  return (
    <div>
      <div
        style={{ height: "calc(100vh - 62px - 77px)" }}
        className=" bg-neutral-900 overflow-auto"
      >
        <div className="flex text-left text-white p-4 flex-wrap text-2xl font-bold ">
          Would you like to upload your own video?
        </div>

        <div className="grid grid-cols-2 gap-4 px-4 w-full items-center text-center">
          <button className="flex bg-neutral-800 h-[100px] w-full text-white justify-center items-center text-center">
            Yes, upload
          </button>
          <button className="flex bg-neutral-800 h-[100px] w-full text-white justify-center items-center text-center">
            No, I have a hyperlink
          </button>
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
