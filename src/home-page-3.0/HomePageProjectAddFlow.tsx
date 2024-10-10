export default function HomePageProjectAddFlow() {
  return (
    <div>
      <div className=" bg-neutral-900 h-[812px]">
        <div className="flex text-left text-white p-4 flex-wrap text-2xl font-bold ">
          What type of content do you wish to add?
        </div>
        <div className="flex flex-col justify-between h-[650px]">
          <div className="flex gap-6 p-4 flex-wrap justify-center items-center text-center">
            <div className="flex bg-neutral-800 h-[100px] w-[46%] text-white justify-center items-center text-center">
              Link
            </div>
            <div className="flex bg-neutral-800 h-[100px] w-[46%] text-white justify-center items-center text-center">
              Merch
            </div>
            <div className="flex bg-neutral-800 h-[100px] w-[46%] text-white justify-center items-center text-center">
              Video
            </div>
            <div className="flex bg-neutral-800 h-[100px] w-[46%] text-white justify-center items-center text-center">
              Post
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
