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
    Text,
    Heading,
    Flex,
  } from '@chakra-ui/react'
import React from 'react'
import AdVideo from './AdVideo'

function AdVideoModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const handleSizeClick = () => {
      onOpen()
    }
  
    return (
      <>
        <Text ml={8} color='blue.400' fontSize={'1.25rem'} 
            _hover={{ cursor: 'pointer' }} 
            onClick={() => handleSizeClick()}
        >
            {'Add Video'}
        </Text>
  
        <Modal onClose={onClose} size={'full'} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
                <Heading fontSize={'4rem'}>
                    {`Ad Video`}
                </Heading>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Flex justify={'center'} align={'center'}>
                    <AdVideo />
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
export default AdVideoModal