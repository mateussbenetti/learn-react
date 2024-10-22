import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinktreeButton from "./LinktreeButton";
import { useState, ChangeEvent } from "react";

interface ILinktreeAddVideoUploadProps {
  onClose: () => void;
}

export default function LinktreeAddVideoUpload({
  onClose,
}: ILinktreeAddVideoUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    } else {
      setPreview(null);
    }
  };

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
            <label htmlFor="file-upload" className="cursor-pointer">
              <FontAwesomeIcon icon={faPaperclip} />
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*,video/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          {preview && (
            <div className="mt-4">
              {selectedFile?.type.startsWith("image/") ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full rounded-md"
                />
              ) : (
                <video controls className="w-full rounded-md">
                  <source src={preview} type={selectedFile?.type} />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex tertiary-background gap-4 justify-center p-4">
        <div className="w-1/2">
          <LinktreeButton text="Back" onClick={onClose} type="tertiary" />
        </div>
        <div className="w-1/2">
          <LinktreeButton
            text="Add"
            onClick={() => {
              if (selectedFile) {
                alert(`${selectedFile.name} added successfully!`);
              }
            }}
            type="secondary"
            disabled={!selectedFile}
          />
        </div>
      </div>
    </div>
  );
}
