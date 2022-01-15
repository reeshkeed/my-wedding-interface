import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Stack,
  FormErrorMessage,
} from "@chakra-ui/react";

import { useRef } from "react";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
import axios from "axios";

const formSchema = object({
  username: string().required().label("Username"),
  password: string().min(4).max(4).required().label("Password"),
});

function RsvpModal(props) {
  const initialRef = useRef();

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      initialFocusRef={initialRef}
      isCentered
    >
      <ModalOverlay />
      <ModalContent mx={"1rem"} overflow={"hidden"}>
        <ModalHeader bg={"gray.50"}>Login</ModalHeader>
        <ModalCloseButton />

        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={handleLogin}
          validationSchema={formSchema}
        >
          {(props) => (
            <Form>
              <ModalBody py={"1.5rem"}>
                <Text mb={"1rem"}>
                  Kindly enter the 4 digit password we just sent you.
                </Text>

                <Stack direction={"column"} spacing={"3"}>
                  <Field name="username">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.username && form.touched.username
                        }
                      >
                        <FormLabel htmlFor="username">Username</FormLabel>
                        <Input
                          {...field}
                          id="username"
                          placeholder="Username"
                          ref={initialRef}
                        />
                        <FormErrorMessage>
                          {form.errors.username}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="password">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.password && form.touched.password
                        }
                      >
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input {...field} id="password" placeholder="XXXX" />
                        <FormErrorMessage>
                          {form.errors.password}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Stack>
              </ModalBody>

              <ModalFooter>
                <Stack direction={"row"} spacing={"3"}>
                  <Button variant="ghost" onClick={props.onClose}>
                    Close
                  </Button>
                  <Button
                    colorScheme="teal"
                    mr={3}
                    type="submit"
                    isLoading={props.isSubmitting}
                  >
                    Enter
                  </Button>
                </Stack>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
}

function handleLogin(values, actions) {
  // setTimeout(() => {
  //   alert(JSON.stringify(values, null, 2));
  //   actions.setSubmitting(false);
  // }, 1000);

  // values.preventDefault();

  axios
    .post(`${process.env.REACT_APP_API_ENDPOINT}/login`, values)
    .then((res) => {
      setToken(res.data.token);

      actions.setSubmitting(false);

      window.location.reload();
    });
}

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
  console.log(sessionStorage.getItem("token"));
}

export default RsvpModal;
