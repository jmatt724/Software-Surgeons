import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import PersonaModal from './PersonaModal'

function PersonaCard({ label, artifact }) {

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
          <PersonaModal label={label} artifact={artifact}/>
        </Flex>
    </Flex>
  )
}

export default PersonaCard