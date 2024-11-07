import { useState } from "react";

export default function CarsFAQ() {
  // Dados para os itens do Accordion
  const accordionItems = [
    {
      title: "Do you have the ability to deliver the car?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Do you have the ability to deliver the car?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Do you have the ability to deliver the car?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Do you have the ability to deliver the car?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Do you have the ability to deliver the car?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Do you have the ability to deliver the car?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="font-inter p-4 gap-6">
      <div className="flex justify-between">
        <div className="font-bold text-lg">FAQ</div>
      </div>
      <div className="inline-block w-full max-w-screen-lg rounded-md mt-4 gap-4">
        {accordionItems.map((item, index) => (
          <div key={index} className="">
            <div
              className={`flex justify-between ${
                index !== 0 ? "pt-4" : ""
              } p-0 shadow-sm shadow-gray-200 rounded-sm`}
            >
              <div className="text-md">{item.title}</div>
              <button
                className="flex items-center justify-center py-4 px-5 bg-gray-100 text-blue-600"
                type="button"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            {activeIndex === index && (
              <div className="flex py-2 text-gray-400 text-sm">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
