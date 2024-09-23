import React from "react";
import "./App.css";
import mock from "./image-block/mock/data.json";
import ImageBlock from "./image-block/ImageBlock.tsx";

function App() {
  return (
    <div>
      {mock.data.map((item: any) => {
        return <ImageBlock type={item.type} images={item.images}></ImageBlock>;
      })}
    </div>
  );
}

export default App;
