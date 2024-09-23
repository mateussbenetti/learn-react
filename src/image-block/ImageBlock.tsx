import React from "react";

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
  var image = images[0];
  return (
    <div>
      <img src={image.url} alt="" />
      <div>{image.title}</div>
      <div>{image.description}</div>
    </div>
  );
};

export default ImageBlock;
