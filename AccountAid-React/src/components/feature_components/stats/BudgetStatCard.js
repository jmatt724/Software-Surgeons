import React from 'react'
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    Flex,
} from '@chakra-ui/react'


function BudgetStatCard({ label, amount, dateRange, indicator, percent }) {
  return (
    <Flex m={4}>
        <Stat p={2} height={175} width={600} borderRadius={'md'} bg={'primary.snow'}>
            <Flex direction={'row'}>
            <StatLabel fontSize={'1.75rem'}>{label}</StatLabel>
            {indicator &&
                <StatHelpText fontSize={'1.5rem'} ml={2} mt={1}>
                <StatArrow type={indicator} />
                    { `${percent}%` || '23.36%' }
                </StatHelpText>
            }
            </Flex>
            <StatNumber fontSize={'3rem'}>{`$${amount}`}</StatNumber>
            <StatHelpText fontSize={'1.25rem'}>{dateRange}</StatHelpText>
        </Stat>
    </Flex>
  )
}

export default BudgetStatCard