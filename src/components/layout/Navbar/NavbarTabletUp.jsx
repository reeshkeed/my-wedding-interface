import { Box, Container, Image } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-scroll";
import logo from "../../../assets/logo.png";
import { NavbarButton } from "./NavbarButton";
import TokenContext from "../../TokenContext";

export const NavbarTabletUp = (props) => {
  const { userData } = useContext(TokenContext);
  return (
    <Container
      justifyContent={"space-between"}
      alignItems={"center"}
      display={"flex"}
      width={"100%"}
      maxW={"none"}
    >
      <Box
        className="d-flex v-center"
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "flex-start", md: "center" }}
      >
        <Link className="nav-link" to="home" spy={true} smooth={true}>
          <Image className="logo" src={logo} />
        </Link>

        {userData &&
          props.navbarItems.map((item) => {
            return (
              <Link
                className="nav-link"
                key={item.id}
                to={item.link}
                spy={true}
                smooth={true}
              >
                {item.name}
              </Link>
            );
          })}
      </Box>

      <NavbarButton
        onOpen={props.onOpen}
        token={props.token}
        logout={props.logout}
      />
    </Container>
  );
};
