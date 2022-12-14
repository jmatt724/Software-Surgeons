import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

function UserSettings() {
  return (
    <Flex width={'100vw'} height={'100vh'} bg={'primary.snow'} direction={'row'}>
        <Flex width={'90vw'} height={'100%'} direction={'column'} p={10}>
            <Heading fontSize={'3rem'}>User Settings</Heading>
        </Flex>
    </Flex>
  )
}

export default UserSettings