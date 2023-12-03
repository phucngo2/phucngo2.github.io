import { Avatar } from "@mantine/core";
import { pageList } from "config/navbar.config";
import { NavbarFooter, NavbarItem } from "shared/components";

export const Navbar = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full text-white">
      <div className="flex flex-col items-center w-full gap-8">
        <Avatar w={100} h={100} my={16} />
        <div className="flex flex-col items-center w-full gap-4">
          {pageList.map((item) => (
            <NavbarItem item={item} key={item.name} />
          ))}
        </div>
      </div>
      <NavbarFooter />
    </div>
  );
};
