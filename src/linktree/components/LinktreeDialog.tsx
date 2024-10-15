import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ILinktreeDialogProps {
  title?: string;
  open: boolean;
  onClose?: () => void;
}

export default function LinktreeDialog({
  open,
  title,
  onClose,
  children,
}: React.PropsWithChildren<ILinktreeDialogProps>) {
  return (
    open && (
      <div className="z-30 primary-background h-full w-full absolute top-0 left-0 lg:top-2/4 lg:left-2/4 lg:translate-x-[-50%] lg:translate-y-[-50%] max-w-screen-lg">
        <div className="h-[62px] tertiary-background flex items-center gap-4 p-4">
          <span className="flex-grow primary-color text-md font-semibold">
            {title}
          </span>
          <FontAwesomeIcon
            onClick={() => onClose && onClose()}
            className="primary-color text-2xl flex-none w-5"
            icon={faXmark}
          />
        </div>
        <div>{children}</div>
      </div>
    )
  );
}
