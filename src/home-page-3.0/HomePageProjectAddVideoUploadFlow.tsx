import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomePageProjectAddVideoUploadFlow() {
  return (
    <div>
      <div
        style={{ height: "calc(100vh - 62px - 77px)" }}
        className=" bg-neutral-900 overflow-auto"
      >
        <div className="flex text-left items-center text-white p-4 flex-wrap text-2xl font-bold">
          Add your video details
        </div>
        <div className="flex flex-col justify-between p-4">
          <div className="flex w-full bg-neutral-700 text-white h-[50px] rounded-md border border-white pl-2 pr-4 justify-between items-center">
            <div>Upload a photo or video</div>
            <button>
              <FontAwesomeIcon icon={faPaperclip} />
            </button>
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
