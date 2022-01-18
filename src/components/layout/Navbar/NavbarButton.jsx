import { Button } from "@chakra-ui/react";

export const NavbarButton = (props) =>
  !props.token ? (
    <Button colorScheme={'whiteAlpha'} variant={'solid'} onClick={props.onOpen}>Login</Button>
  ) : (
    <Button colorScheme={'whiteAlpha'} variant="ghost" onClick={props.logout}>
      Logout
    </Button>
  );
