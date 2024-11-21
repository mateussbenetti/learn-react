import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

interface INewForm {
  id: number;
  text: string;
}

interface IPollData {
  id: number;
  question: string;
  description: string;
  choices: INewForm[];
  visibility: string;
}

export default function NewForm() {
  const [polls, setPolls] = useState<IPollData[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      question: "",
      description: "",
      visibility: "Public",
      choices: [
        { id: 1, text: "" },
        { id: 2, text: "" },
        { id: 3, text: "" },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "choices",
  });

  const onSubmit = (data: any) => {
    const newPoll = {
      id: polls.length + 1,
      ...data,
      choices: data.choices.filter(
        (choice: INewForm) => choice.text.trim() !== ""
      ),
    };

    setPolls((prevPolls) => [...prevPolls, newPoll]);

    // Reseta o formulário para nova entrada
    reset();
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-200 p-4">
      <h2 className="text-xl font-bold mb-4">Create Poll</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-md p-4"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Question</label>
          <input
            {...register("question", { required: "Question is required" })}
            type="text"
            placeholder="Ask a question.."
            className="w-full px-3 py-2 border rounded-md bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.question && (
            <span className="text-red-500 text-sm">
              {errors.question.message}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            {...register("description")}
            placeholder="Provide more information about your poll"
            className="w-full px-3 py-2 border rounded-md bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Choices</label>
          {fields.map((field, index) => (
            <div key={field.id} className="relative mb-2">
              <input
                {...register(`choices.${index}.text`, {
                  required: "Choice is required",
                })}
                type="text"
                placeholder="Add"
                className="w-full px-3 py-2 border rounded-md bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              />
              <button
                type="button"
                onClick={() => remove(index)}
                className="absolute inset-y-0 right-0 px-3 py-1 text-gray-400 rounded-r-md"
              >
                X
              </button>
              {errors.choices?.[index]?.text && (
                <span className="text-red-500 text-sm">
                  {errors.choices[index]?.text?.message}
                </span>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => append({ id: fields.length + 1, text: "" })}
            className="w-full py-2 mt-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            + Add a choice
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Who can see this poll?
          </label>
          <select
            {...register("visibility")}
            className="w-full px-3 py-2 border rounded-md bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Save
        </button>
      </form>

      {polls.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-4">Saved Polls</h3>
          {polls.map((poll) => (
            <div
              key={poll.id}
              className="bg-white p-4 rounded-md mb-4 shadow-md"
            >
              <p>
                <strong>Question:</strong> {poll.question}
              </p>
              <p>
                <strong>Description:</strong> {poll.description}
              </p>
              <p>
                <strong>Choices:</strong>
              </p>
              <ul className="list-disc list-inside">
                {poll.choices.map((choice, index) => (
                  <li key={index}>{choice.text}</li>
                ))}
              </ul>
              <p>
                <strong>Visibility:</strong> {poll.visibility}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
