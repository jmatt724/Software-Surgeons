import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import ArtifactModal from './ArtifactModal'

function ArtifactCard({ category, artifact }) {
  //const description = artifact.description.substring()

  return (
    <Flex
        width={350}
        height={275}
        bg={'white'}
        borderRadius={'md'}
        boxShadow={'md'}
        id={artifact.id}
        direction='column'
    >
        <Flex direction='row'>
          <Heading m={6}>{artifact.name}</Heading>
        </Flex>
        <Flex width={300} textAlign={'left'} ml={6}>
          <Text fontSize={'1.25rem'}>{artifact.outline}</Text>
        </Flex>
        <Flex height={50} justify='flex-start' align='center'>
          <ArtifactModal category={category} artifact={artifact}/>
        </Flex>
    </Flex>
  )
}

/*
<Text mt={3} m={6} color='blue.400' fontSize={'1rem'} _hover={{ cursor: 'pointer' }}>{'Read more'}</Text> 
*/

export default ArtifactCard