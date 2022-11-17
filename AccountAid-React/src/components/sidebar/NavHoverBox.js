import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

function NavHoverBox({ title }) {
  return (
    <>
        <Flex 
          pos="absolute"
          mt="calc(25px - 9px)"
          ml="-10px"
          w="0"
          h="0"
          borderTop="10px solid transparent"
          borderBottom="10px solid transparent"
          borderRight="10px solid #3F88C5"
        />
        <Flex
            h="50"
            w="150"
            flexDir="column"
            align="center"
            justify="center"
            bg="primary.main"
            borderRadius='10px'
            color="#fff"
            textAlign='center'
        >
            <Heading size='sm' fontWeight='normal'>{title}</Heading>
        </Flex>
    </>
  )
}

export default NavHoverBox