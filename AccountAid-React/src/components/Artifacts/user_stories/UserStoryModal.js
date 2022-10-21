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
    SimpleGrid,
  } from '@chakra-ui/react'
import React from 'react'

function UserStoryModal({ category, artifact, persona }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const scenarios = artifact.scenarios
    console.log('SCENARIOS', scenarios)
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
                <SimpleGrid columns={2} spacingX='20px' spacingY='20px' mt={8}>
                  {scenarios.map((scenario) => 
                    <Flex width={'90%'} lineHeight={'10'} direction='column'>
                      <Heading>{`${scenario.label} - ${scenario.title}`}</Heading>
                      {scenario.stories.map((story) => 
                          <Text key={story.id} fontSize={'2rem'} mt={10}>
                              {`${story.label} ${story.description}`}
                          </Text>
                      )}
                    </Flex>
                  )}
                </SimpleGrid>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}
export default UserStoryModal