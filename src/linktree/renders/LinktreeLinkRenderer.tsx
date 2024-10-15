import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import LinktreeAddLink, {
  LinkModel,
  renderIcon,
} from "../components/LinktreeAddLink";
import LinktreeDialog from "../components/LinktreeDialog";

export interface ILinktreeLinkRendererProps {
  link: LinkModel;
  onSave: (model: LinkModel) => void;
}

export default function LinktreeLinkRenderer({
  link,
  onSave,
}: ILinktreeLinkRendererProps) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  return (
    <div className="w-full">
      <div className="w-full relative tertiary-background rounded flex items-center gap-2 p-4">
        <span className="primary-color text-xl w-6">
          {renderIcon(link.url)}
        </span>
        <a
          className="primary-color font-semibold text-md"
          href={link.url}
          target="_blank"
        >
          {link.text}
        </a>
        <FontAwesomeIcon
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setIsEdit(true);
          }}
          className="primary-color text-lg absolute right-2 top-5"
          icon={faPencil}
        />
      </div>
      {isEdit && (
        <LinktreeDialog open={true} onClose={() => setIsEdit(false)}>
          <LinktreeAddLink
            link={link}
            onPrevious={() => setIsEdit(false)}
            onSave={(value) => {
              onSave(value);
              setIsEdit(false);
            }}
          />
        </LinktreeDialog>
      )}
    </div>
  );
}
