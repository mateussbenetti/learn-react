import { useState } from "react";
import LinktreeAddLinkNew, { LinkModel } from "./LinktreeAddLinkNew";

export default function LinktreeLinks() {
  const [links, setLinks] = useState<LinkModel[]>([
    { text: "Google", url: "https://google.com" },
  ]);
  const [linkToEdit, setLinkToEdit] = useState<LinkModel | null>(null);

  const handleAddLink = (newLink: LinkModel) => {
    setLinks((prevLinks) => [...prevLinks, newLink]);
  };

  const handleEditLink = (editedLink: LinkModel) => {
    setLinks((prevLinks) =>
      prevLinks.map((link) =>
        link.text === linkToEdit?.text && link.url === linkToEdit?.url
          ? editedLink
          : link
      )
    );
    console.log("Edited link:", editedLink);
    setLinkToEdit(null);
  };

  return (
    <div className="text-center">
      <div className="inline-block w-full max-w-screen-lg">
        <div
          style={{ minHeight: "calc(100vh - 62px)" }}
          className="bg-slate-600 p-4"
        >
          <div>
            <h2 className="text-white text-2xl mb-4">Links</h2>
            {links.map((link, index) => (
              <div
                key={index}
                className="mb-4 bg-white p-2 rounded shadow cursor-pointer"
                onClick={() => setLinkToEdit(link)}
              >
                <span>
                  {link.text} - {link.url}
                </span>
              </div>
            ))}
            {!linkToEdit && <LinktreeAddLinkNew onSubmit={handleAddLink} />}
            {linkToEdit && (
              <LinktreeAddLinkNew link={linkToEdit} onSubmit={handleEditLink} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
