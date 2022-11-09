import React, { useState } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    useDisclosure,
    Flex,
    Heading,
} from '@chakra-ui/react'
import { BsSortDownAlt } from 'react-icons/bs'
import { Box } from '@chakra-ui/react';
import { useUser } from './../../../context/UserContext';

function SortTransaction({ currentSort }) {
    const [sort, setSort] = useState(currentSort)

    const { updateSortState } = useUser()
    
    const sortOptions = [
        'Category',
        'Date',
        'From',
        'To',
        'Amount',
    ]

    const handleChange = (value) => {
        setSort(value)
        updateSortState(value)
    }

    return (
        <>
        <Menu>
            <MenuButton>
            <Flex height={25} _hover={{ bg: 'gray.200' }} justify='flex-end' direction={'row'}>
                <Heading fontSize={'1.5rem'} fontWeight={'medium'}>Sort</Heading>
                <Box mt={1} ml={1}>
                    <BsSortDownAlt size={'25px'} />
                </Box>
            </Flex>
            </MenuButton>
            <MenuList>
            <MenuOptionGroup type="checkbox" defaultValue={'Date'} value={sort}>
                {sortOptions.map((option) => 
                    <MenuItemOption
                        key={option}
                        value={option}
                        onClick={() => handleChange(option)}
                    >
                        {option}
                    </MenuItemOption>
                )}
            </MenuOptionGroup>
            </MenuList>
        </Menu>
        </>
    )
}

export default SortTransaction