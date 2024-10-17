import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinktreeButton from "./LinktreeButton";

interface ILinktreeAddVideoUploadProps {
  onClose: () => void;
}

export default function LinktreeAddVideoUpload({
  onClose,
}: ILinktreeAddVideoUploadProps) {
  return (
    <div>
      <div
        style={{ height: "calc(100vh - 62px - 77px)" }}
        className="primary-background overflow-auto"
      >
        <div className="flex text-left items-center primary-color p-4 flex-wrap text-2xl font-bold">
          Add your video details
        </div>
        <div className="flex flex-col justify-between px-4">
          <div className="flex w-full tertiary-background primary-color h-[50px] rounded-md border pl-2 pr-4 justify-between items-center">
            <div>Upload a photo or video</div>
            <button>
              <FontAwesomeIcon icon={faPaperclip} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex tertiary-background gap-4 justify-center p-4">
        <div className="w-1/2">
          <LinktreeButton text="Back" onClick={onClose} type="tertiary" />
        </div>
        <div className="w-1/2">
          <LinktreeButton
            text="Add"
            onClick={() => alert("Video added successfully!")}
            type="secondary"
            disabled={true}
          />
        </div>
      </div>
    </div>
  );
}
