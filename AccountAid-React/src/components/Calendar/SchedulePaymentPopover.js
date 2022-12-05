import React, { useState } from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    Portal,
    Flex,
    Text,
    Grid,
    GridItem,
    Divider,
    PopoverCloseButton,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Button,
    Stack,
    Checkbox,
    CheckboxGroup,
  } from '@chakra-ui/react'
import { AiOutlineCalendar, AiOutlineCheck } from 'react-icons/ai'

function SchedulePaymentPopover({ children, isExpanded, setIsExpanded, month, year }) {
    // date picker
    const date = new Date()
    const today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    const [startDate, setStartDate] = useState(today)
    const [endDate, setEndDate] = useState(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()+7}`)
    const [amount, setAmount] = useState('')
    
    // check box state
    const [checkValue, setCheckValue] = useState('single')

    const handleStartChange = (e) => {
        setStartDate(e.target.value)
    }

    const handleEndChange = (e) => {
        setEndDate(e.target.value)
    }

    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }
  return (
    <>
    <Popover isOpen={isExpanded}>
        <PopoverTrigger>
            {children}
        </PopoverTrigger>
        <Portal>
            <PopoverContent width={450}>
                <Grid
                    h={325}
                    w='100%'
                    templateRows='repeat(5, 1fr)'
                    templateColumns='repeat(1, 1fr)'
                    gap={2}
                    p={2}
                >
                        <GridItem colSpan={1} rowSpan={1} borderRadius='6px'
                        >
                            <Flex height={25} justify='flex-start' align='center'>
                                <Text>Schedule Payments</Text>
                                <PopoverCloseButton mt={1} onClick={() => setIsExpanded(false)}/>
                            </Flex>
                            <Divider mt={2} />
                        </GridItem>
                        <GridItem rowSpan={1} colSpan={1}>
                            <Flex direction='row' justify='space-between' align='center'>
                                <Flex direction='column' width={200}>
                                    <Text mb={1}>Start Date</Text>
                                    <Input
                                        placeholder="Select Date"
                                        onChange={(e) => handleStartChange(e)}
                                        size="md"
                                        type="date"
                                        value={startDate}
                                    />
                                </Flex>
                                <Flex direction='column' width={200}>
                                    <Text mb={1}>End Date</Text>
                                    <Input
                                        isDisabled={(checkValue!=='single')}
                                        placeholder="Select Date"
                                        onChange={(e) => handleEndChange(e)}
                                        size="md"
                                        type="date"
                                        value={endDate}
                                    />
                                </Flex>
                            </Flex>
                        </GridItem>
                        <GridItem colSpan={1} rowSpan={1} >
                            <Text fontSize={'1.25rem'} mb={1}>Recurring</Text>
                                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                                    <Checkbox value='single' isChecked={checkValue==='single'} onChange={() => setCheckValue('single')}>Single</Checkbox>
                                    <Checkbox value='weekly' isChecked={checkValue==='weekly'} onChange={() => setCheckValue('weekly')}>Weekly</Checkbox>
                                    <Checkbox value='monthly'isChecked={checkValue==='monthly'} onChange={() => setCheckValue('monthly')}>Monthly</Checkbox>
                                    <Checkbox value='yearly' isChecked={checkValue==='yearly'} onChange={() => setCheckValue('yearly')}>Yearly</Checkbox>
                                </Stack>
                        </GridItem>
                        <GridItem>
                            <Text mb={1}>Amount</Text>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    color='gray.300'
                                    fontSize='1.2em'
                                    children='$'
                                />
                                <Input placeholder='Enter amount' 
                                    value={amount}
                                    onChange={(e) => handleAmountChange(e)}
                                />
                                <InputRightElement children={<AiOutlineCheck color='green.500' />} />
                            </InputGroup>
                        </GridItem>
                        <GridItem mt={2}>
                            <Flex direction='row' justify='space-between'>
                                <Button
                                    onClick={() => setIsExpanded(false)}
                                >
                                    <Text fontSize={'md'}>Cancel</Text>
                                </Button>
                                <Button
                                    isDisabled={amount===''}
                                    onClick={() => setIsExpanded(false)}
                                >
                                    <Text fontSize={'md'}>Schedule Payment</Text>
                                </Button>
                            </Flex>
                        </GridItem>
                </Grid>
                
            </PopoverContent>
        </Portal>
    </Popover>
    </>
  )
}

export default SchedulePaymentPopover