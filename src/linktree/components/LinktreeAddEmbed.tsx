import { useForm } from "react-hook-form";
import LinktreeButton from "./LinktreeButton";

export interface ILinktreeAddEmbedProps {
  initialHtml?: string;
  onPrevious: () => void;
  onSave: (model: string) => void;
}

export default function LinktreeAddEmbed({
  initialHtml,
  onPrevious,
  onSave,
}: ILinktreeAddEmbedProps) {
  const methods = useForm<{ html: string }>({ mode: "onChange" });

  const { register, watch } = methods;

  const html = watch("html");
  return (
    <div className="primary-color">
      <div
        style={{ height: "calc(100vh - 62px - 82px)" }}
        className="overflow-auto p-4"
      >
        <div className="primary-color flex text-left py-4 flex-wrap text-xl font-semibold">
          Paste your embed code here 2:
        </div>
        <textarea
          {...register("html", {
            value: initialHtml,
          })}
          id="message"
          rows={6}
          className="block p-4 w-full tertiary-background primary-color rounded-lg"
          placeholder="<embed> ... </embed>"
        ></textarea>
        <div
          className="w-full pt-4"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        ></div>
      </div>
      <div className="flex tertiary-background gap-4 justify-center p-4">
        <LinktreeButton
          text="Back"
          type="tertiary"
          onClick={() => onPrevious()}
        />
        <LinktreeButton
          text="Save"
          type="secondary"
          onClick={() => onSave(html)}
          disabled={!html}
        />
      </div>
    </div>
  );
}
