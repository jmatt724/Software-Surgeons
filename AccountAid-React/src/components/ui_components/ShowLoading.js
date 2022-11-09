import { Flex, Spinner, Text } from '@chakra-ui/react'
import React from 'react'

function ShowLoading() {

  return (
      <Flex direction={'column'} justify='center' align='center' width={'100vw'} height={'100vh'} bg={'gray.100'}>
          <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl'
          />
          <Text>
              Loading...
          </Text>
      </Flex>
  )
}

export default ShowLoading