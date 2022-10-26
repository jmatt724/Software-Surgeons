import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BALANCE } from '../components/feature_components/bank_balance/balanceData'
import BalanceDisplay from '../components/feature_components/bank_balance/BalanceDisplay'
import BalanceStat from '../components/feature_components/bank_balance/BalanceStat'
import CreditCard from '../components/feature_components/credit_cards/CreditCard'
import Expenses from '../components/feature_components/dashboard/Expenses'
import SideBar from '../components/feature_components/dashboard/SideBar'
import YourCards from '../components/feature_components/dashboard/YourCards'
import BudgetStatCard from '../components/feature_components/stats/BudgetStatCard'

function Dashboard() {
    return (
        <Flex width={'100vw'} height={'100vh'} bg={'primary.snow'} direction={'row'}>
            <SideBar />
            <Flex direction={'column'} width={'95%'}>
                <Flex height={'20%'} mt={6}>
                    <Flex width={500} height={'100%'} direction={'column'} p={10}>
                        <Heading fontSize={'3rem'}>Dashboard</Heading>
                        <Text fontSize={'1.5rem'}>Welcome Back, User</Text>
                    </Flex>
                    <Flex pt={4}>
                        <BalanceStat />
                    </Flex>
                </Flex>
                <Flex height={'35%'} p={4}>
                    <Flex>
                        <YourCards />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Dashboard