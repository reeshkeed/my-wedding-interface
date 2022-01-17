import {
  Box,
  Center,
  Text,
  Heading,
  Flex,
  Stack,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import { useEffect, useContext, useState } from "react";
import TokenContext from "../../components/TokenContext";

import RsvpForm from "../../components/Rsvp";
import "./Rsvp.css";

export default function Rsvp() {
  const { userData } = useContext(TokenContext);
  const [userAccompanies, setUserAccompanies] = useState([]);

  useEffect(() => {
    if (userData) {
      setUserAccompanies(userData.seat_count_names.split(", "));
    }
  }, [userData]);

  return (
    <Center
      id="rsvp"
      height={{ base: "", md: "100vh" }}
      px={"1rem"}
      bgGradient={"linear(to-tr, white, gray.50)"}
    >
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(5, 1fr)"
        width={"100%"}
        px={{
          base: "0rem",
          md: "2rem",
          lg: "4rem",
          xl: "6rem",
          "2xl": "20rem",
        }}
        my="5rem"
        gap={4}
      >
        <GridItem colSpan={{ base: 5, md: 3 }} mb={{ base: "1rem", md: "0" }}>
          <Flex
            flexDirection={"column"}
            justify={"center"}
            as={Stack}
            spacing={4}
            height={"100%"}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "4xl", md: "6xl" }}
              lineHeight={"110%"}
              color={"yellow.400"}
              zIndex={"4"}
              mb={"1rem"}
            >
              Will you{" "}
              <Text
                as={"span"}
                color={"black"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "yellow.400",
                  zIndex: -1,
                }}
              >
                join us?
              </Text>
            </Heading>

            <Text fontSize={{ base: "2xl", md: "3xl" }} mb={"1rem"}>
              Hi, {userData ? userData.name : ""}!
              <br />
              We have reserved {userData ? userData.seat_count : ""} seat(s) for
              you.
            </Text>

            <Text fontSize={{ base: "lg" }} as="i">
              Due to COVID-19 restrictions and venue rules, guest count are
              limited in the location.
            </Text>

            <Box>
              <Text mb={"0.5rem"}>
                Only name(s) that is listed below can come with you:
              </Text>

              {userAccompanies.map((item) => {
                return (
                  <Text fontWeight={"600"} key={item}>
                    {item}
                  </Text>
                );
              })}
            </Box>
          </Flex>
        </GridItem>

        <GridItem colSpan={{ base: 5, md: 2 }}>
          <RsvpForm />
        </GridItem>
      </Grid>
    </Center>
  );
}
