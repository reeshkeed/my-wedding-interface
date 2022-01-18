import { Box, Center, Stack, Text } from "@chakra-ui/react";

function HomeLoggedIn() {
  return (
    <Center display={"flex"} flexDirection={"column"} height={"100vh"}>
      <Stack spacing={3} direction={"column"}>
        <Text
          fontSize={{ base: "1rem", sm: "1.3rem", md: "1.4rem", xl: "1.6rem" }}
          fontWeight={400}
        >
          BY THE GRACE OF GOD <br />
          AND WITH THE BLESSINGS OF OUR PARENTS
        </Text>
        <Stack
          spacing={5}
          direction={"row"}
          display={"flex"}
          alignItems={"center"}
          fontWeight={"100"}
          justifyContent={"center"}
          fontSize={{ base: "1rem", sm: "1.3rem", md: "1.4rem", xl: "1.6rem" }}
        >
          <Text>
            Mr. Cesar Laran
            <br />
            Mrs. Urbana Laran
          </Text>

          <Text>and</Text>

          <Text>
            Mr. Alex Daloso
            <br />
            Mrs. Blaisy Daloso
          </Text>
        </Stack>

        <Text
          fontSize={{ base: "1rem", sm: "1.3rem", md: "1.4rem", xl: "1.6rem" }}
        >
          We,
        </Text>

        <Box>
          <Text
            fontFamily={"Amalfi Coast"}
            fontSize={{
              base: "2.1rem",
              sm: "2.3rem",
              md: "2.7rem",
              lg: "3.4rem",
              xl: "4rem",
              "2xl": "5.4rem",
            }}
            my={{
              base: "2rem",
              md: "2.5rem",
              lg: "3.4rem",
              xl: "4rem",
              "2xl": "5.4rem",
            }}
          >
            Shane & Girish
          </Text>
        </Box>

        <Text
          fontSize={{ base: "1rem", sm: "1.3rem", md: "1.4rem", xl: "1.6rem" }}
          fontWeight={100}
        >
          Request the honor of your presence to share in <br />
          the beginning of our new life together as we unite in
          <br /> the holy sacrament of matrimony
        </Text>
      </Stack>
    </Center>
  );
}

export default HomeLoggedIn;
