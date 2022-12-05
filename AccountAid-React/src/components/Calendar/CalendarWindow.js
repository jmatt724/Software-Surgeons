import { Box, Button, Divider, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import DaySquare from './DaySquare'
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import SelectMonth from './SelectMonth'
import SelectYear from './SelectYear'
import SchedulePaymentPopover from './SchedulePaymentPopover';


function CalendarWindow() {
    const dayLabels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    
    // getting the date of the current day
    const today = new Date()
    const currentDate = today.getDate()
    const currentMonth = today.getMonth()
    const currentDay = dayLabels[ today.getDay() ]
    const currentYear = today.getFullYear()
    
    const getYears = () => {
        let years = []
        for(let i = currentYear-50; i < currentYear+50; i++){
            years.push(i)
        }
        return years
    }

    const yearRange = getYears()

    const [month, setMonth] = useState(currentMonth)
    const [year, setYear] = useState(currentYear)
    const [monthExpanded, setMonthExpanded] = useState(false)
    const [yearExpanded, setYearExpanded] = useState(false)
    const [paymentExpanded, setPaymentExpanded] = useState(false)

    const row = new Array(42).fill(0)
    const startDay = new Date(year, month, 1).getDay()
    const endDate = new Date(year, month+1, 0).getDate()

    // selecting a day
    const [selected, setSelected] = useState()

    let counter = 0
    let countNextMonth = 0

    // handle scrolling the current year into view on selecting year
    const scrollRef = useRef(null)
    const executeScroll = () => { 
        scrollRef.current.scrollIntoView({block: "center"}) 
    }

    const handleMonthExpand = () => {
        setMonthExpanded(!monthExpanded)
    }

    const handleSelectMonth = (month) => {
        setMonth(month)
        setMonthExpanded(!monthExpanded)
    }

    const handleYearExpand = () => {
        executeScroll()
        setYearExpanded(!yearExpanded)
    }

    const handleSelectYear = (year) => {
        setYear(year)
        setYearExpanded(!yearExpanded)
    }

    const handlePaymentExpand = () => {
        setPaymentExpanded(!paymentExpanded)
    }

    const getDayNumber = (index) => {
        if(index<startDay){
            const prevMonth = new Date(year, month, 0).getDate()
            return prevMonth+(index-startDay)+1
        }
        if(index>=startDay && (index-startDay)<endDate){
            counter++
            return counter
        }
        if(index>(startDay+endDate)-1){
            countNextMonth++
            return countNextMonth
        }
    }

    const handleDaySelect = (day, month, year) => {
        setSelected({ day: day, month: month, year: year })
        //console.log(`${day} ${month}, ${year}`)
    }

    return (
        <Flex
            h="575px"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
            borderRadius={"10px"}
            w={"600px"}
            flexDir="column"
            ml={2}
            bg={'primary.snow'}
        >
            <Flex
                pos='sticky'
                p="2%"
                flexDir="column"
                bg={'primary.snow'}
                borderTopRadius={"inherit"}
                h={'15%'}
                justify='center'
                align='center'
            >
                <SelectMonth isExpanded={monthExpanded} setIsExpanded={handleSelectMonth} months={months} currentMonth={months[month]}>
                    <Flex direction='row' align='center' _hover={{ bg: 'none', cursor: 'pointer' }}
                        onClick={handleMonthExpand}
                    >
                        <Heading fontWeight={'normal'}>{months[month]}</Heading>
                        <Box mt={3} ml={2}>
                            {monthExpanded ? <AiOutlineCaretUp /> : <AiOutlineCaretDown/> }
                        </Box>
                    </Flex>
                </SelectMonth>
                <SelectYear isExpanded={yearExpanded} setIsExpanded={handleSelectYear} years={yearRange} currentYear={year} scrollRef={scrollRef}>
                    <Flex direction='row' align='center' _hover={{ bg: 'none', cursor: 'pointer' }}
                        onClick={handleYearExpand}
                    >
                        <Text fontWeight={'normal'}>{yearRange[yearRange.indexOf(year)]}</Text>
                        <Box mt={1} ml={2}>
                            {yearExpanded ? <AiOutlineCaretUp /> : <AiOutlineCaretDown/> }
                        </Box>
                    </Flex>
                </SelectYear>
            </Flex>
            <Divider />
            <Flex
                pos='sticky'
                p="2%"
                flexDir="row"
                bg={'primary.snow'}
                h={'5%'}
                justify='center'
                align='center'
                gap={14}
            >
                {dayLabels.map((day) => 
                    <Flex width={'5%'} key={day}>
                        <Text key={day}>{day.substring(0, 3)}</Text>
                    </Flex>
                )}
                
            </Flex>

            <Flex
                pos='sticky'
                p="2%"
                flexDir="column"
                bg={'primary.main'}
                borderBottomRadius={"inherit"}
                h={'100%'}
                justify='center'
                align='center'
            >
                {!!selected &&
                <>
                <Flex 
                    bg={'primary.dark'}
                    opacity={0.7}
                    position='absolute'
                    borderBottomRadius={'inherit'}
                    left={0}
                    top={0}
                    h={'100%'}
                    w={'100%'}
                    zIndex={3}
                    onClick={() => setSelected()}
                />
                <Flex bg={'primary.snow'}
                        borderRadius='md'
                        position='absolute'
                        left={0}
                        top={0}
                        h={85}
                        w={100}
                        zIndex={6}
                        opacity={1}
                        mt={2}
                        ml={2}
                        justify='flex-start'
                        align='baseline'
                        onClick={() => setSelected()}
                >
                    <Text fontSize={'1.5rem'} ml={2}>{selected.day}</Text>
                </Flex>
                <Flex
                        borderRadius='md'
                        position='absolute'
                        h={'100%'}
                        w={'calc(100% - 120px)'}
                        zIndex={6}
                        opacity={1}
                        justify='flex-start'
                        left={100}
                        ml={2}
                        p={2}
                        onClick={() => setSelected()}
                >
                    <Heading color='primary.snow' fontSize={'1.25rem'}>{`${dayLabels[new Date(selected.year, selected.month, selected.day).getDay()]} ${months[selected.month].substring(0,3)} ${selected.day}, ${selected.year}`}</Heading>
                </Flex>
                </>
                }
                
                <Grid
                    h='100%'
                    w='100%'
                    templateRows='repeat(6, 1fr)'
                    templateColumns='repeat(7, 1fr)'
                    gap={1}
                >
                    {row.map((__, index) => 
                            <GridItem colSpan={1} rowSpan={1} bg={'primary.snow'} borderRadius='6px' key={index}>
                                <DaySquare
                                    key={index}
                                    handleClick={handleDaySelect}
                                    day={getDayNumber(index)}
                                    month={month}
                                    year={year}
                                    current={!(index>=startDay && (index-startDay)<endDate)}
                                    today={{
                                        day: currentDay,
                                        date: currentDate,
                                        month: currentMonth,
                                        year: currentYear
                                    }}
                                />
                            </GridItem>
                    )}
                </Grid>
            </Flex>
            <Flex
                pos='sticky'
                p="2%"
                flexDir="row"
                bg={'primary.snow'}
                borderBottomRadius={"inherit"}
                h={50}
                w='100%'
                justify='flex-end'
                align='center'
            >
                <SchedulePaymentPopover isExpanded={paymentExpanded} setIsExpanded={handlePaymentExpand} month={months[month]} year={year}>
                    <Button 
                        h={25}
                        bg={'primary.main'}
                        p={2}
                        onClick={handlePaymentExpand}
                    >
                        <Text fontSize={'sm'}>Schedule Payment</Text>
                    </Button>
                </SchedulePaymentPopover>
            </Flex>
        </Flex>
    )
}

export default CalendarWindow