import React from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    Portal,
    Flex,
    Text,
    Grid,
    GridItem,
  } from '@chakra-ui/react'

function SelectMonth({ children, isExpanded, setIsExpanded, months, currentMonth }) {
  return (
    <>
    <Popover isOpen={isExpanded}>
        <PopoverTrigger>
            {children}
        </PopoverTrigger>
        <Portal>
            <PopoverContent>
                <Grid
                    h={250}
                    w='100%'
                    templateRows='repeat(4, 1fr)'
                    templateColumns='repeat(3, 1fr)'
                    gap={1}
                    p={2}
                >
                    {months.map((month) => 
                        <GridItem colSpan={1} rowSpan={1} bg={(currentMonth===month) ? 'primary.secondary' : 'primary.lightBlue'} borderRadius='6px'
                            _hover={{ bg: 'gray.200', cursor: 'pointer' }}
                            onClick={() => {
                                setIsExpanded(months.indexOf(month))
                            }}
                            key={month}
                        >
                            <Flex height={'100%'} justify='center' align='center'>
                                <Text color={'primary.snow'}>{month.substring(0,3)}</Text>
                            </Flex>
                        </GridItem>
                    )}
                </Grid>
                
            </PopoverContent>
        </Portal>
    </Popover>
    </>
  )
}

export default SelectMonth