import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'

function CalendarFormModal({ date }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Payment on {date}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button variant='ghost'>Add Payment</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )  
}

export default CalendarFormModal