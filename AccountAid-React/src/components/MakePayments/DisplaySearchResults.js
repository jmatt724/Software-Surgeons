import { Box, Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
import { AiOutlineCaretDown } from 'react-icons/ai'
  

function DisplaySearchResults({ results, handle }) {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if(!!results && results?.length>0){
            setOpen(true)
        } else {
            setOpen(false)
        }
    }, [results])
    return (
    <Menu isOpen={open} placement={'bottom-start'}>
        <MenuButton as={'button'} righticon={<AiOutlineCaretDown />}>
    
        </MenuButton>
    <MenuList height={'60vh'} width={600} overflowX={'auto'}>
    {(!!results) ? results.map((user) => 
        <MenuItem minH='45px' minW='350' onClick={() => { handle(user.uid); setOpen(false) }} key={user.username} height={5} mt={2} mb={2}>
            <Image
                boxSize='1.5rem'
                borderRadius='full'
                src='https://placekitten.com/100/100'
                alt='Fluffybuns the destroyer'
                mr='12px'
            />
            <Text fontSize={'1rem'} fontWeight={'medium'}>{user.username}</Text>
        </MenuItem>
    )
    :
        <>
        </>
    }
    </MenuList>
    </Menu>
  )
}

export default DisplaySearchResults

/*
<Stack direction={["column"]} spacing="24px" mt={2}>
            {results.map((user) => 
                <Flex width={'100%'} bg={'gray.200'} height={65} justify={'flex-start'} align={'center'} p={2}
                    _hover={{ bg: 'gray.300', cursor: 'pointer' }}
                    onClick={() => handle(user)}
                >
                    <Heading fontSize={'1.75rem'} fontWeight={'medium'}>{user}</Heading>
                </Flex>
            )}
        </Stack> */