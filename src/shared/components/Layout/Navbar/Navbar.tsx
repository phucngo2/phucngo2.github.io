import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button } from "@mantine/core";
import { NavbarFooter } from ".";

export const Navbar = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full text-white">
      <div className="flex flex-col items-center w-full gap-8">
        <Avatar w={100} h={100} my={16} />
        <div className="flex flex-col items-center w-full gap-3">
          <Button
            justify="space-between"
            fullWidth
            leftSection={<FontAwesomeIcon icon={faUser} />}
            rightSection={"Button label"}
            variant="subtle"
            color="white"
          />
          <Button
            justify="space-between"
            fullWidth
            leftSection={<FontAwesomeIcon icon={faUser} />}
            rightSection={"Button label"}
            variant="subtle"
            color="white"
          />
          <Button
            justify="space-between"
            fullWidth
            leftSection={<FontAwesomeIcon icon={faUser} />}
            rightSection={"Button label"}
            variant="subtle"
            color="white"
          />
          <Button
            justify="space-between"
            fullWidth
            leftSection={<FontAwesomeIcon icon={faUser} />}
            rightSection={"Button label"}
            variant="subtle"
            color="white"
          />
          <Button
            justify="space-between"
            fullWidth
            leftSection={<FontAwesomeIcon icon={faUser} />}
            rightSection={"Button label"}
            variant="subtle"
            color="white"
          />
        </div>
      </div>
      <NavbarFooter />
    </div>
  );
};
