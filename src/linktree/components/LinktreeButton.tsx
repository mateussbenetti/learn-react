interface ILinktreeButtonProps {
  disabled?: boolean;
  text: string;
  type: string;
  onClick: () => void;
}

export default function LinktreeButton({
  disabled,
  text,
  type = "secondary",
  onClick,
}: ILinktreeButtonProps) {
  return (
    <button
      className={`flex w-full h-[50px] text-sm text-white 
          justify-center items-center font-bold rounded-sm transition-all disabled:opacity-40
          ${
            type == "secondary"
              ? "secondary-background secondary-color"
              : "tertiary-background primary-color"
          }`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
