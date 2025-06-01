import { Themes } from "@/configs";
import { useAtom } from "jotai";
import { themeAtom } from "./theme.store";

export const useThemeStore = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  const isDark = theme === Themes.Dark;

  return { theme, setTheme, isDark };
};
