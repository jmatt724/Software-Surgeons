import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function BalanceDisplay({ balance }) {
  return (
    <Flex
        width={500}
        height={200}
        borderRadius={'md'}
        bg={'primary.main'}
        direction={'column'}
        p={4} 
    >
        <Text fontSize={'1.25rem'}>Your Balance</Text>
        <Text fontSize={'3rem'}>{balance}</Text>
    </Flex>
  )
}

export default BalanceDisplay