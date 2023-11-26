import { contacts } from "config";
import { NavbarFooterItem } from ".";

export const NavbarFooter = () => {
  return (
    <div className="flex flex-row items-center justify-around w-full">
      {contacts.map((item) => (
        <NavbarFooterItem item={item} key={item.name} />
      ))}
    </div>
  );
};
