export interface ThemeSettings {
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;

  primaryTextColor: string;
  secondaryTextColor: string;
}

export enum ThemeMode {
  Dark = "Dark",
  Light = "Light",
}

export const THEME_SETTINGS_LIGHT = {
  primaryColor: "#FFFFFF",
  secondaryColor: "#075985",
  tertiaryColor: "#e5e5e5",
  primaryTextColor: "#262626",
  secondaryTextColor: "#FFFFFF",
};

export const THEME_SETTINGS_DARK = {
  primaryColor: "#171717",
  secondaryColor: "#075985",
  tertiaryColor: "#262626",
  primaryTextColor: "#FFFFFF",
  secondaryTextColor: "#FFFFFF",
};
