import { Themes } from "@/configs";
import { atom } from "jotai";

type Theme = "dark" | "light";

export const themeAtom = atom<Theme>(Themes.Dark);
