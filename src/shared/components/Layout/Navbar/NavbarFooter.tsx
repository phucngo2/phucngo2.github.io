import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navbarFooter } from "config";

export const NavbarFooter = () => {
  return (
    <div className="flex flex-row items-center justify-around w-full">
      {navbarFooter.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="flex-wrap d-flex"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={link.icon} color={link.color} />
        </a>
      ))}
    </div>
  );
};
