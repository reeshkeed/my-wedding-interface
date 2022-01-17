import {
  CheckboxGroup,
  Checkbox,
  Text,
  Button,
  Flex,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";

import "./RsvpForm.css";

export default function RsvpForm() {
  const handleCheckboxChange = (value) => {
    const lastElement = value[value.length - 1];

    setCheckboxState(lastElement);
  };

  const [checkBoxState, setCheckboxState] = useState();

  return (
    <Center
      className="card-rsvp-form"
      position={"relative"}
      display={"flex"}
      flexDirection={"column"}
      justify={"center"}
      align={"center"}
      w={"full"}
      borderRadius={"md"}
      px={{ base: "1rem", md: "2rem" }}
      pt={{ base: "4rem", md: "3rem" }}
      pb={{ base: "9rem", md: "8rem" }}
      boxShadow={"2xl"}
      color={"white"}
    >
      <Text
        fontSize={"5xl"}
        fontFamily={"Cormorant Garamond"}
        fontWeight={"600"}
        color={"yellow.400"}
      >
        RSVP
      </Text>

      <CheckboxGroup
        colorScheme="yellow"
        isNative
        onChange={handleCheckboxChange}
        value={checkBoxState}
      >
        <Text
          fontSize={"lg"}
          fontWeight={"300"}
          mb={{ base: "1rem", md: "2rem" }}
          as="i"
        >
          Please respond by January 22, 2022
        </Text>

        <Flex direction={"column"}>
          <Checkbox value="0">Accepts with pleasure!</Checkbox>
          <Checkbox value="1" mt={"0.5rem"}>
            Declines with regrets.
          </Checkbox>
          <Button colorScheme="yellow" variant="solid" mt={"1.5rem"}>
            Send
          </Button>
        </Flex>
      </CheckboxGroup>
    </Center>
  );
}
