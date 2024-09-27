
export interface IImageBlockTitleAndDescriptionProps {
  title: string;
  description: string;
}

export default function ImageBlockTitleAndDescription({
  title,
  description,
}: IImageBlockTitleAndDescriptionProps) {
  return (
    <div className="w-full">
      {title && (
        <div className="pt-4 text-white text-4xl text-center ">{title}</div>
      )}
      {description && (
        <div className="pt-4 text-white text-2xl text-center">
          {description}
        </div>
      )}
    </div>
  );
}
