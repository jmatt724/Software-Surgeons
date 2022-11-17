import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useCalendar } from '../../../context/CalendarContext'

function CalendarForm({ handleCategory, handleAmount }) {
    const { calendar, updatePayments } = useCalendar()
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState(0)
      
    const handleInputChange = (e) => { setCategory(e.target.value); handleCategory(e.target.value) }
    const handleAmountChange = (e) => { setAmount(e.target.value); handleAmount(e.target.value) }

    const isError = category === '' || ( amount === 0 || amount === '' )
      
    return (
        <FormControl isInvalid={isError}>
            <FormLabel>Category</FormLabel>
            <Input type='category' value={category} onChange={handleInputChange} />
            {!isError ? (
                <FormHelperText>
                    Enter the category.
                </FormHelperText>
            ) : (
                <FormErrorMessage>Category is required.</FormErrorMessage>
            )}
            <FormLabel>Amount</FormLabel>
            <Input type='amount' value={amount} onChange={handleAmountChange} />
            {!isError ? (
                <FormHelperText>
                    Enter the amount.
                </FormHelperText>
            ) : (
                <FormErrorMessage>Amount is required.</FormErrorMessage>
            )}
        </FormControl>
        )
}


export default CalendarForm