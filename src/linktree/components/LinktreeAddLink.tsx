import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import LinktreeButton from "./LinktreeButton";

export interface LinkModel {
  text: string;
  url: string;
}

export interface ILinktreeAddLinkProps {
  link?: LinkModel;
  onPrevious: () => void;
  onSave: (model: LinkModel) => void;
}

export function renderIcon(url: string) {
  if (url?.includes("instagram"))
    return <img className="w-6 h-6" src="./assets/social/instagram.png" />;
  else if (url?.includes("youtube"))
    return <img className="w-6 h-6" src="./assets/social/youtube.png" />;
  else return <FontAwesomeIcon className="w-6 h6" icon={faUpRightFromSquare} />;
}

export default function LinktreeAddLink({
  link,
  onPrevious,
  onSave,
}: ILinktreeAddLinkProps) {
  const methods = useForm<LinkModel>({ mode: "onChange" });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = methods;

  const onSubmit = (link: LinkModel) => {
    onSave(link);
    reset();
  };

  const text = watch("text");
  const url = watch("url");

  useEffect(() => {
    if (link) {
      methods.setValue("text", link.text);
      methods.setValue("url", link.url);
    }
  }, [link]);

  return (
    <div className="primary-color">
      <div
        style={{ height: "calc(100vh - 62px - 82px)" }}
        className="overflow-auto py-8"
      >
        <div className="primary-color flex text-left p-4 flex-wrap text-xl font-semibold">
          Which link do you wish to add?
        </div>
        <div className="flex flex-col justify-between">
          <div className="px-4">
            <input
              {...register("text", {
                value: link?.text,
              })}
              type="text"
              placeholder="Display Text"
              className="w-full tertiary-background primary-color h-[50px] rounded-sm px-4 secondary-outline-focus"
              autoComplete="off"
            />
            <input
              {...register("url", {
                value: link?.text,
              })}
              type="text"
              placeholder="Hyperlink"
              className="w-full tertiary-background primary-color h-[50px] rounded-sm px-4 secondary-outline-focus mt-4"
              autoComplete="off"
            />
          </div>
        </div>
      </div>
      <div className="flex tertiary-background gap-4 justify-center p-4">
        {/* <button
          onClick={() => onPrevious()}
          className="tertiary-background primary-color cursor-pointer flex w-[50%] h-[50px] text-sm justify-center text-center font-bold items-center rounded-sm"
        >
          Back
        </button> */}
        <LinktreeButton
          text="Back"
          type="tertiary"
          onClick={() => onPrevious()}
        />
        {/* <button
          disabled={!text || !url}
          onClick={() => onSubmit({ text, url })}
          className="secondary-background secondary-color cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 flex w-[50%] h-[50px] text-sm justify-center text-center font-bold items-center rounded-sm"
        >
          Save
        </button> */}
        <LinktreeButton
          text="Save"
          type="secondary"
          onClick={() => onSubmit({ text, url })}
          disabled={!text || !url}
        />
      </div>
    </div>
  );
}
