import {
  CheckboxGroup,
  Checkbox,
  Text,
  Button,
  Flex,
  Center,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import TokenContext from "../TokenContext";

import "./RsvpForm.css";

export default function RsvpForm() {
  const [checkBoxState, setCheckboxState] = useState();
  const [isSubmitting, setSubmitting] = useState(false);
  const { token, userData } = useContext(TokenContext);
  const toast = useToast();

  console.log(checkBoxState);

  const handleCheckboxChange = (value) => {
    const lastElement = value[value.length - 1];
    setCheckboxState(lastElement);
  };

  useEffect(() => {
    if (userData && userData.response !== null) {
      setCheckboxState(userData.response.toString());
    }
  }, [userData]);

  const handleSubmitResponse = () => {
    setSubmitting(true);

    axios
      .post(
        `${process.env.REACT_APP_API_ENDPOINT}/guest/${userData.id}`,
        {
          response: parseInt(checkBoxState),
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        const response = res.data.user.response;

        sessionStorage.setItem("userData", JSON.stringify(res.data.user));

        if (response === 0) {
          showToast(
            "Response Recieved",
            "We thank you for your quick respone.",
            "info"
          );
        } else if (response === 1) {
          showToast(
            "Response Recieved",
            "We thank you for your quick respone. See you!",
            "success"
          );
        }
        setSubmitting(false);
      })
      .catch((error) => {
        showToast(error.response.data.error, "Please login again.", "error");
        setSubmitting(false);
      });
  };

  const showToast = (title, description, status) => {
    toast({
      title: title,
      description: description,
      position: "top",
      status: status,
      duration: 3000,
      isClosable: true,
    });
  };

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
          <Checkbox value="1">Accept with pleasure!</Checkbox>
          <Checkbox value="0" mt={"0.5rem"}>
            Decline with regrets.
          </Checkbox>
          <Button
            colorScheme="yellow"
            variant="solid"
            mt={"1.5rem"}
            onClick={handleSubmitResponse}
            isLoading={isSubmitting}
            isDisabled={!checkBoxState}
          >
            Send
          </Button>
        </Flex>
      </CheckboxGroup>
    </Center>
  );
}
