import {
  Box,
  Container,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  DrawerOverlay,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";
import { useContext } from "react";
import logo from "../../../assets/logo.png";
import { NavbarButton } from "./NavbarButton";
import TokenContext from "../../TokenContext";

export const NavbarMobile = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { userData } = useContext(TokenContext);

  return (
    <Container
      justifyContent={"space-between"}
      display={"flex"}
      width={"100%"}
      maxW={"none"}
    >
      <Button colorScheme="white" onClick={onOpen}>
        <HamburgerIcon />
      </Button>

      <Link className="nav-link" to="home" spy={true} smooth={true}>
        <Image className="logo" src={logo} />
      </Link>

      <NavbarButton
        onOpen={props.onOpen}
        token={props.token}
        logout={props.logout}
      />

      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Box
              pb={"1rem"}
              display={"flex"}
              flexDirection={{ base: "column" }}
            >
              <Box pb={"0.4rem"}>
                <Link to="home" spy={true} smooth={true}>
                  HOME
                </Link>
              </Box>

              {userData &&
                props.navbarItems.map((item) => {
                  return (
                    <Box pb={"0.4rem"} key={item.id}>
                      <Link to={item.link} spy={true} smooth={true}>
                        {item.name}
                      </Link>
                    </Box>
                  );
                })}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Container>
  );
};
