import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import ArchitectureModal from './ArchitectureModal'
function ArchitectureCard({ architecture }) {

  return (
    <Flex
        width={350}
        height={175}
        bg={'white'}
        borderRadius={'md'}
        boxShadow={'md'}
        id={architecture.id}
        direction='column'
    >
        <Flex direction='row'>
          <Heading m={6}>{architecture.label}</Heading>
          <ArchitectureModal label={architecture.label} architecture={architecture}/>
        </Flex>
    </Flex>
  )
}

export default ArchitectureCard