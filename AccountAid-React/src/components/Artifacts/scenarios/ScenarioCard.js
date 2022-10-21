import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import ScenarioModal from './ScenarioModal'

function ScenarioCard({ category, artifact, persona }) {

  return (
    <Flex
        width={350}
        height={200}
        bg={'white'}
        borderRadius={'md'}
        boxShadow={'md'}
        id={artifact.id}
        direction='column'
    >
        <Flex direction='row'>
          <Heading m={6}>{artifact.label}</Heading>
        </Flex>
        <Flex width={300} textAlign={'left'} ml={6}>
          <Text fontSize={'1.25rem'}>{artifact.title}</Text>
        </Flex>
        <Flex height={50} justify='flex-start' align='center'>
          <ScenarioModal category={category} artifact={artifact} persona={persona}/>
        </Flex>
    </Flex>
  )
}

export default ScenarioCard