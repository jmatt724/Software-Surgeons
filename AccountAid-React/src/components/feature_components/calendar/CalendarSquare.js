import React, { useEffect, useState } from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react';
import { useCalendar } from './../../../context/CalendarContext';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
} from '@chakra-ui/react'
import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import CalendarForm from './CalendarForm';

function CalendarSquare({ wd, ht, day, start, end, dayOfWeek}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { calendar, updateDaySelected, updatePayments } = useCalendar()
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState(0)
    
    const handleCategoryChange = (e) => setCategory(e.target.value)
    const handleAmountChange = (e) => setAmount(e.target.value)

    const initialRef = React.useRef(null)

    const isError = category === '' || ( amount === 0 || amount === '' )

    const currentDay = day-start+1
    let empty = false
    const getDate = () => {
        const date = `${dayOfWeek}, ${calendar.months[calendar.selectedMonth]} ${calendar.selectedDay}`
        return date
    }

    if(day < start || currentDay > end) {
        empty = true
    } else {
        empty = false
    }

    const handleChange = () => {
        console.log('Update: ',currentDay)
        updateDaySelected(currentDay)
    }

    const handleSubmit = () => {
        const payment = {
            year: calendar.selectedYear,
            month: calendar.selectedMonth,
            day: currentDay,
            dayOfWeek: dayOfWeek,
            category: category,
            amount: amount
        }
        updatePayments(payment)
    }

    function CalendarFormModal({ opener, date }) {
        return (
          <>
            {opener}
            <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Create Payment on {date}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl isInvalid={isError}>
                        <FormLabel>Category</FormLabel>
                        <Input type='category' value={category} onChange={handleCategoryChange} />
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
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button variant='ghost' onClick={() => { handleSubmit(); onClose(); }}>Add Payment</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )  
    }

    return (
        <>
        {empty ? <Box width={wd || 114.5} height={ht || 100} bg={'primary.dark'} border={'1px solid snow'}></Box>
        :   
        <CalendarFormModal 
            date={getDate()}
            opener={
                <Box width={wd || 114.5} height={ht || 100} bg={'primary.snow'} border={'1px solid black'} 
                    _hover={{ bg: 'gray.300', cursor: 'pointer' }}
                    onClick={() => {handleChange(); onOpen();}}
                >
                    <Flex width={'35%'} height={'35%'} justify='center' align='center' 
                        bg={(currentDay===calendar.selectedDay) ? 'primary.secondary' : 'primary.lightBlue'}
                    >
                        <Heading fontSize={'1.75rem'}>{currentDay || ''}</Heading>
                    </Flex>
                </Box>
            }/>    
        }
        </>
    )
}

export default CalendarSquare