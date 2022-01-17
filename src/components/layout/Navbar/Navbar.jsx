import { Container, Flex, useDisclosure } from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import LoginModal from "../../LoginModal";
import TokenContext from "../../TokenContext";
import { NavbarMobile } from "./NavbarMobile";
import { NavbarTabletUp } from "./NavbarTabletUp";

const NAVBAR_ITEMS = [
  { id: 0, name: "WHEN & WHERE", link: "when-and-where" },
  { id: 1, name: "OUR GALLERY", link: "our-gallery" },
  { id: 3, name: "RSVP", link: "rsvp" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { token, setToken, setUserData } = useContext(TokenContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    setToken(null);
    setUserData(null);
    sessionStorage.clear();
  };

  return (
    <Container
      py={{ base: "1rem", md: "2rem" }}
      px={{ base: "0.5rem", md: "3rem" }}
      bgGradient={isScrolled ? "linear(to-r, teal.300, blue.400)" : ""}
      position={"fixed"}
      width={"100%"}
      maxW={"none"}
      zIndex={"10"}
    >
      <Flex display={{ base: "none", md: "flex" }} width={"100%"}>
        <NavbarTabletUp
          onOpen={onOpen}
          token={token}
          logout={handleLogout}
          navbarItems={NAVBAR_ITEMS}
        />
      </Flex>
      <Flex display={{ base: "flex", md: "none" }} width={"100%"}>
        <NavbarMobile
          onOpen={onOpen}
          token={token}
          logout={handleLogout}
          navbarItems={NAVBAR_ITEMS}
        />
      </Flex>

      <LoginModal isOpen={isOpen} onClose={onClose} />
    </Container>
  );
}
