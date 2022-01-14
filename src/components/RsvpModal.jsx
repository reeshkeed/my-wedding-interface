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
} from '@chakra-ui/react';

import { useRef } from 'react';

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
      <ModalContent mx={'1rem'} overflow={'hidden'}>
        <ModalHeader bg={'gray.50'}>Enter Code</ModalHeader>
        <ModalCloseButton />

        <ModalBody py={'1.5rem'}>
          <Text mb={'1rem'}>
            Kindly enter the 4 digit code we just sent you.
          </Text>

          <Stack direction={'column'} spacing={'3'}>
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input placeholder="Username" ref={initialRef} size="lg" />
            </FormControl>

            <FormControl id="code">
              <FormLabel>4 Digit Code</FormLabel>
              <Input placeholder="4 Digit Code" size="lg" />
            </FormControl>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Stack direction={'row'} spacing={'3'}>
            <Button variant="ghost" onClick={props.onClose}>
              Close
            </Button>
            <Button colorScheme="teal" mr={3}>
              Enter
            </Button>
          </Stack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default RsvpModal;
