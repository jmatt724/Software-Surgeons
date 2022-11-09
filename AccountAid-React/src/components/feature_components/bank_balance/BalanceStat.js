import { Flex } from '@chakra-ui/react'
import React from 'react'
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
} from '@chakra-ui/react'
import { useUser } from '../../../context/UserContext'

function BalanceStat() {
    const { user } = useUser()
    return (
      <Flex m={4}>
          <Stat p={2} height={100} width={300} borderRadius={'md'} bg={'primary.mint'}>
            <Flex width={'100%'} justify='center'>
              <StatLabel fontSize={'1.5rem'}>Current Balance</StatLabel>
            </Flex>
            <Flex width={'100%'} height={45} justify='center' align='center' >
              <StatNumber fontSize={'2.5rem'}>{`$${parseFloat(user.balance).toFixed(2)}`}</StatNumber>
            </Flex>
          </Stat>
      </Flex>
    )
}

export default BalanceStat