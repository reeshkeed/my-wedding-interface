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
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

import { useRef, useContext, useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
import axios from "axios";
import TokenContext from "./TokenContext";

const formSchema = object({
  username: string().required().label("Username"),
  password: string().min(4).max(4).required().label("Password"),
});

function LoginModal(props) {
  const initialRef = useRef();
  const { setToken, setUserData } = useContext(TokenContext);
  const [formError, setFormError] = useState(false);

  useEffect(() => {
    setFormError(false);
  }, [props.isOpen]);

  const handleLogin = (values, actions) => {
    setFormError(false);

    axios
      .post(`${process.env.REACT_APP_API_ENDPOINT}/login`, values)
      .then((res) => {
        setToken(res.data.token);
        sessionStorage.setItem("token", res.data.token);

        getUserDetails(res.data.token, actions);
      })
      .catch((error) => {
        setFormError(error.response.data.error);

        actions.setSubmitting(false);
      });
  };

  const getUserDetails = (token, actions) => {
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/guest`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUserData(res.data.user);
        sessionStorage.setItem("userData", JSON.stringify(res.data.user));

        props.onClose();
        actions.setSubmitting(false);
      })
      .catch((error) => {
        setFormError(error.response.data.error);
        actions.setSubmitting(false);
      });
  };

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
                {formError ? (
                  <Alert
                    status="error"
                    color={"red"}
                    mb={"1rem"}
                    rounded={"md"}
                  >
                    <AlertIcon />
                    {formError}
                  </Alert>
                ) : null}

                <Text mb={"1rem"}>
                  Kindly enter the username and 4-character password we sent
                  you.
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
                        <Input
                          {...field}
                          id="password"
                          type={"password"}
                          placeholder="****"
                        />
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

export default LoginModal;
