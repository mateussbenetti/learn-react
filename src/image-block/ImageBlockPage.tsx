import ImageBlock from "./ImageBlock";
import mock from "./mock/data.json";

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
