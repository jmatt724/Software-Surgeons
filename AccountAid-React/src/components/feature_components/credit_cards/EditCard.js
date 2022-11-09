import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

function EditCard({ cardID }) {
  return (
    <Flex height={'100%'} width={400} bg={'primary.snow'} ml={6} borderRadius={'lg'} p={4} direction={'column'}
        boxShadow={'2px 4px 10px #818181'}>
            <Heading>{ `Card ID: ${cardID}` }</Heading>
    </Flex>
  )
}

export default EditCard