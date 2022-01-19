import { Box, Center, Stack, Text } from "@chakra-ui/react";

import "./Entourage.css";

const TITLES_COLORS = {
  title: "teal.500",
  subtitle: "teal.400",
};

function Entourage() {
  return (
    <Center
      id="entourage"
      textAlign={"center"}
      flexDirection={"column"}
      color={"white"}
      py={"8rem"}
    >
      <Text
        color={"teal.600"}
        fontFamily={"Amalfi Coast"}
        fontSize={{ base: "3rem", md: "4rem" }}
        mb={"3rem"}
      >
        Entourage
      </Text>

      <Stack
        spacing={10}
        direction={"column"}
        fontWeight={"300"}
        fontSize={{ base: "1rem", md: "1.2rem" }}
      >
        <Stack
          spacing={{ base: 8, md: 20 }}
          direction={{ base: "column", md: "row" }}
        >
          <Box>
            <Text color={TITLES_COLORS.title} fontWeight={"600"}>
              PARENTS OF THE BRIDE
            </Text>
            <Text>
              Mr. Cesar Laran
              <br />
              Mrs. Urbana Laran
            </Text>
          </Box>

          <Box>
            <Text color={TITLES_COLORS.title} fontWeight={"600"}>
              PARENTS OF THE GROOM
            </Text>
            <Text>
              Mr. Alex Daloso
              <br />
              Mrs. Blaisy Daloso
            </Text>
          </Box>
        </Stack>

        <Box>
          <Text
            fontSize={"2xl"}
            fontWeight={"600"}
            mb={"1rem"}
            letterSpacing={3}
            color={TITLES_COLORS.title}
          >
            PRINCIPAL SPONSORS
          </Text>

          <Stack
            spacing={{ base: 8, md: 10 }}
            direction={"row"}
            justifyContent={"center"}
          >
            <Stack spacing={4} direction={"column"} textAlign={"right"}>
              <Text>
                Mrs. Alona Tarala
                <br />
                Mrs. Cynthia Villarin
                <br />
                Mrs. Generosa Golosinda
              </Text>

              <Box>
                <Text fontWeight={"600"} color={TITLES_COLORS.subtitle}>
                  MAID OF HONOR
                </Text>
                <Text>Ms. Kimberly Laran</Text>
              </Box>

              <Box>
                <Text fontWeight={"600"} color={TITLES_COLORS.subtitle}>
                  BRIDESMAIDS
                </Text>
                <Text>
                  Ms. Sherrie Meal Daloso
                  <br />
                  Ms. Catherine Garcia
                  <br />
                  Ms. Letecia Gaum
                </Text>
              </Box>
            </Stack>

            <Stack spacing={4} direction={"column"} textAlign={"left"}>
              <Text>
                Mr. Jhan Madali
                <br />
                Mr. Danilo Consad
                <br />
                Mr. Edwin Genodia
              </Text>

              <Box>
                <Text fontWeight={"600"} color={TITLES_COLORS.subtitle}>
                  BEST MAN
                </Text>
                <Text>Mr. Kobie Lumanta</Text>
              </Box>

              <Box>
                <Text fontWeight={"600"} color={TITLES_COLORS.subtitle}>
                  GROOMSMEN
                </Text>
                <Text>
                  Mr. Rjan Daloso
                  <br />
                  Mr. Lorenz Gaum
                  <br />
                  Mr. Arlon Tarala
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Box>

        <Box>
          <Text
            fontSize={"2xl"}
            fontWeight={"600"}
            mb={"1rem"}
            letterSpacing={3}
            color={TITLES_COLORS.title}
          >
            SECONDARY SPONSORS
          </Text>

          <Stack spacing={4} direction={"column"}>
            <Box>
              <Text fontWeight={"600"} color={TITLES_COLORS.subtitle}>
                CORD
              </Text>
              <Text>
                Mr. Juan Paolo Golosinda
                <br />
                Ms. Glydel Capangpangan
              </Text>
            </Box>

            <Stack spacing={10} direction={"row"} justifyContent={"center"}>
              <Box>
                <Text fontWeight={"600"} color={TITLES_COLORS.subtitle}>
                  CANDLE
                </Text>
                <Text>
                  Ms. Neribeth Juat
                  <br />
                  Mr. Jan Raphael Peralta
                </Text>
              </Box>

              <Box>
                <Text fontWeight={"600"} color={TITLES_COLORS.subtitle}>
                  VEIL
                </Text>
                <Text>
                  Ms. Kristine Laran
                  <br />
                  Mr. Raphael Marco
                </Text>
              </Box>
            </Stack>

            <Stack spacing={5}>
              <Box>
                <Text fontWeight={"600"} color={TITLES_COLORS.subtitle}>
                  RING BEARER
                </Text>
                <Text>Biembo Gaum</Text>
              </Box>

              <Box>
                <Text fontWeight={"600"} color={TITLES_COLORS.subtitle}>
                  BIBLE BEARER
                </Text>
                <Text>Ace Ford Garcia</Text>
              </Box>

              <Box>
                <Text fontWeight={"600"} color={TITLES_COLORS.subtitle}>
                  COIN BEARER
                </Text>
                <Text>Chloe Junio</Text>
              </Box>

              <Box>
                <Text fontWeight={"600"} color={TITLES_COLORS.subtitle}>
                  FLOWER GIRLS
                </Text>
                <Text>
                  Nina Athalia Tatad
                  <br />
                  Kylie LJ Dela Cruz
                  <br />
                  Mary Jane Penales
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Center>
  );
}

export default Entourage;
