import React, { useEffect, useRef } from 'react'
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

function SelectYear({ children, isExpanded, setIsExpanded, years, currentYear, scrollRef }) {
    
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
                    scrollBehavior={'smooth'}
                    overflowX={'auto'}
                >
                    {years.map((year) => 
                        <GridItem colSpan={1} rowSpan={1} bg={(currentYear===year) ? 'primary.secondary' : 'primary.lightBlue'} borderRadius='6px'
                            ref={currentYear===year ? scrollRef : null}
                            _hover={{ bg: 'gray.200', cursor: 'pointer' }}
                            onClick={() => {
                                setIsExpanded(year)
                            }}
                        >
                            <Flex height={'100%'} justify='center' align='center'>
                                <Text color={'primary.snow'}>{year}</Text>
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

export default SelectYear