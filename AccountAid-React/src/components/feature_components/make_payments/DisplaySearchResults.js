import { Box, Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
import { AiOutlineCaretDown } from 'react-icons/ai'
  

function DisplaySearchResults({ results, handle }) {
return (
    <Menu isOpen={(!!results && results?.length>0)}>
        <MenuButton as={'button'} righticon={<AiOutlineCaretDown />}>
        <Flex mt={4} direction={'column'}>
            <Text>Users</Text>
        </Flex>
        </MenuButton>
    <MenuList>
    {(!!results) ? results.map((user) => 
        <MenuItem minH='10px' width={650} onClick={() => handle(user.user)} key={user.name} height={5} mt={2} mb={2}>
            <Image
                boxSize='1.5rem'
                borderRadius='full'
                src='https://placekitten.com/100/100'
                alt='Fluffybuns the destroyer'
                mr='12px'
            />
            <Text fontSize={'1rem'} fontWeight={'medium'}>{user.name}</Text>
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