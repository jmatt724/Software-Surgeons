import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import DisplayCalendar from './DisplayCalendar'
import CalendarSquare from './CalendarSquare';

function CalendarHeader({ calendar }) {
    //const daysInMth = new Date(year, month+1, 0).getDate() // number of days in selected month
    //const startDay = new Date(year, month, 1).getDay() // first day of the month
    //const endDay = new Date(year, month, daysInMth).getDay()
    const selectedMonth = calendar.months[calendar.selectedMonth]
    
    return (
        <Flex width={'100%'} height={'100%'} bg={'primary.main'} direction={'column'}>
            <Flex width={'100%'} height={'15%'} bg={'primary.snow'} justify='center' align='center' direction={'column'}>
                <Heading fontSize={'2.25rem'}>{ selectedMonth }</Heading>
                <Heading fontSize={'1.5rem'} fontWeight={'light'}>{ calendar.selectedYear }</Heading>
            </Flex>
            <Flex>
                {calendar.days.map((day) => 
                    <Flex height={'100%'} width={'30%'} bg={'primary.secondary'} justify='center' align='center'>
                        <Heading fontSize={'2rem'}>{day.substring(0,2)}</Heading>
                    </Flex>
                )}
            </Flex>
            <Flex justify='center' align='center'>
                <DisplayCalendar 
                    data={calendar}
                />
            </Flex>
        </Flex>
    )
}

export default CalendarHeader