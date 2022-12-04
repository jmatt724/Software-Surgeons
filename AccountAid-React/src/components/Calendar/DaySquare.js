import { Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

function DaySquare({ day, month, year, current, today, handleClick }, props) {
    const [expanded, setExpanded] = useState(false)

    const isCurrentDay = () => {
        if(today.date===day && today.month===month && today.year===year){
            return true
        }
        return false
    }

    return (
        <Flex
            key={props.key}
            h='100%'
            w={'100%'}
            bg={ (current) ? 'gray.400' : 'none' && ( (isCurrentDay()) && 'primary.secondary' )}
            _hover={{ bg: 'gray.200', cursor: 'pointer' }}
            borderRadius='inherit'
            onClick={() => { (!current) && handleClick(day, month, year); setExpanded(!expanded) }}
            { ...props }
        >
            <Text ml={1}>{day}</Text>
        </Flex>
    )
}

export default DaySquare