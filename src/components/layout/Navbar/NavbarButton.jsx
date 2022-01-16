import { Button } from "@chakra-ui/react";

export const NavbarButton = (props) =>
  !props.token ? (
    <Button onClick={props.onOpen}>Login</Button>
  ) : (
    <Button variant="ghost" onClick={props.logout}>
      Logout
    </Button>
  );
