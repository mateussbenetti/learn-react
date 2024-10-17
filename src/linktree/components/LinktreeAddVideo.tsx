import { useState } from "react";
import LinktreeAddVideoUpload from "./LinktreeAddVideoUpload";
import LinktreeButton from "./LinktreeButton";

interface ILinktreeAddVideoProps {
  onClose: () => void;
}

export default function LinktreeAddVideo({ onClose }: ILinktreeAddVideoProps) {
  const [step, setStep] = useState(1);
  const [isHyperlink, setIsHyperlink] = useState<any>(null);

  return (
    <div className="primary-video">
      {step === 1 && (
        <div
          style={{ height: "calc(100vh - 62px - 77px)" }}
          className="primary-background overflow-auto"
        >
          <div className="flex text-left primary-color p-4 flex-wrap text-2xl font-bold">
            Would you like to upload your own video?
          </div>

          <div className="grid grid-cols-2 gap-4 px-4 w-full items-center text-center">
            <button
              onClick={() => setIsHyperlink(false)} // Vai para o upload de vídeo
              className={`flex tertiary-background h-[100px] w-full primary-color justify-center items-center text-center ${
                isHyperlink == false ? "secondary-outline" : ""
              }`}
            >
              Yes, upload
            </button>
            <button
              onClick={() => setIsHyperlink(true)}
              className={`flex tertiary-background h-[100px] w-full primary-color justify-center items-center text-center ${
                isHyperlink == true ? "secondary-outline" : ""
              }`}
            >
              No, I have a hyperlink
            </button>
          </div>
        </div>
      )}

      {step === 2 && <LinktreeAddVideoUpload onClose={() => setStep(1)} />}

      {step === 1 && (
        <div className="flex tertiary-background gap-4 justify-center p-4">
          <div className="w-1/2">
            <LinktreeButton text="Back" onClick={onClose} type="tertiary" />
          </div>
          <div className="w-1/2">
            <LinktreeButton
              text="Next"
              onClick={() => setStep(2)}
              type="secondary"
              disabled={isHyperlink === null}
            />
          </div>
        </div>
      )}
    </div>
  );
}
