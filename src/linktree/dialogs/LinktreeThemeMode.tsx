import { useState } from "react";
import LinktreeDialog from "../components/LinktreeDialog";
import { ThemeMode } from "../LinktreeModel";
import LinktreeButton from "../components/LinktreeButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

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
          {/* <button
            onClick={() => {
              setMode(ThemeMode.Light);
              onChange(ThemeMode.Light);
            }}
            className={`${
              mode === ThemeMode.Light ? "secondary-outline" : ""
            } primary-color tertiary-background flex h-[100px] text-md font-semibold w-full justify-center items-center text-center`}
          >
            Light
          </button> */}
          <div
            onClick={() => {
              setMode(ThemeMode.Dark);
              onChange(ThemeMode.Dark);
            }}
            className={`${
              mode === ThemeMode.Dark ? "secondary-outline" : ""
            } flex flex-col w-full h-[175px] bg-neutral-900 rounded-md gap-4 p-4  items-center justify-center`}
          >
            <div className="flex w-[30px] h-[30px] bg-zinc-800 rounded-2xl"></div>
            <div className="w-full h-[20px] bg-neutral-800 rounded-sm"></div>
            <div className="w-full h-[20px] bg-neutral-800 rounded-sm"></div>
            <div className="flex gap-4 bg-neutral-900 w-full h-[30px] items-center justify-center p-1">
              <button className="bg-neutral-900 text-white cursor-pointer flex w-[50%] h-[20px] text-sm justify-center text-center font-bold items-center rounded-sm">
                Back
              </button>
              <button className="bg-blue-600 secondary-color cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 flex w-[50%] h-[20px] text-sm justify-center text-center font-bold items-center rounded-sm">
                Next
              </button>
            </div>
          </div>
          {/* <button
            onClick={() => {
              setMode(ThemeMode.Dark);
              onChange(ThemeMode.Dark);
            }}
            className={`${
              mode === ThemeMode.Dark ? "secondary-outline" : ""
            } primary-color tertiary-background flex h-[100px] text-md font-semibold w-full justify-center items-center text-center`}
          >
            Dark
          </button> */}
          <div
            onClick={() => {
              setMode(ThemeMode.Light);
              onChange(ThemeMode.Light);
            }}
            className={`${
              mode === ThemeMode.Light ? "secondary-outline" : ""
            } flex flex-col w-full h-[175px] bg-white rounded-md gap-4 p-4  items-center justify-center`}
          >
            <div className="flex w-[30px] h-[30px] bg-neutral-300 rounded-2xl"></div>
            <div className="w-full h-[20px] bg-neutral-300 rounded-sm"></div>
            <div className="w-full h-[20px] bg-neutral-300 rounded-sm"></div>
            <div className="flex gap-4 bg-white w-full h-[30px] items-center justify-center p-1">
              <button className="bg-white text-black cursor-pointer flex w-[50%] h-[20px] text-sm justify-center text-center font-bold items-center rounded-sm">
                Back
              </button>
              <button className="bg-blue-600 secondary-color cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 flex w-[50%] h-[20px] text-sm justify-center text-center font-bold items-center rounded-sm">
                Next
              </button>
            </div>
          </div>
          {/* <button
            onClick={() => {
              setMode(ThemeMode.Light);
              onChange(ThemeMode.Light);
            }}
            className={`${
              mode === ThemeMode.Light ? "secondary-outline" : ""
            } primary-color tertiary-background flex h-[100px] text-md font-semibold w-full justify-center items-center text-center`}
          >
            Light
          </button> */}
          <div
            onClick={() => {
              setMode(ThemeMode.Orange);
              onChange(ThemeMode.Orange);
            }}
            className={`${
              mode === ThemeMode.Orange ? "secondary-outline" : ""
            } flex flex-col w-full h-[175px] bg-orange-500 rounded-md gap-4 p-4  items-center justify-center`}
          >
            <div className="flex w-[30px] h-[30px] bg-amber-700 rounded-2xl"></div>
            <div className="w-full h-[20px] bg-amber-700 rounded-sm"></div>
            <div className="w-full h-[20px] bg-amber-700 rounded-sm"></div>
            <div className="flex gap-4 bg-orange-500 w-full h-[30px] items-center justify-center p-1">
              <button className="bg-orange-500 text-white cursor-pointer flex w-[50%] h-[20px] text-sm justify-center text-center font-bold items-center rounded-sm">
                Back
              </button>
              <button className="bg-red-700 text-white cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 flex w-[50%] h-[20px] text-sm justify-center text-center font-bold items-center rounded-sm">
                Next
              </button>
            </div>
          </div>
          {/* <button
            onClick={() => {
              setMode(ThemeMode.Dark);
              onChange(ThemeMode.Dark);
            }}
            className={`${
              mode === ThemeMode.Dark ? "secondary-outline" : ""
            } primary-color tertiary-background flex h-[100px] text-md font-semibold w-full justify-center items-center text-center`}
          >
            Dark
          </button> */}
          <div
            onClick={() => {
              setMode(ThemeMode.Purple);
              onChange(ThemeMode.Purple);
            }}
            className={`${
              mode === ThemeMode.Purple ? "secondary-outline" : ""
            } flex flex-col w-full h-[175px] bg-pink-500 rounded-md gap-4 p-4  items-center justify-center`}
          >
            <div className="flex w-[30px] h-[30px] bg-pink-400 rounded-2xl"></div>
            <div className="w-full h-[20px] bg-pink-400 rounded-sm"></div>
            <div className="w-full h-[20px] bg-pink-400 rounded-sm"></div>
            <div className="flex gap-4 bg-pink-500 w-full h-[30px] items-center justify-center p-1">
              <button className="bg-pink-500 text-white cursor-pointer flex w-[50%] h-[20px] text-sm justify-center text-center font-bold items-center rounded-sm">
                Back
              </button>
              <button className="bg-purple-900 text-white cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 flex w-[50%] h-[20px] text-sm justify-center text-center font-bold items-center rounded-sm">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex tertiary-background gap-4 justify-center p-4">
        {/* <button
          onClick={() => onClose(themeMode)}
          className="tertiary-background primary-color cursor-pointer flex w-[50%] h-[50px] text-sm justify-center text-center font-bold items-center rounded-sm"
        >
          Back
        </button> */}
        <LinktreeButton
          text="Back"
          type="tertiary"
          onClick={() => onClose(themeMode)}
        />
        {/* <button
          onClick={() => onClose(mode)}
          className="secondary-background secondary-color cursor-pointer flex w-[50%] h-[50px] text-sm justify-center text-center font-bold items-center rounded-sm"
        >
          Save
        </button> */}
        <LinktreeButton
          text="Save"
          type="secondary"
          onClick={() => onClose(mode)}
        />
      </div>
    </LinktreeDialog>
  );
}
