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
        <div className="font-bold text-lg">Contact Us</div>
      </div>
      <div className="inline-block w-full max-w-screen-lg rounded-md mt-4">
        {accordionItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <h2 className="text-lg">
              <button
                className="flex items-center text-left justify-between w-full py-4 px-5 bg-gray-100 text-gray-800"
                type="button"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                {item.title}
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
            </h2>
            {activeIndex === index && (
              <div className="py-4 px-5 text-gray-600">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
