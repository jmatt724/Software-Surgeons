import{
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    Heading,
    Flex,
} from '@chakra-ui/react'
import React from 'react'

function ArchitectureModal({ label, architecture}){
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleSizeClick = () => {
        onOpen()
    }

    return (
        <>
        <Text mt={3} m={6} color='blue.400' fontSize={'1rem'} 
            _hover={{ cursor: 'pointer' }} 
            onClick={() => handleSizeClick()}
        >
            {'Read more'}
        </Text>
  
        <Modal onClose={onClose} size={'full'} isOpen={isOpen} id={architecture.id}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
                <Heading fontSize={'4rem'}>
                    {`${label}`}
                </Heading>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Flex direction={'row'}>
                <Flex width={'60%'} lineHeight={'10'} direction='column'>
                    <Text fontSize={'1.75rem'}>
                        {architecture.description}
                    </Text>
                    <br />
                </Flex>
                </Flex>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default ArchitectureModal