import { Flex, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import SearchBarWindow from './SearchBar/SearchBarWindow'
import { BiExpandAlt } from 'react-icons/bi'

function FriendList() {
    const [expanded, setExpanded] = useState(true)

    return (
        <Flex
            position='absolute'
            right={6}
            bottom={7}
        >
        {expanded 
        ?   <SearchBarWindow 
                handleClose={setExpanded}
            />
        :   
        <Flex
            w={250}
            h={50}
            bg={'primary.snow'}
            boxShadow="0 4px 12px 0 rgba(0,0,0,0.25)"
            borderRadius={"5px"}
            justify='space-between'
            align='center'
            _hover={{ bg: 'gray.200', cursor: 'pointer' }}
            onClick={() => setExpanded(!expanded)}
            
        >
            <Heading ml={6} fontSize={'1.25rem'} fontWeight='normal'>Friends</Heading>
            <Flex justify='center' align='center' mr={5}>
                <BiExpandAlt />
            </Flex>
        </Flex>
        }
        </Flex>
    )
}

export default FriendList