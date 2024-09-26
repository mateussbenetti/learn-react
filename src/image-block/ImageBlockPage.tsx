import React from "react";
import mock from "./mock/data.json";
import ImageBlock from "./ImageBlock.tsx";

export default function ImageBlockPage() {
  return (
    <div className="flex justify-center bg-amber-700 py-12">
      <div className="w-full  lg:w-[80%]">
        {mock.data.map((item: any, index: number) => {
          return (
            <ImageBlock key={index} type={item.type} images={item.images} />
          );
        })}
      </div>
    </div>
  );
}
