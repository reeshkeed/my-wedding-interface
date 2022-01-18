import { Box, Center, Text } from "@chakra-ui/react";

function HomeLoggedOut() {
  return (
    <Center display={"flex"} flexDirection={"column"} height={"100vh"}>
      <Text
        fontSize={{ base: "1.4rem", md: "1.6rem", lg: "2rem" }}
        fontWeight={400}
        className="font-cormorant"
        fontFamily={"Cormorant Garamond, serif"}
      >
        We're Getting Married!
      </Text>
      <Box>
        <Text
          fontFamily={"Amalfi Coast"}
          fontSize={{
            base: "2.1rem",
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
        fontSize={{ base: "1.4rem", md: "1.6rem", lg: "2rem" }}
        fontWeight={200}
      >
        1.30.22
      </Text>
    </Center>
  );
}

export default HomeLoggedOut;
