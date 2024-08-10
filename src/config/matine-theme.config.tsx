import { MantineProvider, createTheme } from "@mantine/core";
import { fontFamily } from "./theme.config";

const theme = createTheme({
  /** Put your mantine theme override here */
  fontFamily,
  fontSizes: {
    sm: "16",
  },
});

interface MantineThemeProps {
  children: React.ReactNode;
}
export const MantineTheme: React.FC<MantineThemeProps> = ({ children }) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
