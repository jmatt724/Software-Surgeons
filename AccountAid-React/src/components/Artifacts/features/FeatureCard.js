import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import FeatureModal from './FeatureModal'

function FeatureCard({ artifact }) {
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
          <Heading m={6}>{artifact.category}</Heading>
        </Flex>
        <Flex height={50} justify='flex-start' align='center'>
          <FeatureModal artifact={artifact}/>
        </Flex>
    </Flex>
  )
}

export default FeatureCard