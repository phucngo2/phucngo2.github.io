import { Themes } from "@/configs";
import { contacts } from "@/configs/data/contact.data";
import { useThemeStore } from "@/stores";
import { Link } from "@heroui/react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { InfoMenuItem } from "./InfoMenuItem";

export const InfoMenu = () => {
  const { setTheme, isDark } = useThemeStore();

  const handleThemeSwitch = () => {
    if (isDark) {
      setTheme(Themes.Light);
      return;
    }

    setTheme(Themes.Dark);
  };

  return (
    <div className="w-full sm:w-fit flex flex-row items-center justify-end gap-2">
      {contacts.map((item) => (
        <InfoMenuItem
          tooltip={item.name}
          as={Link}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </InfoMenuItem>
      ))}

      <InfoMenuItem
        onPress={handleThemeSwitch}
        tooltip={isDark ? "Toogle light mode" : "Toogle dark mode"}
      >
        {isDark ? <IconSun size={20} /> : <IconMoon size={20} />}
      </InfoMenuItem>
    </div>
  );
};
