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

function ScenarioModal({ category, artifact, persona }) {
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
  
        <Modal onClose={onClose} size={'full'} isOpen={isOpen} id={artifact.id}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
                <Heading fontSize={'4rem'}>
                    {`${artifact.label} - ${artifact.persona}`}
                </Heading>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Flex direction={'row'}>
                <Flex width={'60%'} lineHeight={'10'} direction='column'>
                    <Text fontSize={'1.75rem'}>
                        {artifact.description}
                    </Text>
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
export default ScenarioModal