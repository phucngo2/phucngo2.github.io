import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mantine/core";
import { ContactItem } from "config";
import React from "react";

interface NavbarFooterItemProps {
  item: ContactItem;
}

export const NavbarFooterItem: React.FC<NavbarFooterItemProps> = ({ item }) => {
  return (
    <Tooltip label={item.name} position="top" key={item.name}>
      <a
        href={item.href}
        className="flex-wrap d-flex"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={item.icon} color={item.color} />
      </a>
    </Tooltip>
  );
};
