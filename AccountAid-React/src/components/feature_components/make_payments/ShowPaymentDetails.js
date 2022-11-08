import { Box, Button, Flex, Input, InputGroup, InputLeftElement, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useUser } from '../../../context/UserContext'
import { v4 as uuid } from 'uuid'; // library that generates random ID numbers
import getCurrentDate from '../calendar/getCurrentDate';
import { monthNames } from '../../../data/calendarData';

function ShowPaymentDetails({ reciever }) {
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState('0.00')
    const [description, setDescription] = useState('')

    const { addTransaction } = useUser()

    const handleSubmit = () => {
        const { day, month, year } = getCurrentDate()
        const today = `${monthNames[month]} ${day}, ${year}`

        const payment = {
            paymentID: uuid(),
            userID: reciever.id,
            recipiant: reciever,
            sender: 'Me',
            date: today,
            category: category,
            amount: amount
        }
        addTransaction(payment)
        console.log('Payment', payment)
    }

    const handleCategory = (e) => {setCategory(e.target.value)}
    const handleAmount = (e) => {setAmount(e.target.value)}
    const handleDescription = (e) => {setDescription(e.target.value)}

  return (
    <Flex justify={'flex-start'} direction={'column'} width={'100%'}>
        <Flex justify='flex-start' align='center'>
            <Text fontSize={'2rem'} mb={4}>Pay: {reciever.name}</Text>
        </Flex>
        <Stack direction={["column"]} spacing={'24px'}>
        <Box>
            <Text mb='8px' fontSize={'1.25rem'}>Enter Category:</Text>
            <Input
                value={category}
                onChange={handleCategory}
                placeholder='Category'
                size='lg'
                isRequired
            />
        </Box>
        <Box>
            <Text mb='8px' fontSize={'1.25rem'}>Enter Amount:</Text>
            <InputGroup>
                <InputLeftElement
                    mt={1}
                    pointerEvents='none'
                    color='gray.600'
                    fontSize='1.4em'
                    children='$'
                />
                <Input
                    value={amount}
                    onChange={handleAmount}
                    placeholder='Amount'
                    size='lg'
                    isRequired
                />
            </InputGroup>
        </Box>
        <Box>
            <Text mb='8px' fontSize={'1.25rem'}>Enter Description:</Text>
            <Input
                value={description}
                onChange={handleDescription}
                placeholder='Description'
                size='lg'
                isRequired
            />
        </Box>
        </Stack>
        <Button height={45} mt={10} bg={'primary.main'} onClick={handleSubmit} color={'primary.snow'}>Make Payment</Button>
    </Flex>
  )
}

export default ShowPaymentDetails