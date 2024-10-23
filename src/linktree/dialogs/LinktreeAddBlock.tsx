import { useState } from "react";
import LinktreeAddLink, { LinkModel } from "../components/LinktreeAddLink";
import LinktreeAddVideo from "../components/LinktreeAddVideo";
import LinktreeDialog from "../components/LinktreeDialog";
import LinktreeButton from "../components/LinktreeButton";
import LinktreeAddEmbed from "../components/LinktreeAddEmbed";

export enum BlockType {
  Link = "Link",
  Video = "Video",
  Embed = "Embed",
}

export interface ILinktreeAddBlockProps {
  onClose: () => void;
  onSave: (value: any, type: BlockType) => void;
}

export default function LinktreeAddBlock({
  onClose,
  onSave,
}: ILinktreeAddBlockProps) {
  let [step, setStep] = useState<number>(1);
  let [type, setType] = useState<BlockType>();

  function renderAddBlockSwitch() {
    switch (type) {
      case BlockType.Link:
        return (
          <LinktreeAddLink
            onPrevious={() => setStep(1)}
            onSave={(value) => onSave(value, BlockType.Link)}
          />
        );
      case BlockType.Video:
        return <LinktreeAddVideo onClose={() => setStep(1)} />;

      case BlockType.Embed:
        return (
          <LinktreeAddEmbed
            onPrevious={() => setStep(1)}
            onSave={(value) => onSave(value, BlockType.Embed)}
          />
        );

      default:
        return <div>Block not implemented!</div>;
    }
  }

  return (
    <LinktreeDialog open={true} onClose={onClose}>
      {step === 1 && (
        <div>
          <div
            style={{ height: "calc(100vh - 62px - 82px)" }}
            className="overflow-auto py-8"
          >
            <div className="primary-color flex text-left p-4 flex-wrap text-xl font-semibold">
              What content do you wish to add?
            </div>
            <div className="grid grid-cols-2 gap-4 px-4 w-full items-center text-center">
              <button
                onClick={() => setType(BlockType.Link)}
                className={`${
                  type === BlockType.Link ? "secondary-outline" : ""
                } primary-color tertiary-background flex h-[100px] text-md font-semibold w-full justify-center items-center text-center`}
              >
                Link
              </button>
              <button
                onClick={() => setType(BlockType.Video)}
                className={`${
                  type === BlockType.Video ? "secondary-outline" : ""
                } primary-color tertiary-background flex h-[100px] text-md font-semibold w-full justify-center items-center text-center`}
              >
                Video
              </button>
              <button
                onClick={() => setType(BlockType.Embed)}
                className={`${
                  type === BlockType.Embed ? "secondary-outline" : ""
                } primary-color tertiary-background flex h-[100px] text-md font-semibold w-full justify-center items-center text-center`}
              >
                Embed
              </button>
              <button className="primary-color tertiary-background flex h-[100px] text-md font-semibold w-full justify-center items-center text-center">
                Post
              </button>
            </div>
          </div>
          <div className="flex tertiary-background gap-4 justify-center p-4">
            {/* <button
              onClick={onClose}
              className="tertiary-background primary-color cursor-pointer flex w-[50%] h-[50px] text-sm justify-center text-center font-bold items-center rounded-sm"
            >
              Back
            </button> */}
            <div className="w-1/2">
              <LinktreeButton text="Back" onClick={onClose} type="tertiary" />
            </div>
            {/* <button
              disabled={!type}
              onClick={() => setStep(2)}
              className="secondary-background secondary-color cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 flex w-[50%] h-[50px] text-sm justify-center text-center font-bold items-center rounded-sm"
            >
              Next
            </button> */}
            <div className="w-1/2">
              <LinktreeButton
                text="Next"
                type="secondary"
                onClick={() => setStep(2)}
                disabled={!type}
              />
            </div>
          </div>
        </div>
      )}
      {step === 2 && renderAddBlockSwitch()}
    </LinktreeDialog>
  );
}
