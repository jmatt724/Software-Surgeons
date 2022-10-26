import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useUser } from '../../../context/UserContext'
import { sortTransaction } from './sortingTransactions'
import TransactionCard from './TransactionCard'
import ViewAll from './ViewAll'

function MyTransactions() {
    const { user } = useUser()
    const transactions = user.transactions

    const sorted = sortTransaction(transactions, user.sortState)

    return (
        <Flex height={'102%'} width={1000} p={2} direction={'column'}>
            <Flex direction={'row'} justify={'space-between'} align={'center'} p={2} height={100}>
                <Heading fontSize={'2rem'}>{'My Transactions'}</Heading>
                <ViewAll />
            </Flex>
            
            <Flex height={'100%'} bg={'primary.snow'} mt={2} borderRadius={'md'} p={4} direction={'column'}
                boxShadow={'2px 4px 10px #818181'}
            >
                    {transactions.map((transaction, index) => 
                        (index<4) &&
                        <TransactionCard
                            category={transaction.category}
                            date={transaction.date}
                            amount={transaction.amount}
                            recipiant={transaction.recipiant}
                            sender={transaction.sender}
                            isAll={false}
                        />
                    )}
            </Flex>
        </Flex>
    )
}

export default MyTransactions