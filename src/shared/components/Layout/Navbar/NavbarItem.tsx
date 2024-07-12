import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mantine/core";
import { NavbarPageItem } from "config/navbar.config";
import { useRouter } from "shared/hooks";

interface NavbarItemProps {
  item: NavbarPageItem;
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ item }) => {
  const { navigate, location } = useRouter();
  const isActive = location.pathname == item.path;
  const btnProps = isActive
    ? {
        variant: "white",
        color: "dark",
      }
    : {
        variant: "subtle",
        color: "white",
      };
  return (
    <Button
      justify="space-between"
      fullWidth
      leftSection={<FontAwesomeIcon icon={item.icon} />}
      rightSection={item.name}
      onClick={() => navigate(item.path)}
      {...btnProps}
    />
  );
};
