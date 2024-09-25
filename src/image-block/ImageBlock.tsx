import React from "react";
import ImageBlockTitleAndDescription from "./ImageBlockTitleAndDescription.tsx";
import ImageBlockStacked from "./ImageBlockStacked.tsx";
import { url } from "inspector";

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

  const image = images[0];

  function renderSwitch(type: ImageBlockType) {
    switch (type) {
      case ImageBlockType.One:
      case ImageBlockType.Four:
      case ImageBlockType.Seven:
        return <ImageBlockStacked image={image} />;

      case ImageBlockType.Two:
      case ImageBlockType.Three:
      case ImageBlockType.Five:
      case ImageBlockType.Six:
        return (
          <div
            className={`lg:flex ${
              ImageBlockType.Three == type || ImageBlockType.Six == type
                ? "flex-row-reverse"
                : "flex-row"
            }`}
          >
            <div className="p-4 w-full lg:w-[50%]">
              <img src={image.url} alt="" className="rounded-2xl" />
            </div>
            <div className="p-4 w-full lg:w-[50%] flex items-center">
              <ImageBlockTitleAndDescription
                title={image.title}
                description={image.description}
              />
            </div>
          </div>
        );

      case ImageBlockType.Eight:
      case ImageBlockType.Nine:
      case ImageBlockType.Ten:
      case ImageBlockType.Eleven:
      case ImageBlockType.Twelve:
      case ImageBlockType.Thirteen:
        return (
          <div className="lg:flex">
            {images.map((item: ImageBlockModel, index: number) => {
              return (
                <div
                  key={index}
                  className={` ${
                    ImageBlockType.Nine == type ||
                    ImageBlockType.Eleven == type ||
                    ImageBlockType.Thirteen == type
                      ? "w-full lg:w-1/3"
                      : "w-full lg:w-1/2"
                  }`}
                >
                  <ImageBlockStacked image={item} />
                </div>
              );
            })}
          </div>
        );

      default:
        return <ImageBlockStacked image={image} />;
    }
  }

  return renderSwitch(type);
};

export default ImageBlock;
