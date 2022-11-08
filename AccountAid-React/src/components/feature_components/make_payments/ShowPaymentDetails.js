import { Box, Button, Flex, Input, InputGroup, InputLeftElement, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useUser } from '../../../context/UserContext'
import { v4 as uuid } from 'uuid'; // library that generates random ID numbers
import getCurrentDate from '../calendar/getCurrentDate';
import { monthNames } from '../../../data/calendarData';
import { updateField, getUser } from '../../../firebase/api'
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function ShowPaymentDetails({ reciever }) {
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState('0.00')
    const [description, setDescription] = useState('')
    const { user, setCurrentUser } = useUser()
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = () => {
        const { day, month, year } = getCurrentDate()
        const today = `${monthNames[month]} ${day}, ${year}`
        const paymentID = uuid()
        const userPayment = {
            paymentID: paymentID,
            userID: user.userID,
            recipiant: reciever.name,
            sender: `${user.firstName} ${user.lastName}`,
            date: today,
            category: category,
            amount: amount
        }
        const recieverPayment = {
            paymentID: paymentID,
            userID: reciever.id,
            recipiant: reciever.name,
            sender: `${user.firstName} ${user.lastName}`,
            date: today,
            category: category,
            amount: amount
        }
        const senderBalance = ((parseFloat(user.balance) - parseFloat(amount)).toFixed(2).toString())
        const recieverBalance = ((parseFloat(reciever.data.balance) + parseFloat(amount)).toFixed(2).toString())
        const userTransactions = user.transactions
        const recieverTransactions = reciever.data.transactions
        updateField(user, 'balance', senderBalance).then(() => {
            updateField(user, 'transactions', [ ...userTransactions, userPayment ])
        })
        updateField(reciever.data, 'balance', recieverBalance).then(() => {
            updateField(reciever.data, 'transactions', [ ...recieverTransactions, recieverPayment ]).then(() => {
                navigate("/dashboard")
            })
        })
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
        <Button height={45} mt={10} bg={'primary.main'} onClick={handleSubmit} color={'primary.snow'}
            isDisabled={category==='' || amount===''}
        >Make Payment</Button>
    </Flex>
  )
}

export default ShowPaymentDetails