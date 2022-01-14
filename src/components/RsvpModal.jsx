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

import { Formik, Form, Field } from "formik";

import { useRef } from "react";

import { object, string } from "yup";

const formSchema = object({
  username: string().required().label("Username"),
  code: string().min(4).max(4).required().label("Code"),
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
        <ModalHeader bg={"gray.50"}>Enter Code</ModalHeader>
        <ModalCloseButton />

        <Formik
          initialValues={{ username: "", code: "" }}
          onSubmit={handleLogin}
          validationSchema={formSchema}
        >
          {(props) => (
            <Form>
              <ModalBody py={"1.5rem"}>
                <Text mb={"1rem"}>
                  Kindly enter the 4 digit code we just sent you.
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
                        />
                        <FormErrorMessage>
                          {form.errors.username}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="code">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.code && form.touched.code}
                      >
                        <FormLabel htmlFor="code">Code</FormLabel>
                        <Input {...field} id="code" placeholder="XXXX" />
                        <FormErrorMessage>{form.errors.code}</FormErrorMessage>
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
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  }, 1000);
}

export default RsvpModal;
