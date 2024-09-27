import { ImageBlockModel } from "./ImageBlock";
import ImageBlockTitleAndDescription from "./ImageBlockTitleAndDescription";

export interface IImageBlockStackedProps {
  image: ImageBlockModel;
}

export default function ImageBlockStacked({ image }: IImageBlockStackedProps) {
  return (
    <div className="p-4">
      <img src={image.url} alt="" className="rounded-2xl" />
      <div className="flex items-center">
        <ImageBlockTitleAndDescription
          title={image.title}
          description={image.description}
        />
      </div>
    </div>
  );
}
