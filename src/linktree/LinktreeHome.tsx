import { useState } from "react";
import LinktreeHeader from "./LinktreeHeader";
import {
  THEME_SETTINGS_DARK,
  THEME_SETTINGS_LIGHT,
  THEME_SETTINGS_ORANGE,
  THEME_SETTINGS_PURPLE,
  ThemeMode,
  ThemeSettings,
} from "./LinktreeModel";
import { LinkModel } from "./components/LinktreeAddLink";
import LinktreeAddBlock, { BlockType } from "./dialogs/LinktreeAddBlock";
import LinktreeThemeMode from "./dialogs/LinktreeThemeMode";
import mockData from "./mock.json";
import LinktreeLinkRenderer from "./renders/LinktreeLinkRenderer";
import LinktreeButton from "./components/LinktreeButton";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

export default function LinktreeHome() {
  let [themeSettings, setThemeSettings] =
    useState<ThemeSettings>(THEME_SETTINGS_DARK);
  let [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.Dark);

  let [showThemeModeDialog, setShowThemeModeDialog] = useState<boolean>(false);
  let [showAddBlockDialog, setshowAddBlockDialog] = useState<boolean>(false);
  let [links, setLinks] = useState<LinkModel[]>(mockData.links);
  let [embeds, setEmbeds] = useState<string[]>(mockData.embeds);

  function onThemeChange(value: ThemeMode, close: boolean): void {
    if (value) {
      if (value === ThemeMode.Light) {
        setThemeSettings(THEME_SETTINGS_LIGHT);
      } else if (value === ThemeMode.Dark) {
        setThemeSettings(THEME_SETTINGS_DARK);
      } else if (value === ThemeMode.Orange) {
        setThemeSettings(THEME_SETTINGS_ORANGE);
      } else if (value === ThemeMode.Purple) {
        setThemeSettings(THEME_SETTINGS_PURPLE);
      }
    }

    if (close) {
      setThemeMode(value);
      setShowThemeModeDialog(false);
    }
  }

  return (
    <div className="text-center">
      <style>
        {`
          .primary-color {
            color: ${themeSettings.primaryTextColor}
          }
          .secondary-color {
            color: ${themeSettings.secondaryTextColor}
          }
            .secondary-color {
            color: ${themeSettings.secondaryTextColor}
          }
          .secondary-outline {
            outline: 2px solid ${themeSettings.secondaryColor}
          }
          .secondary-outline-focus {
            &:focus {
              outline: 2px solid ${themeSettings.secondaryColor}
            }
          }
          .primary-background {
            background-color: ${themeSettings.primaryColor}
          }
          .secondary-background {
            background-color: ${themeSettings.secondaryColor}
          }
          .tertiary-background {
            background-color: ${themeSettings.tertiaryColor}
          }
        `}
      </style>
      <div className="inline-block w-full max-w-screen-lg">
        <LinktreeHeader />
        <div
          style={{ minHeight: "calc(100vh - 62px" }}
          className="primary-background p-4"
        >
          <div className="flex gap-4 justify-center">
            <div className="w-1/2">
              <LinktreeButton
                text="Add Block"
                type="secondary"
                onClick={() => setshowAddBlockDialog(true)}
              />
            </div>
            <div className="w-1/2">
              <LinktreeButton
                text="Settings"
                type="secondary"
                onClick={() => setShowThemeModeDialog(true)}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            {links.map((link, index) => (
              <LinktreeLinkRenderer
                key={index}
                link={link}
                onSave={(value) => {
                  const newLinks = [...links];
                  newLinks[index] = value;
                  setLinks([...newLinks]);
                }}
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            {embeds.map((html, index) => (
              <div
                className="w-full"
                key={index}
                dangerouslySetInnerHTML={{
                  __html: html,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      {showThemeModeDialog && (
        <LinktreeThemeMode
          themeMode={themeMode}
          onChange={(value) => onThemeChange(value, false)}
          onClose={(value) => onThemeChange(value, true)}
        />
      )}
      {showAddBlockDialog && (
        <LinktreeAddBlock
          onClose={() => setshowAddBlockDialog(false)}
          onSave={(value, type) => {
            switch (type) {
              case BlockType.Link:
                setLinks([...links, value]);
                break;
              case BlockType.Embed:
                setEmbeds([...embeds, value]);
                break;
              default:
                break;
            }

            setshowAddBlockDialog(false);
          }}
        />
      )}
    </div>
  );
}
