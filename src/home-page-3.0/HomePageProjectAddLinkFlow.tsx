export default function HomePageProjectAddLinkFlow() {
  return (
    <div>
      <div className=" bg-neutral-900 h-[812px]">
        <div className="flex text-left items-center text-white p-4 flex-wrap text-2xl font-bold">
          Add your link details
        </div>
        <div className="flex flex-col justify-between h-[680px]">
          <div className="p-4">
            <div className="flex w-full bg-neutral-700 text-neutral-500 h-[50px] rounded-sm text-left items-center pl-2">
              Display Text
            </div>
            <div className="flex w-full bg-neutral-700 text-neutral-500 h-[50px] mt-4 rounded-sm text-left items-center pl-2">
              Hyperlink
            </div>
          </div>
          <div className="flex gap-6 justify-center p-4">
            <div className="flex bg-neutral-800 w-[46%] h-[45px] text-sm text-white justify-center text-center font-bold items-center rounded-sm">
              Back
            </div>
            <div className="flex bg-blue-800 w-[46%] h-[45px] text-sm text-white justify-center text-center font-bold items-center rounded-sm">
              Add
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
