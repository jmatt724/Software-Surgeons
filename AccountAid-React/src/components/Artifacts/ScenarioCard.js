import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import ArtifactModal from './ArtifactModal'
import ScenarioModal from './ScenarioModal'

function ScenarioCard({ category, artifact, persona }) {
  //const description = artifact.description.substring()

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

/*
<Text mt={3} m={6} color='blue.400' fontSize={'1rem'} _hover={{ cursor: 'pointer' }}>{'Read more'}</Text> 
*/

export default ScenarioCard