interface ILinktreeButtonProps {
  disabled: boolean;
  text: string;
  onClick: () => void;
}

export default function LinktreeButton({
  disabled,
  text,
  onClick,
}: ILinktreeButtonProps) {
  return (
    <div>
      <button
        className={`flex bg-neutral-800 w-full h-[50px] text-sm text-white 
          justify-center items-center font-bold rounded-sm transition-all 
          ${
            disabled ? "bg-gray-400 cursor-not-allowed" : "hover:bg-neutral-600"
          }`}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  );
}
