import React from "react";
import "./App.css";
import mock from "./image-block/mock/data.json";
import ImageBlock from "./image-block/ImageBlock.tsx";

function App() {
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

export default App;
