import { MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({
  /** Put your mantine theme override here */
  fontFamily: "Livvic",
});

interface MantineThemeProps {
  children: React.ReactNode;
}
export const MantineTheme: React.FC<MantineThemeProps> = ({ children }) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
