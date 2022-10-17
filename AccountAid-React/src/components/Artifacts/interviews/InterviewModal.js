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
import { INTERVIEW_QUESTIONS } from '../../../data/constants'

function InterviewModal({ artifact }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const questions = INTERVIEW_QUESTIONS
    const answers = artifact.answers
  
    const handleSizeClick = () => {
      onOpen()
    }

    const formatAnswer = (answer) => {
        const splitAnswers = answer.split(".")
        return splitAnswers
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
                    {artifact.label}
                </Heading>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Flex width={'95%'} direction={'column'} mt={10}>
                        {questions.map((question, index) => 
                            <Flex key={index} direction={'column'} margin={0}>
                                <Heading
                                    fontSize={'2.25rem'} 
                                    fontWeight={'bold'}
                                    mt={4}
                                >
                                    {question}
                                </Heading>
                                {(index===3 || index===4)
                                    ? formatAnswer(answers[index]).map((element) => 
                                        <Heading fontSize={'1.75rem'} fontWeight={'normal'} mt={2}>
                                            {element}
                                            <br />
                                        </Heading>
                                      )
                                    : <Heading fontSize={'1.75rem'} fontWeight={'normal'} mt={2}>
                                        {answers[index]}
                                      </Heading>
                                }
                            </Flex>
                        )}
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
export default InterviewModal