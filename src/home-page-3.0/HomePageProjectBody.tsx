export default function HomePageProjectBody() {
  return (
    <div
      style={{ height: "calc(100vh - 62px - 77px)" }}
      className=" bg-neutral-900 overflow-auto"
    >
      <div className="flex gap-4 justify-center p-4">
        <button className="flex bg-blue-800 w-[50%] h-[50px] text-sm text-white justify-center text-center font-bold items-center rounded-sm">
          Add
        </button>
        <button className="flex bg-blue-800 w-[50%] h-[50px] text-sm text-white justify-center text-center font-bold items-center rounded-sm">
          Settings
        </button>
      </div>
    </div>
  );
}
