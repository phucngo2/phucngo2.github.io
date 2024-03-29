import { Avatar } from "@mantine/core";
import ProfileAvatar from "assets/profile/cat.jpg";
import { AVATAR_SIZE } from "config";
import { pageList } from "config/navbar.config";
import { NavbarFooter, NavbarItem } from "shared/components";

export const Navbar = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full text-white">
      <div className="flex flex-col items-center w-full gap-8">
        <Avatar
          src={ProfileAvatar}
          w={AVATAR_SIZE}
          h={AVATAR_SIZE}
          my={16}
          className="border-2 border-white border-solid"
        />
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
