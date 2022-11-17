import { Flex } from '@chakra-ui/react'
import React from 'react'

function Card(props) {
  return (
    <Flex
      boxShadow="0 4px 12px 0 rgba(0,0,0,0.3)"
      borderRadius={10}
      bg={'primary.snow'}
      { ...props }
    >
        {props.children}
    </Flex>
  )
}

export default Card