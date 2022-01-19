import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Center,
} from "@chakra-ui/react";

import { Link } from "react-scroll";
import Logo from "../../../assets/logo.png";
import "./Footer.css";

const NAVBAR_ITEMS = [
  { id: 0, name: "Home", link: "when-and-where" },
  { id: 1, name: "When & Where", link: "when-and-where" },
  { id: 2, name: "Our Gallery", link: "our-gallery" },
];

export default function SmallWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Center flexDirection={{ base: "column", md: "row" }}>
          <Stack direction={{ base: "column", md: "row" }} spacing={6}>
            <Image
              src={Logo}
              width={"3.5rem"}
              height={"auto"}
              alignSelf={"center"}
            />

            <Stack direction={"row"} alignItems={"center"} spacing={6}>
              {NAVBAR_ITEMS.map((item) => {
                return (
                  <Link
                    className="links"
                    to={item.link}
                    key={item.id}
                    spy={true}
                    smooth={true}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </Stack>
          </Stack>
        </Center>
        <Text color={"gray.400"} fontSize={{ base: "0.8rem", md: "1rem" }}>
          &copy; 2022 Shane &amp; Girish. All rights reserved. Est 2016.
        </Text>
      </Container>
    </Box>
  );
}
