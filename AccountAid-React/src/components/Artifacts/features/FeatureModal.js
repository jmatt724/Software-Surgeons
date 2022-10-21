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
    Box,
    VStack,
  } from '@chakra-ui/react'
import React from 'react'

function FeatureModal({ category, artifact, persona }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const features = artifact.features
  
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
                    {`Feature List - ${artifact.category}`}
                </Heading>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Flex direction={'row'}>
                <Flex width={'60%'} lineHeight={'10'} direction='column'>
                    {features.map((feature) => 
                      <Box width={1800}>
                        <Text key={feature.id} fontSize={'2.5rem'} mt={10} mb={6} fontWeight={'bold'}>
                            {`${feature.label}: `}
                        </Text>
                        <Flex direction={'row'} spacing={10}>
                          <Flex direction={'column'} bg={'primary.secondary'} p={10}>
                          <Text key={feature.id} fontSize={'2rem'} >
                              {`Description:`}
                          </Text>
                          {feature.description.map((desc, index) => 
                              <Text key={desc} fontSize={'2rem'} mt={10}>
                                {`${index}. ${desc}`}
                              </Text>
                          )}
                          </Flex>
                        <Flex direction={'row'} spacing={10} >
                          <Flex spacing={8} direction={'column'} bg={'primary.snow'} p={10} width={600}>
                            <Text key={feature.id} fontSize={'2rem'} >
                              {`Constraints:`}
                            </Text>
                            <Text fontSize={'2rem'} mt={10}>
                                  {`${feature.constraints}`}
                            </Text>
                          </Flex>
                          <Flex spacing={8} direction={'column'} bg={'primary.main'} p={10} width={600}>
                            <Text key={feature.id} color={'white'} fontSize={'2rem'}>
                                {`Comments:`}
                            </Text>
                            <Text fontSize={'2rem'} color={'white'} mt={10}>
                                  {`${feature.comments}`}
                            </Text>
                          </Flex>
                        </Flex>
                        </Flex>
                      </Box>
                    )}
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
export default FeatureModal