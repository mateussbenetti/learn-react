import { useState } from "react";
import LinktreeDialog from "../components/LinktreeDialog";
import { ThemeMode } from "../LinktreeModel";

export interface ILinktreeThemeModeProps {
  themeMode: ThemeMode;
  onChange: (mode: ThemeMode) => void;
  onClose: (mode: ThemeMode) => void;
}

export default function LinktreeThemeMode({
  themeMode,
  onChange,
  onClose,
}: ILinktreeThemeModeProps) {
  let [mode, setMode] = useState<ThemeMode>(themeMode);

  return (
    <LinktreeDialog
      title="Theme Settings"
      open={true}
      onClose={() => onClose(themeMode)}
    >
      <div
        style={{ height: "calc(100vh - 62px - 82px)" }}
        className="overflow-auto py-8"
      >
        <div className="primary-color flex text-left p-4 flex-wrap text-xl font-semibold">
          Which theme do you prefer?
        </div>
        <div className="grid grid-cols-2 gap-4 px-4 w-full items-center text-center">
          <button
            onClick={() => {
              setMode(ThemeMode.Light);
              onChange(ThemeMode.Light);
            }}
            className={`${
              mode === ThemeMode.Light ? "secondary-outline" : ""
            } primary-color tertiary-background flex h-[100px] text-md font-semibold w-full justify-center items-center text-center`}
          >
            Light
          </button>
          <button
            onClick={() => {
              setMode(ThemeMode.Dark);
              onChange(ThemeMode.Dark);
            }}
            className={`${
              mode === ThemeMode.Dark ? "secondary-outline" : ""
            } primary-color tertiary-background flex h-[100px] text-md font-semibold w-full justify-center items-center text-center`}
          >
            Dark
          </button>
        </div>
      </div>
      <div className="flex tertiary-background gap-4 justify-center p-4">
        <button
          onClick={() => onClose(themeMode)}
          className="tertiary-background primary-color cursor-pointer flex w-[50%] h-[50px] text-sm justify-center text-center font-bold items-center rounded-sm"
        >
          Back
        </button>
        <button
          onClick={() => onClose(mode)}
          className="secondary-background secondary-color cursor-pointer flex w-[50%] h-[50px] text-sm justify-center text-center font-bold items-center rounded-sm"
        >
          Save
        </button>
      </div>
    </LinktreeDialog>
  );
}
