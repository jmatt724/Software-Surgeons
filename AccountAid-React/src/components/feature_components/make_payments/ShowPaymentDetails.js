import { Box, Button, Checkbox, Flex, Input, InputGroup, InputLeftElement, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useUser } from '../../../context/UserContext'
import { v4 as uuid } from 'uuid'; // library that generates random ID numbers
import getCurrentDate from '../calendar/getCurrentDate';
import { monthNames } from '../../../data/calendarData';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useDb } from '../../../context/DbContext';
import CategorySelect from './CategorySelect';

function ShowPaymentDetails({ reciever }) {
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState('0.00')
    const [description, setDescription] = useState('')
    const [useBucketCat, setUseBucketCat] = useState(false)
    const { user, setCurrentUser, getBucketCategories } = useUser()
    const { currentUser, logout } = useAuth()
    const { updateTransactions, updateField } = useDb()
    const navigate = useNavigate()
    //console.log('RECIEVER: ',reciever.data)
    const list = getBucketCategories()
    const categories = ( list.length===0 ) ? [] : list

    const fontSize = '1rem'

    const handleSubmit = () => {
        const { day, month, year } = getCurrentDate()
        const today = `${monthNames[month]} ${day}, ${year}`
        const paymentID = uuid()
        const userPayment = {
            paymentID: paymentID,
            recipiant: reciever.username,
            sender: `${user.firstName} ${user.lastName}`,
            date: today,
            category: category,
            amount: amount
        }
        const recieverPayment = {
            paymentID: paymentID,
            recipiant: reciever.username,
            sender: `${user.firstName} ${user.lastName}`,
            date: today,
            category: 'Web Payment',
            amount: amount
        }
        const senderBalance = ((parseFloat(user.balance) - parseFloat(amount)).toFixed(2).toString())
        const recieverBalance = ((parseFloat(reciever.data.balance) + parseFloat(amount)).toFixed(2).toString())
        const userTransactions = user.transactions
        const recieverTransactions = reciever.data.transactions
        updateField(user.userID, 'balance', senderBalance)
        updateTransactions(user, 'transactions', paymentID, userPayment)
        updateField(reciever.data.userID, 'balance', recieverBalance)
        updateTransactions(reciever.data, 'transactions', paymentID, recieverPayment)
    }

    const handleCategory = (e) => {setCategory(e.target.value)}
    const handleAmount = (e) => {setAmount(e.target.value)}
    const handleDescription = (e) => {setDescription(e.target.value)}

    useEffect(() => {
        if(!useBucketCat){
            setCategory('')
        } else {
            setCategory(categories[0])
        }
    }, [useBucketCat])

  return (
    <Flex justify={'flex-start'} direction={'column'} width={'100%'}>
        <Flex justify='flex-start' align='center'>
            <Text fontSize={'1.25rem'} mb={4}>Pay: {reciever.username}</Text>
        </Flex>
        <Stack direction={["column"]} spacing={'24px'}>
        <Flex>
            <Checkbox value={useBucketCat} onChange={() => setUseBucketCat(!useBucketCat)}>Bucket Category</Checkbox>
        </Flex>
        <Box>
            <Text mb='8px' fontSize={fontSize}>Category:</Text>
            {useBucketCat
            ?
            <CategorySelect 
                value={category}
                options={categories}
                onChange={setCategory}
            />
            :
            <Input
                value={category}
                onChange={handleCategory}
                placeholder='Category'
                size='md'
                isRequired
            />
            }
        </Box>
        <Box>
            <Text mb='8px' fontSize={fontSize}>Amount:</Text>
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
                    size='md'
                    isRequired
                />
            </InputGroup>
        </Box>
        <Box>
            <Text mb='8px' fontSize={fontSize}>Description:</Text>
            <Input
                value={description}
                onChange={handleDescription}
                placeholder='Description'
                size='md'
                isRequired
            />
        </Box>
        </Stack>
        <Button height={45} mt={10} bg={'primary.main'} onClick={handleSubmit} color={'primary.snow'}
            isDisabled={category==='' || amount==='' || amount==='0.00'}
        >Make Payment</Button>
    </Flex>
  )
}

export default ShowPaymentDetails