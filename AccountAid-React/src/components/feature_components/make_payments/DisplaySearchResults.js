import { Flex, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function DisplaySearchResults({ results, handle }) {
  return (
    <Flex mt={4} direction={'column'}>
        <Text>Users</Text>
        <Stack direction={["column"]} spacing="24px" mt={2}>
            {results.map((user) => 
                <Flex width={'100%'} bg={'gray.200'} height={65} justify={'flex-start'} align={'center'} p={2}
                    _hover={{ bg: 'gray.300', cursor: 'pointer' }}
                    onClick={() => handle(user)}
                >
                    <Heading fontSize={'1.75rem'} fontWeight={'medium'}>{user}</Heading>
                </Flex>
            )}
        </Stack>
    </Flex>
  )
}

export default DisplaySearchResults