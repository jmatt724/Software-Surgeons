import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { useUser } from '../../../context/UserContext'
import BudgetStatCard from '../stats/BudgetStatCard'

function Expenses() {
    const { user } = useUser()
    const expenses = user.expenses
  return (
    <Flex direction={'column'} align={'center'}>
        <Heading>{'EXPENSES'}</Heading>
        {expenses.map((expense) => 
            <BudgetStatCard 
                label={expense.category}
                amount={expense.amount}
                dateRange={expense.date}
                percent={'26'}
            />
        )}
    </Flex>
  )
}

export default Expenses