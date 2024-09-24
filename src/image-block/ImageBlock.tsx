import React from "react";
import ImageBlockTitleAndDescription from "./ImageBlockTitleAndDescription.tsx";

export class ImageBlockModel {
  url: string;
  title: string;
  description: string;
}

export enum ImageBlockType {
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Eleven,
  Twelve,
  Thirteen,
}

interface ImageBlockProps {
  type: ImageBlockType;
  images: ImageBlockModel[];
}
const ImageBlock = ({ type, images }: ImageBlockProps) => {
  if (!images.length) {
    return;
  }

  function renderSwitch(type: ImageBlockType) {
    switch (type) {
      case ImageBlockType.One:
      case ImageBlockType.Four:
      case ImageBlockType.Seven:
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

      case ImageBlockType.Two:
      case ImageBlockType.Three:
      case ImageBlockType.Five:
      case ImageBlockType.Six:
        return (
          <div
            className={`flex ${
              ImageBlockType.Three == type || ImageBlockType.Six == type
                ? "flex-row-reverse"
                : "flex-row"
            }`}
          >
            <div className="p-4 w-[50%]">
              <img src={image.url} alt="" className="rounded-2xl" />
            </div>
            <div className="p-4 w-[50%] flex items-center">
              <ImageBlockTitleAndDescription
                title={image.title}
                description={image.description}
              />
            </div>
          </div>
        );
      default:
        return <p>Erro inesperado</p>;
    }
  }

  var image = images[0];
  return renderSwitch(type);
};

export default ImageBlock;
