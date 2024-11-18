import { useEffect } from "react";
import { useForm } from "react-hook-form";

export interface LinkModel {
  text: string;
  url: string;
  option: string;
  comment: string;
}

interface LinktreeAddLinkNewProps {
  link?: LinkModel;
  onSubmit: (link: LinkModel) => void;
}

export default function LinktreeAddLinkNew({
  link,
  onSubmit,
}: LinktreeAddLinkNewProps) {
  const { register, handleSubmit, setValue, reset } = useForm<LinkModel>({
    defaultValues: {
      text: "",
      url: "",
      option: "1",
      comment: "",
    },
  });

  useEffect(() => {
    if (link) {
      setValue("text", link.text);
      setValue("url", link.url);
      setValue("option", link.option || "1");
      setValue("comment", link.comment || "");
    } else {
      reset();
    }
  }, [link, setValue, reset]);

  const submitHandler = (data: LinkModel) => {
    onSubmit(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="bg-gray-100 p-4 rounded"
    >
      <h3 className="text-xl mb-2">{link ? "Edit Link" : "Add Link"}</h3>
      <div className="mb-2">
        <input
          {...register("text", { required: true })}
          type="text"
          placeholder="Display Text"
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-2">
        <input
          {...register("url", { required: true })}
          type="text"
          placeholder="URL"
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-2">
        <textarea
          {...register("comment")}
          className="w-full h-[200px] p-2 border rounded"
          placeholder="Digite um comentário"
          rows={3}
        />
      </div>
      <div className="mb-2">
        <select
          {...register("option", { required: true })}
          className="w-full p-2 border rounded"
        >
          <option value="1">Opção 1</option>
          <option value="2">Opção 2</option>
          <option value="3">Opção 3</option>
        </select>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        {link ? "Save Changes" : "Add Link"}
      </button>
    </form>
  );
}
