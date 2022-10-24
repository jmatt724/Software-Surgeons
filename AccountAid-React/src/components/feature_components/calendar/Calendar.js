import { Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import CalendarSquare from './CalendarSquare'
import { monthNames, yearRange } from '../../../data/calendarData';
import { useCalendar } from './../../../context/CalendarContext';
import CalendarHeader from './CalendarHeader';
import DisplayCalendar from './DisplayCalendar';
import SimButton from './SimButton';

function Calendar() {
    const { calendar, updateMonthSelected } = useCalendar()

    return (
        <>
        <Flex width={805} height={750} bg={'primary.secondary'}>
            <CalendarHeader calendar={calendar} />
        </Flex>
        {/*<Flex height={600} width={400}>
            
        <VStack spacing={2}>
        {calendar.months.map((month, ind) =>
            <SimButton 
                label={month}
                onClick={() => updateMonthSelected(ind)}
            />
        )}
          
        </VStack>
        
      </Flex>*/}
      </>
    )
}

export default Calendar