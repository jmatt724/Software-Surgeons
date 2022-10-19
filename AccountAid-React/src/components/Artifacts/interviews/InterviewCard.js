import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import InterviewModal from './InterviewModal'

function InterviewCard({ artifact }) {

  return (
    <Flex
        width={350}
        height={175}
        bg={'white'}
        borderRadius={'md'}
        boxShadow={'md'}
        id={artifact.id}
        direction='column'
    >
        <Flex direction='row'>
          <Heading m={6}>{artifact.label}</Heading>
        </Flex>
        <Flex height={50} justify='flex-start' align='center'>
          <InterviewModal artifact={artifact}/>
        </Flex>
    </Flex>
  )
}

export default InterviewCard