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
import { useState } from 'react'

function ArtifactModal({ category, artifact }) {
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
                    {`${category} ${artifact.id} - ${artifact.name}`}
                </Heading>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Flex direction={'row'}>
                <Flex width={'60%'} lineHeight={'10'} direction='column'>
                    <Text fontSize={'1.75rem'}>
                        {artifact.description}
                    </Text>
                    <br />
                    <Text fontSize={'1.75rem'}>
                        {artifact.idea}
                    </Text>
                </Flex>
                <Flex width={700} height={600} ml={20}>
                    <img src={process.env.PUBLIC_URL+`images/personas/${artifact.img}`} alt={artifact.name}></img>
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
export default ArtifactModal
