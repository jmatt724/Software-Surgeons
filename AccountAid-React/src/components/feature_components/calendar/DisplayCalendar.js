import { Flex, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import CalendarSquare from './CalendarSquare'

function DisplayCalendar({ data }) {
    const daysInMth = new Date(data.selectedYear, data.selectedMonth+1, 0).getDate() // number of days in selected month
    const startDay = new Date(data.selectedYear, data.selectedMonth, 1).getDay() // first day of the month
    //const endDay = new Date(data.selectedYear, data.selectedMonth, daysInMth).getDay() // last day of the month
    const slotCount = 42

    const generateSquares = () => {
        let squares = []
        for(let i = 1; i <= slotCount; i++){
            squares.push(i)
        }
        return squares
    }
    const squares = generateSquares()

    const getDaysOfWeek = () => {
        
        const daysOfWeek = squares.map((i) => {
            let days = []
            if(i >= startDay) {
                if(i >= 7){
                    days.push((i%7===0) ? data.days[0] : data.days[i%7])
                }
                else{
                    days.push(data.days[i])
                }
            }
            return days
        })
        return daysOfWeek
    }

    const daysOfWeek = getDaysOfWeek()

    return (
        <Flex height={'100%'} width={'100%'} justify='center' align='center'>
            <SimpleGrid columns={7}>
                {squares.map((day, ind) =>
                    <CalendarSquare day={day} start={startDay+1} end={daysInMth} index={ind} dayOfWeek={daysOfWeek[ind-1]}/>
                )}
            </SimpleGrid>
        </Flex>
    )
}

export default DisplayCalendar